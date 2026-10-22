/* Storia della musica illustrata – app di lettura
   Funziona anche senza internet: basta aprire index.html con il browser. */
(function () {
  "use strict";
  var B = window.BOOK;
  var ACCENTS = ["#2E7D7A", "#A9541F", "#3F6E9E", "#4E7A2E", "#A8323A", "#A34E7C", "#4B4E9A", "#744A9C", "#227575"];
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- memoria locale (facoltativa) ---------- */
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem("smi_" + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem("smi_" + k, JSON.stringify(v)); } catch (e) {} }
  };
  var S = {
    voice: store.get("voice", ""),
    rate: store.get("rate", 0.95),
    size: store.get("size", 1),
    auto: store.get("auto", false),
    sfx: store.get("sfx", true),
    files: store.get("files", false)
  };

  /* ---------- testo ---------- */
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function fmt(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/_(.+?)_/g, "<em>$1</em>"); }
  function plain(s) { return String(s).replace(/\*\*(.+?)\*\*/g, "$1").replace(/_(.+?)_/g, "$1"); }

  /* ---------- icone ---------- */
  var IC = {
    play: '<svg class="i-play" viewBox="0 0 24 24"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>',
    pause: '<svg class="i-pause" viewBox="0 0 24 24"><rect x="6" y="5" width="4.2" height="14" rx="1.2"/><rect x="13.8" y="5" width="4.2" height="14" rx="1.2"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
    eye: '<svg viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    id: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2.2"/><path d="M6 16c.8-1.6 1.8-2.3 3-2.3s2.2.7 3 2.3M14.5 10h4M14.5 13.5h3"/></svg>',
    note: '<svg viewBox="0 0 24 24"><path d="M9 17.5V5.2l10-2v11.3"/><circle cx="6.5" cy="17.5" r="2.8"/><circle cx="16.5" cy="14.5" r="2.8"/></svg>',
    home: '<svg viewBox="0 0 24 24"><path d="M4 11l8-7 8 7M6 9.5V20h12V9.5"/></svg>',
    reset: '<svg viewBox="0 0 24 24"><path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1"/><path d="M3.5 4v4.5H8"/></svg>',
    down: '<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>'
  };
  function ott(name) { return "img/ottavio/" + name + ".png"; }

  /* ---------- elenco delle pagine ---------- */
  var PAGES = [];
  function add(p) { p.i = PAGES.length; PAGES.push(p); }
  add({ id: "copertina", type: "cover", label: "Copertina" });
  add({ id: "indice", type: "index", label: "Indice" });
  add({ id: "prefazione", type: "preface", label: "Prefazione" });
  B.chapters.forEach(function (ch, ci) {
    ch.acc = ACCENTS[ch.n] || ACCENTS[0];
    add({ id: "c" + ch.n, type: "opener", ch: ch, label: "Capitolo " + ch.n });
    ch.sections.forEach(function (s, si) { add({ id: "c" + ch.n + "-" + (si + 1), type: "section", ch: ch, s: s, label: s.id + " " + s.title }); });
    add({ id: "c" + ch.n + "-riepilogo", type: "summary", ch: ch, label: "Fine del capitolo " + ch.n });
    add({ id: "c" + ch.n + "-gioco", type: "quiz", ch: ch, label: "Gioca con Ottavio" });
    add({ id: "c" + ch.n + "-parole", type: "words", ch: ch, label: "Parole da ricordare" });
  });
  add({ id: "finale", type: "finale", label: "Tocca a te!" });
  add({ id: "parole", type: "glossary", label: "Le parole della musica" });
  add({ id: "info", type: "info", label: "Informazioni" });
  var byId = {}; PAGES.forEach(function (p) { byId[p.id] = p; });
  var cur = 0;

  /* ---------- costruzione delle pagine ---------- */
  function bubble(text, pose, cls) {
    return '<div class="ott ' + (cls || "") + '" data-tts data-ttsprefix="Ottavio dice: "><img src="' + ott(pose || "indica") + '" alt="Ottavio">' +
      '<div class="bubble"><span class="lbl">Ottavio dice</span><p>' + fmt(text) + "</p></div></div>";
  }
  function paras(arr) {
    return arr.map(function (x) {
      if (typeof x === "string") return '<p data-tts>' + fmt(x) + "</p>";
      if (x.list) return '<ul class="plain" data-tts>' + x.list.map(function (li) { return "<li>" + fmt(li) + "</li>"; }).join("") + "</ul>";
      return "";
    }).join("");
  }
  function idcard(c) {
    var pic = c.img ? '<img class="pic" src="img/ritratti/' + c.img + '.jpg" alt="">' : '<div class="pic medal">' + IC.note + "</div>";
    return '<div class="idcard" data-tts data-ttsprefix="Carta d\'identità. "><div class="idcard-h">' + IC.id + " Carta d'identità</div>" +
      '<div class="idcard-b">' + pic + "<dl>" + c.rows.map(function (r) { return "<dt>" + esc(r[0]) + ":</dt><dd>" + fmt(r[1]) + "</dd>"; }).join("") + "</dl></div></div>";
  }
  function listenBox(L) {
    var f = esc(L.file);
    return '<div class="box box-listen' + (L.optional ? " optional" : "") + '" data-tts data-ttsprefix="' + (L.optional ? "Ascolta anche: " : "Ascolta! ") + '">' +
      '<div class="box-h"><img src="' + ott("ascolta") + '" alt=""><span>' + (L.optional ? "Ascolta anche" : "Ascolta!") + "</span>" + (L.optional ? '<span class="tag-opt" data-notts>facoltativo</span>' : "") + "</div>" +
      "<h4>" + fmt(L.title) + "</h4><p>" + fmt(L.text) + "</p>" +
      '<div class="player" data-notts data-src="audio/' + f + '"><button class="play" aria-label="Ascolta il brano">' + IC.play + IC.pause + "</button>" +
      '<div class="track" role="slider" aria-label="Posizione nel brano" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" tabindex="0"><div class="fill"></div></div><span class="time">–:–</span></div>' +
      '<div class="missing-msg" data-notts>Questo brano non è ancora disponibile.</div>' +
      '<div class="filename" data-notts>File: audio/' + f + "</div>" + creditLine(L.file) + "</div>";
  }
  function creditLine(file) {
    var c = (window.CREDITI || {})[file];
    if (!c) return "";
    return '<div class="credit" data-notts>Esecuzione: ' + esc(c.esec) + " · " + esc(c.lic) + "</div>";
  }
  function knowBox(t) {
    return '<div class="box box-know" data-tts data-ttsprefix="Lo sapevi? "><div class="box-h"><img src="' + ott("idea") + '" alt=""><span>Lo sapevi?</span></div><p>' + fmt(t) + "</p></div>";
  }
  function table(t) {
    return '<table class="tbl" data-tts><thead><tr>' + t.head.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      t.rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + fmt(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table>";
  }
  function sceneImg(name, alt) {
    return '<figure class="scene-wrap"><img class="scene" src="img/scene/' + name + '.jpg" alt="' + esc(alt) + '" data-zoom></figure>';
  }

  var R = {};
  R.cover = function () {
    return '<div class="pg pg-cover"><img class="bgimg" src="img/scene/' + B.cover.img + '.jpg" alt="' + esc(B.cover.alt) + '">' +
      '<div class="cover-col"><div class="cover-title" data-tts><h1>' + esc(B.title) + '</h1><p class="sub">' + esc(B.subtitle) + '</p><p class="auth">' + esc(B.author) + "</p></div>" +
      '<div class="cover-actions"><button class="cta" data-go="prefazione">Inizia il viaggio ' + IC.arrow + '</button><button class="cta light" data-go="indice">Indice</button></div></div>' +
      '<img class="cover-ott" src="' + ott("saluta") + '" alt="Ottavio saluta"></div>';
  };
  R.index = function () {
    var cards = B.chapters.map(function (ch) {
      return '<button class="chap-card" style="--acc:' + ch.acc + '" data-go="c' + ch.n + '"><img src="img/thumb/' + ch.img + '.jpg" alt="" loading="lazy">' +
        '<span class="cc-t"><span class="cc-n">Capitolo ' + ch.n + '</span><span class="cc-title">' + esc(ch.title) + "</span></span></button>";
    }).join("");
    return '<div class="pg pg-index"><div class="idx-head"><img src="' + ott("indica") + '" alt=""><div><h1 data-tts>' + esc(B.title) + '</h1><p>' + esc(B.subtitle) + " · " + esc(B.author) + "</p></div></div>" +
      '<div class="idx-grid">' + cards + "</div>" +
      '<div class="idx-extra"><button class="pill" data-go="prefazione"><img src="' + ott("legge") + '" alt="">Prefazione</button>' +
      '<button class="pill" data-go="parole"><img src="' + ott("idea") + '" alt="">Le parole della musica</button>' +
      '<button class="pill" data-go="finale"><img src="' + ott("festeggia") + '" alt="">Tocca a te!</button>' +
      '<button class="pill" data-go="info"><img src="' + ott("ritratto") + '" alt="">Informazioni</button></div></div>';
  };
  R.preface = function () {
    var p = B.preface;
    return '<div class="pg pg-split"><div class="col-media">' + sceneImg(p.img, p.alt) + "</div>" +
      '<div class="col-text"><span class="kicker">Benvenuti</span><h2 data-tts>' + esc(p.title) + "</h2>" + paras(p.body) +
      '<button class="cta" data-go="indice" style="margin-top:.4rem">Vai all\'indice ' + IC.arrow + "</button></div></div>";
  };
  R.opener = function (pg) {
    var ch = pg.ch;
    return '<div class="pg pg-opener"><div class="opener-panel"><div class="scroll"><span class="chap-badge">Capitolo ' + ch.n + "</span>" +
      '<h1 data-tts data-ttsprefix="Capitolo ' + ch.n + '. ">' + esc(ch.title) + '</h1><p class="sub" data-tts>' + esc(ch.subtitle) + "</p>" + paras(ch.intro) + "</div>" +
      bubble(ch.ottavio, "saluta") +
      '<div class="actions"><button class="cta" data-go="' + PAGES[pg.i + 1].id + '">Comincia ' + IC.arrow + "</button></div></div>" +
      '<div class="opener-media">' + sceneImg(ch.img, ch.alt) + "</div></div>";
  };
  R.section = function (pg) {
    var ch = pg.ch, s = pg.s, h = "";
    h += '<div class="pg pg-split"><div class="col-media">' + sceneImg(s.img, s.alt) + (s.ottavio ? bubble(s.ottavio, "indica") : "") + "</div>";
    h += '<div class="col-text"><span class="kicker">Capitolo ' + ch.n + " · " + esc(s.id) + "</span>";
    h += '<h2 data-tts>' + esc(s.title) + "</h2>" + paras(s.body);
    if (s.table) h += table(s.table);
    if (s.cards) h += s.cards.map(idcard).join("");
    if (s.listen) h += s.listen.map(listenBox).join("");
    if (s.know) h += knowBox(s.know);
    h += "</div></div>";
    return h;
  };
  R.summary = function (pg) {
    var ch = pg.ch;
    return '<div class="pg pg-end"><div class="end-side"><span class="chap-badge">Capitolo ' + ch.n + "</span><h2 data-tts>Fine del capitolo " + ch.n + '</h2><img src="' + ott("festeggia") + '" alt="Ottavio salta di gioia"></div>' +
      '<div class="end-main"><h3 data-tts>In poche parole</h3><ol class="summary">' + ch.summary.map(function (x) { return "<li data-tts>" + fmt(x) + "</li>"; }).join("") + "</ol>" +
      '<div class="box box-game" data-tts data-ttsprefix="Proviamo insieme. "><div class="box-h"><img src="' + ott("saluta") + '" alt=""><span>Proviamo insieme</span></div><p>' + fmt(ch.game) + "</p></div></div></div>";
  };
  var quizState = {};
  function shuffled(n) { var a = []; for (var i = 0; i < n; i++) a.push(i); for (var j = a.length - 1; j > 0; j--) { var k = Math.floor(Math.random() * (j + 1)); var t = a[j]; a[j] = a[k]; a[k] = t; } return a; }
  R.quiz = function (pg) {
    var ch = pg.ch, st = quizState[ch.n];
    st = quizState[ch.n] = { order: ch.quiz.map(function (q) { return shuffled(q.a.length); }), done: {}, first: {}, tried: {} };
    var cards = ch.quiz.map(function (q, qi) {
      var opts = st.order[qi].map(function (ai) {
        var cls = "opt"; var mark = "";
        if (st.done[qi] && ai === 0) { cls += " right"; mark = "✓"; }
        else if (st.tried[qi] && st.tried[qi][ai]) { cls += " wrong"; mark = "✗"; }
        return '<button class="' + cls + '" data-q="' + qi + '" data-a="' + ai + '"' + (st.done[qi] ? " disabled" : "") + '><span class="mark">' + mark + "</span><span>" + fmt(q.a[ai]) + "</span></button>";
      }).join("");
      return '<div class="qcard' + (st.done[qi] ? " done" : "") + '" data-tts><div class="qn">Domanda ' + (qi + 1) + '</div><div class="qq">' + fmt(q.q) + '</div><div class="opts">' + opts + "</div></div>";
    }).join("");
    return '<div class="pg pg-end"><div class="end-side"><span class="chap-badge">Capitolo ' + ch.n + '</span><h2 data-tts>Gioca con Ottavio</h2><img class="ott-idea" src="' + ott("idea") + '" alt="Ottavio ha un\'idea"><p style="margin:0;font-weight:700">Tocca la risposta giusta!</p>' +
      '<button class="small-btn quiz-reset" data-replay="' + ch.n + '" data-notts>' + IC.reset + 'Cancella le risposte</button></div>' +
      '<div class="end-main"><div class="quiz-grid" data-ch="' + ch.n + '">' + cards +
      '<div class="qresult"><img src="' + ott("festeggia") + '" alt=""><div><p class="qres-t"></p><button class="small-btn" data-replay="' + ch.n + '">Gioca di nuovo</button></div></div></div></div></div>';
  };
  R.words = function (pg) {
    var ch = pg.ch;
    return '<div class="pg pg-end"><div class="end-side"><span class="chap-badge">Capitolo ' + ch.n + '</span><h2 data-tts>Parole da ricordare</h2><img src="' + ott("legge") + '" alt="Ottavio legge"></div>' +
      '<div class="end-main"><div class="words-grid">' + ch.words.map(function (w) { return '<div class="word" data-tts><b>' + esc(w[0]) + "</b><span>" + fmt(w[1]) + "</span></div>"; }).join("") + "</div>" +
      (ch.n < B.chapters.length ? '<button class="cta" style="margin-top:1.2rem" data-go="c' + (ch.n + 1) + '">Capitolo ' + (ch.n + 1) + " " + IC.arrow + "</button>" : '<button class="cta" style="margin-top:1.2rem" data-go="finale">Tocca a te! ' + IC.arrow + "</button>") +
      "</div></div>";
  };
  R.finale = function () {
    var f = B.finale;
    return '<div class="pg pg-opener pg-finale"><div class="opener-panel"><div class="scroll"><span class="chap-badge" style="background:var(--teal)">Pagina finale</span><h1 data-tts>' + esc(f.title) + "</h1>" + paras(f.body) + "</div>" +
      bubble(f.ottavio, "festeggia") +
      '<div class="actions"><button class="cta" data-go="indice">Torna all\'indice</button><button class="cta light" data-go="copertina">Ricomincia</button></div></div>' +
      '<div class="opener-media">' + sceneImg(f.img, f.alt) + "</div></div>";
  };
  var ALLWORDS = [];
  B.chapters.forEach(function (ch) { ch.words.forEach(function (w) { ALLWORDS.push({ t: w[0], d: w[1], ch: ch }); }); });
  ALLWORDS.sort(function (a, b) { return a.t.localeCompare(b.t, "it"); });
  R.glossary = function () {
    return '<div class="pg pg-doc"><div class="doc-head"><img src="' + ott("idea") + '" alt=""><div><h1 data-tts>Le parole della musica</h1><p style="margin:0">Tutte le parole da ricordare dei capitoli, in ordine alfabetico.</p></div></div>' +
      '<input class="search" type="search" placeholder="Cerca una parola…" aria-label="Cerca una parola" data-gsearch><div data-glist>' + glossaryList("") + "</div></div>";
  };
  function glossaryList(q) {
    q = q.trim().toLowerCase();
    var html = "", last = "";
    var items = ALLWORDS.filter(function (w) { return !q || (w.t + " " + w.d).toLowerCase().indexOf(q) >= 0; });
    var groups = {};
    items.forEach(function (w) { var L = w.t.charAt(0).toUpperCase(); (groups[L] = groups[L] || []).push(w); });
    Object.keys(groups).sort(function (a, b) { return a.localeCompare(b, "it"); }).forEach(function (L) {
      html += '<div class="gl-letter">' + L + '</div><div class="gl-grid">' + groups[L].map(function (w) {
        return '<div class="gl-item" style="--acc:' + w.ch.acc + '"><b>' + esc(w.t) + '</b><span class="chip">cap. ' + w.ch.n + "</span><p>" + fmt(w.d) + "</p></div>";
      }).join("") + "</div>";
    });
    return html || "<p>Nessuna parola trovata.</p>";
  }
  function creditsSection() {
    var C = window.CREDITI || {}, items = [];
    B.chapters.forEach(function (ch) { ch.sections.forEach(function (s) { (s.listen || []).forEach(function (L) {
      var c = C[L.file]; if (!c) return;
      items.push("<li><b>" + fmt(L.title) + "</b> – " + esc(c.esec) + ". Fonte: " + esc(c.fonte) + ". Licenza: " + esc(c.lic) + '.' + (c.url ? ' <a href="' + esc(c.url) + '" target="_blank" rel="noopener">Pagina della registrazione</a>' : "") + "</li>");
    }); }); });
    if (!items.length) return "";
    return '<div class="info-p"><h2>Crediti degli ascolti</h2><p>Gli ascolti sono estratti, tagliati e con una dissolvenza finale, dalle registrazioni indicate qui sotto. Le licenze Creative Commons (CC BY, CC BY-SA) chiedono di citare chi ha eseguito e pubblicato la registrazione.</p><ul class="credits">' + items.join("") + "</ul></div>";
  }
  R.info = function () {
    var rows = [];
    B.chapters.forEach(function (ch) { ch.sections.forEach(function (s) { (s.listen || []).forEach(function (L) { rows.push({ ch: ch.n, sec: s.id, L: L }); }); }); });
    var list = rows.map(function (r) {
      return "<tr><td>" + r.sec + "</td><td>" + fmt(r.L.title) + (r.L.optional ? " <i>(facoltativo)</i>" : "") + "</td><td><code>" + esc(r.L.file) + '</code></td><td class="st-wait" data-check="audio/' + esc(r.L.file) + '">controllo…</td></tr>';
    }).join("");
    return '<div class="pg pg-doc"><div class="doc-head"><img src="' + ott("ritratto") + '" alt=""><div><h1>Informazioni</h1><p style="margin:0"><b>' + esc(B.title) + "</b> " + esc(B.subtitle) + " – " + esc(B.author) + "</p></div></div>" +
      '<div class="info-p"><h2>Come si usa</h2><p>Si sfoglia con i pulsanti <b>Avanti</b> e <b>Indietro</b>, con le frecce della tastiera <span class="kbd">←</span> <span class="kbd">→</span> o scorrendo con il dito sullo schermo. Il pulsante <b>Indice</b> riporta all\'elenco dei capitoli.</p>' +
      "<p>Il pulsante <b>Leggi</b> fa leggere la pagina a una voce virtuale: la frase che si sta leggendo viene evidenziata. La voce dipende dal dispositivo; nelle <b>Impostazioni</b> si può scegliere quella italiana che piace di più e cambiarne la velocità.</p>" +
      '<h2>Gli ascolti</h2><p>I brani musicali vanno messi nella cartella <b>audio</b>, accanto al file index.html, con esattamente questi nomi. Se un file manca, la pagina funziona lo stesso e il riquadro avvisa che il brano non è ancora disponibile.</p></div>' +
      '<table class="audio-list"><thead><tr><th>Pagina</th><th>Brano</th><th>Nome del file</th><th>Stato</th></tr></thead><tbody>' + list + "</tbody></table>" +
      creditsSection() +
      '<div class="info-p"><h2>Caratteri</h2><p>Fredoka e Nunito, con licenza SIL Open Font License (i file della licenza sono nella cartella fonts).</p></div></div>';
  };

  /* ---------- navigazione ---------- */
  var stage = $("#stage");
  function go(i, dir) {
    if (typeof i === "string") i = byId[i] ? byId[i].i : 0;
    if (i < 0 || i >= PAGES.length) return;
    TTS.stop(); stopAllAudioHard();
    var pg = PAGES[i];
    var old = cur; cur = i;
    var html = R[pg.type](pg);
    stage.innerHTML = html;
    var root = stage.firstElementChild;
    root.style.setProperty("--dir", (dir || (i >= old ? 1 : -1)) * 24 + "px");
    var acc = pg.ch ? pg.ch.acc : ACCENTS[0];
    document.documentElement.style.setProperty("--acc", acc);
    if (pg.ch) root.style.setProperty("--acc", acc);
    updateChrome(pg);
    initPage(root, pg);
    try { history.replaceState(null, "", "#" + pg.id); } catch (e) { location.hash = pg.id; }
    preload(i + 1);
    var focusEl = root.querySelector(".col-text, .end-main, .scroll, .pg-doc, .pg-index");
    if (focusEl) focusEl.scrollTop = 0;
    if (S.auto && pg.type !== "cover" && pg.type !== "index" && pg.type !== "info") setTimeout(function () { TTS.start(); }, 450);
  }
  function next() { if (cur < PAGES.length - 1) go(cur + 1, 1); }
  function prev() { if (cur > 0) go(cur - 1, -1); }
  function updateChrome(pg) {
    var w = $("#where");
    if (pg.ch) w.innerHTML = "<b>Capitolo " + pg.ch.n + "</b> · " + esc(pg.ch.title);
    else w.textContent = pg.label;
    $("#btn-prev").disabled = cur === 0;
    $("#btn-next").disabled = cur === PAGES.length - 1;
    $("#pagecount").textContent = (cur + 1) + " / " + PAGES.length;
    $("#progress-fill").style.width = (cur / (PAGES.length - 1) * 100) + "%";
    $$("#progress-marks .pm").forEach(function (b) {
      var id = b.getAttribute("data-page"), p = byId[id];
      b.classList.toggle("on", !!(p.i === cur || (b.classList.contains("pm-ch") && pg.ch && p.ch === pg.ch)));
      b.classList.toggle("past", p.i < cur);
    });
    document.title = (pg.ch ? "Cap. " + pg.ch.n + " – " : "") + pg.label + " · " + B.title;
  }
  (function marks() {
    var m = $("#progress-marks");
    PAGES.forEach(function (p) {
      if (p.type !== "opener" && p.type !== "section") return;
      var b = document.createElement("button");
      var isCh = p.type === "opener";
      b.type = "button"; b.className = "pm " + (isCh ? "pm-ch" : "pm-sec");
      b.style.left = (p.i / (PAGES.length - 1) * 100) + "%";
      b.setAttribute("data-page", p.id);
      var lbl = isCh ? "Capitolo " + p.ch.n + ": " + p.ch.title : p.s.id + " " + p.s.title;
      b.title = lbl; b.setAttribute("aria-label", "Vai a " + lbl);
      m.appendChild(b);
    });
    m.addEventListener("click", function (e) { var b = e.target.closest(".pm"); if (b) go(b.getAttribute("data-page")); });
  })();
  function preload(i) {
    var p = PAGES[i]; if (!p) return;
    var src = p.type === "section" ? p.s.img : p.type === "opener" ? p.ch.img : p.type === "finale" ? B.finale.img : p.type === "preface" ? B.preface.img : null;
    if (src) { var im = new Image(); im.src = "img/scene/" + src + ".jpg"; }
  }

  /* ---------- sillabazione (trattini morbidi nelle parole lunghe) ---------- */
  var HY_SEL = ".col-text p,.col-text ul.plain li,.opener-panel .scroll p:not(.sub),.box p,.bubble p,ol.summary li,.word span,.gl-item p";
  function hyphenate(root) {
    if (typeof window.hyphenateIt !== "function") return;
    $$(HY_SEL, root).forEach(function (el) {
      var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null), n, list = [];
      while ((n = w.nextNode())) list.push(n);
      list.forEach(function (t) { try { t.nodeValue = window.hyphenateIt(t.nodeValue, { hyphenChar: "\u00AD", minWordLength: 7 }); } catch (e) {} });
    });
  }

  /* ---------- interazioni dentro la pagina ---------- */
  function addMore(sc) {
    var b = document.createElement("button");
    b.className = "more off"; b.type = "button"; b.setAttribute("data-notts", "");
    b.innerHTML = IC.down; b.title = "Continua";
    b.setAttribute("aria-label", "Scorri in basso per leggere il resto");
    stage.appendChild(b);
    function upd() {
      var rest = sc.scrollHeight - sc.clientHeight - sc.scrollTop; var pb = parseFloat(getComputedStyle(sc).paddingBottom) || 0; var off = rest < pb + 10;
      b.classList.toggle("off", off); sc.classList.toggle("fade-bottom", !off);
      var r = sc.getBoundingClientRect(), pr = stage.getBoundingClientRect();
      b.style.top = Math.round(r.bottom - pr.top - b.offsetHeight - 12) + "px";
      b.style.left = Math.round(r.right - pr.left - b.offsetWidth - 22) + "px";
    }
    sc.addEventListener("scroll", upd, { passive: true });
    b.addEventListener("click", function () { sc.scrollBy({ top: sc.clientHeight * 0.7, behavior: "smooth" }); });
    upd(); setTimeout(upd, 300); setTimeout(upd, 1200);
    $$("img", sc).forEach(function (im) { im.addEventListener("load", upd); });
    sc._moreUpd = upd;
  }
  window.addEventListener("resize", function () { $$(".col-text,.end-main,.opener-panel .scroll,.opener-panel,.pg-doc,.pg-index", stage).forEach(function (s) { if (s._moreUpd) s._moreUpd(); }); });
  /* copertina: titolo e pulsanti sul cielo libero (in alto a sinistra), Ottavio sui fiori in basso a sinistra.
     Le zone sono misurate sull'immagine, così non coprono mai gli strumenti né il libro. */
  function layoutCover(pg) {
    if (!pg || !pg.classList.contains("pg-cover") || !pg.isConnected) return;
    var img = $(".bgimg", pg), col = $(".cover-col", pg), ot = $(".cover-ott", pg);
    var W = pg.clientWidth, H = pg.clientHeight; if (!W || !H) return;
    var r = img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : 16 / 9;
    var stack = W / H < 1.3;
    pg.classList.toggle("cover-stack", stack);
    if (stack) { col.removeAttribute("style"); ot.removeAttribute("style"); return; }
    var fw = Math.max(W, H * r), fh = fw / r, ox = (fw - W) / 2, oy = (fh - H) / 2, m = 12;
    var X = function (f) { return f * fw - ox; }, Y = function (f) { return f * fh - oy; };
    var L = Math.max(X(0.02), m), T = Math.max(Y(0.035), m), Rr = X(0.30), Bm = Math.min(Y(0.60), H - m);
    col.style.left = L + "px"; col.style.top = T + "px"; col.style.width = (Rr - L) + "px";
    var fs = Math.min(30, (Rr - L) / 15);
    col.style.fontSize = fs + "px";
    while (fs > 9 && col.offsetHeight > Bm - T) { fs -= 0.5; col.style.fontSize = fs + "px"; }
    var oTop = Math.max(Y(0.64), T + col.offsetHeight + 12), oBot = Math.min(Y(0.985), H - 6);
    ot.style.left = Math.max(X(0.012), m) + "px"; ot.style.bottom = (H - oBot) + "px";
    ot.style.height = Math.max(0, Math.min(oBot - oTop, H * 0.36, (X(0.24) - Math.max(X(0.012), m)) * 1.0)) + "px";
  }
  window.addEventListener("resize", function () { layoutCover($(".pg-cover", stage)); });
  function initPage(root, pg) {
    if (pg.type === "cover") { var bi = $(".bgimg", root); layoutCover(root); bi.addEventListener("load", function () { layoutCover(root); }); if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { layoutCover(root); }); }
    hyphenate(root);
    $$(".col-text,.end-main,.opener-panel .scroll,.opener-panel", root).concat(root.matches(".pg-doc,.pg-index") ? [root] : []).forEach(addMore);
    $$(".player", root).forEach(setupPlayer);
    if (pg.type === "quiz") updateQuizResult(root, pg.ch, false);
    if (pg.type === "info") checkAudioFiles(root);
    var gs = $("[data-gsearch]", root);
    if (gs) gs.addEventListener("input", function () { var gl = $("[data-glist]", root); gl.innerHTML = glossaryList(gs.value); hyphenate(gl); });
  }
  stage.addEventListener("click", function (e) {
    var t = e.target.closest("[data-go],[data-zoom],.opt,[data-replay]");
    if (!t) return;
    if (t.hasAttribute("data-go")) { go(t.getAttribute("data-go")); return; }
    if (t.hasAttribute("data-zoom")) {
      openLightbox(t.getAttribute("src"), t.getAttribute("alt")); return;
    }
    if (t.classList.contains("opt")) { answer(t); return; }
    if (t.hasAttribute("data-replay")) { go(cur); }
  });

  /* ---------- quiz ---------- */
  var actx = null;
  function beep(ok) {
    if (!S.sfx) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      var t0 = actx.currentTime;
      var notes = ok ? [[784, 0], [1047, 0.12]] : [[220, 0], [196, 0.14]];
      notes.forEach(function (n) {
        var o = actx.createOscillator(), g = actx.createGain();
        o.type = ok ? "triangle" : "square"; o.frequency.value = n[0];
        g.gain.setValueAtTime(0.0001, t0 + n[1]); g.gain.exponentialRampToValueAtTime(ok ? 0.25 : 0.08, t0 + n[1] + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + n[1] + (ok ? 0.35 : 0.22));
        o.connect(g); g.connect(actx.destination); o.start(t0 + n[1]); o.stop(t0 + n[1] + 0.4);
      });
    } catch (e) {}
  }
  function answer(btn) {
    var grid = btn.closest(".quiz-grid"), n = +grid.getAttribute("data-ch");
    var ch = B.chapters[n - 1], st = quizState[n];
    var qi = +btn.getAttribute("data-q"), ai = +btn.getAttribute("data-a");
    if (st.done[qi]) return;
    var card = btn.closest(".qcard");
    if (ai === 0) {
      st.done[qi] = true;
      if (!st.tried[qi]) st.first[qi] = true;
      btn.classList.add("right"); btn.querySelector(".mark").textContent = "✓";
      $$(".opt", card).forEach(function (b) { b.disabled = true; });
      card.classList.add("done");
      beep(true);
      updateQuizResult(grid.closest(".pg"), ch, true);
    } else {
      st.tried[qi] = st.tried[qi] || {}; st.tried[qi][ai] = true;
      btn.classList.remove("wrong"); void btn.offsetWidth; btn.classList.add("wrong");
      btn.querySelector(".mark").textContent = "✗"; btn.disabled = true;
      beep(false);
    }
  }
  function updateQuizResult(root, ch, celebrate) {
    var st = quizState[ch.n]; if (!st) return;
    var total = ch.quiz.length, done = Object.keys(st.done).length, first = Object.keys(st.first).length;
    var box = $(".qresult", root);
    if (done === total) {
      var msg = first === total ? "Bravissimo! Hai indovinato tutte le " + total + " domande al primo colpo!" :
        "Ce l'hai fatta! Hai indovinato " + first + " domande su " + total + " al primo colpo.";
      $(".qres-t", box).textContent = msg;
      box.classList.add("show");
      if (celebrate) { confetti(); box.scrollIntoView({ behavior: "smooth", block: "nearest" }); }
    }
  }
  function confetti() {
    var c = document.createElement("div"); c.className = "confetti";
    var cols = ["#E0A63A", "#2E7D7A", "#B4432C", "#4B4E9A", "#4E7A2E", "#A34E7C"];
    for (var i = 0; i < 70; i++) {
      var p = document.createElement("i");
      p.style.left = Math.random() * 100 + "vw"; p.style.background = cols[i % cols.length];
      p.style.animationDuration = (2.2 + Math.random() * 2) + "s"; p.style.animationDelay = (Math.random() * 0.6) + "s";
      p.style.transform = "rotate(" + Math.random() * 360 + "deg)";
      c.appendChild(p);
    }
    document.body.appendChild(c); setTimeout(function () { c.remove(); }, 5000);
  }

  /* ---------- ascolti ---------- */
  var players = [];
  function fmtTime(s) { if (!isFinite(s)) return "–:–"; s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2); }
  function setupPlayer(el) {
    var a = new Audio(); a.preload = "metadata"; a.src = el.getAttribute("data-src");
    var btn = $(".play", el), track = $(".track", el), fill = $(".fill", el), time = $(".time", el);
    var obj = { a: a, el: el }; players.push(obj);
    function upd() {
      var d = a.duration, t = a.currentTime;
      fill.style.width = (d ? t / d * 100 : 0) + "%";
      time.textContent = fmtTime(t) + " / " + fmtTime(d);
      track.setAttribute("aria-valuenow", d ? Math.round(t / d * 100) : 0);
    }
    a.addEventListener("loadedmetadata", upd);
    a.addEventListener("timeupdate", upd);
    a.addEventListener("ended", function () { el.classList.remove("playing"); a.currentTime = 0; upd(); });
    a.addEventListener("error", function () { el.classList.add("missing"); btn.setAttribute("aria-label", "Brano non disponibile"); time.textContent = ""; });
    btn.addEventListener("click", function () {
      if (el.classList.contains("missing")) return;
      if (a.paused) {
        TTS.stop(); stopAudio(obj);
        var pr = a.play(); if (pr && pr.catch) pr.catch(function () {});
        el.classList.add("playing"); btn.setAttribute("aria-label", "Metti in pausa");
      } else { a.pause(); el.classList.remove("playing"); btn.setAttribute("aria-label", "Ascolta il brano"); }
    });
    function seek(ev) {
      if (!a.duration) return;
      var r = track.getBoundingClientRect(); var x = (ev.clientX - r.left) / r.width;
      a.currentTime = Math.max(0, Math.min(1, x)) * a.duration; upd();
    }
    var dragging = false;
    track.addEventListener("pointerdown", function (ev) { dragging = true; try { track.setPointerCapture(ev.pointerId); } catch (e) {} seek(ev); ev.stopPropagation(); });
    track.addEventListener("pointermove", function (ev) { if (dragging) seek(ev); });
    track.addEventListener("pointerup", function () { dragging = false; });
    track.addEventListener("keydown", function (ev) {
      if (!a.duration) return;
      if (ev.key === "ArrowRight") { a.currentTime = Math.min(a.duration, a.currentTime + 5); ev.preventDefault(); ev.stopPropagation(); }
      if (ev.key === "ArrowLeft") { a.currentTime = Math.max(0, a.currentTime - 5); ev.preventDefault(); ev.stopPropagation(); }
    });
  }
  function stopAudio(except) {
    players = players.filter(function (p) { return document.body.contains(p.el); });
    players.forEach(function (p) { if (p !== except && !p.a.paused) { p.a.pause(); p.el.classList.remove("playing"); } });
  }
  function stopAllAudioHard() { players.forEach(function (p) { try { p.a.pause(); } catch (e) {} }); players = []; }
  function checkAudioFiles(root) {
    $$("[data-check]", root).forEach(function (td) {
      var a = new Audio(); a.preload = "metadata";
      a.addEventListener("loadedmetadata", function () { td.className = "st-ok"; td.textContent = "presente (" + fmtTime(a.duration) + ")"; });
      a.addEventListener("error", function () { td.className = "st-no"; td.textContent = "manca"; });
      a.src = td.getAttribute("data-check");
    });
  }

  /* ---------- lettura ad alta voce ---------- */
  var TTS = (function () {
    var synth = window.speechSynthesis, ok = !!(synth && window.SpeechSynthesisUtterance);
    var voices = [], items = [], idx = 0, sent = 0, state = "idle", token = 0, keepAlive = null;
    var PR = Object.keys(window.PRONUNCIA || {}).sort(function (a, b) { return b.length - a.length; });
    if (!ok) document.body.classList.add("no-tts");
    function loadVoices() {
      if (!ok) return;
      voices = synth.getVoices();
      fillVoiceSelect();
    }
    function itVoices() { return voices.filter(function (v) { return /^it/i.test(v.lang); }); }
    function pickVoice() {
      if (!voices.length) return null;
      if (S.voice) { var v = voices.filter(function (x) { return x.voiceURI === S.voice || x.name === S.voice; })[0]; if (v) return v; }
      var it = itVoices();
      var pref = ["Google italiano", "Elsa", "Isabella", "Alice", "Federica", "Paola", "Diego", "Cosimo", "Luca"];
      for (var i = 0; i < pref.length; i++) { var m = it.filter(function (x) { return x.name.indexOf(pref[i]) >= 0; })[0]; if (m) return m; }
      return it[0] || null;
    }
    function prep(t) {
      t = " " + t + " ";
      PR.forEach(function (k) { t = t.split(k).join(window.PRONUNCIA[k]); });
      return t.replace(/[«»"]/g, "").replace(/…/g, ", ").replace(/–|—/g, ", ").replace(/\s+/g, " ").trim();
    }
    function textOf(el) {
      var c = el.cloneNode(true);
      $$("[data-notts],.player,img,button.opt .mark,.box-h,.idcard-h", c).forEach(function (x) { x.remove(); });
      $$("dt", c).forEach(function (dt) { dt.textContent = dt.textContent.replace(":", "") + ": "; });
      $$("thead", c).forEach(function (x) { x.remove(); });
      $$("tr", c).forEach(function (tr) { var cells = $$("td", tr).map(function (td) { return td.textContent.trim(); }); tr.textContent = cells.join(": ") + ". "; });
      $$("dd,li,td,th,.opt,h1,h2,h3,h4,p,.qn,.qq,.word b", c).forEach(function (x) { x.appendChild(document.createTextNode(". ")); });
      $$(".lbl", c).forEach(function (x) { x.remove(); });
      var pre = el.getAttribute("data-ttsprefix") || "";
      if (el.classList.contains("qcard")) pre = "";
      return (pre + c.textContent).replace(/\u00AD/g, "").replace(/\s+/g, " ").replace(/([.!?:;,])\s*\.(?!\.)/g, "$1").replace(/\s+\./g, ".").trim();
    }
    function split(t) {
      var parts = t.match(/[^.!?;:]+[.!?;:]*["»)]?\s*/g) || [t];
      var out = [], buf = "";
      parts.forEach(function (p) { if ((buf + p).length < 180) buf += p; else { if (buf) out.push(buf); buf = p; } });
      if (buf) out.push(buf);
      return out.map(function (s) { return s.trim(); }).filter(Boolean);
    }
    function collect() {
      var root = stage.firstElementChild; if (!root) return [];
      var els = $$("[data-tts]", root).filter(function (e) { return e.offsetParent !== null || e.getClientRects().length; });
      var main = els.filter(function (e) { return !e.classList.contains("ott"); });
      var ottEls = els.filter(function (e) { return e.classList.contains("ott"); });
      return main.concat(ottEls).map(function (el) { return { el: el, parts: split(prep(textOf(el))) }; }).filter(function (x) { return x.parts.length; });
    }
    function setState(s) {
      state = s;
      document.body.classList.toggle("tts-playing", s === "playing");
      document.body.classList.toggle("tts-active", s !== "idle");
      $("#read-lbl").textContent = s === "playing" ? "Pausa" : s === "paused" ? "Riprendi" : "Leggi";
      $("#btn-read").setAttribute("aria-label", s === "playing" ? "Metti in pausa la lettura" : s === "paused" ? "Riprendi la lettura" : "Leggi la pagina ad alta voce");
    }
    function mark(el) {
      $$(".reading").forEach(function (x) { x.classList.remove("reading"); });
      if (el) { el.classList.add("reading"); try { el.scrollIntoView({ behavior: "smooth", block: "nearest" }); } catch (e) { el.scrollIntoView(); } }
    }
    function speakNext(my) {
      if (my !== token) return;
      if (idx >= items.length) { stop(); return; }
      var it = items[idx];
      if (sent >= it.parts.length) { idx++; sent = 0; speakNext(my); return; }
      mark(it.el);
      var u = new SpeechSynthesisUtterance(it.parts[sent]);
      var v = pickVoice(); if (v) { u.voice = v; u.lang = v.lang; } else u.lang = "it-IT";
      u.rate = S.rate; u.pitch = 1;
      u.onend = function () { if (my !== token) return; sent++; speakNext(my); };
      u.onerror = function (e) { if (my !== token) return; if (e && (e.error === "interrupted" || e.error === "canceled")) return; sent++; speakNext(my); };
      synth.speak(u);
    }
    function start() {
      if (!ok) return;
      stopAudio();
      synth.cancel();
      items = collect(); idx = 0; sent = 0;
      if (!items.length) return;
      token++; setState("playing");
      var my = token;
      setTimeout(function () { speakNext(my); }, 120);
      clearInterval(keepAlive);
      keepAlive = setInterval(function () { if (state === "playing" && synth.paused) synth.resume(); }, 5000);
    }
    function pause() { if (state !== "playing") return; token++; synth.cancel(); setState("paused"); }
    function resume() { if (state !== "paused") return; token++; var my = token; setState("playing"); setTimeout(function () { speakNext(my); }, 120); }
    function stop() {
      token++; if (ok) synth.cancel(); clearInterval(keepAlive);
      setState("idle"); mark(null);
    }
    function toggle() { if (state === "idle") start(); else if (state === "playing") pause(); else resume(); }
    function test() {
      if (!ok) return; stop();
      var u = new SpeechSynthesisUtterance("Ciao! Sono Ottavio. Questa è la mia voce.");
      var v = pickVoice(); if (v) { u.voice = v; u.lang = v.lang; } else u.lang = "it-IT";
      u.rate = S.rate; synth.speak(u);
    }
    function fillVoiceSelect() {
      var sel = $("#set-voice"); if (!sel) return;
      var it = itVoices(), others = voices.filter(function (v) { return !/^it/i.test(v.lang); });
      var cur = pickVoice();
      sel.innerHTML = "";
      var opt = function (v) { var o = document.createElement("option"); o.value = v.voiceURI || v.name; o.textContent = v.name + " (" + v.lang + ")"; if (cur && (cur.voiceURI === v.voiceURI)) o.selected = true; return o; };
      if (it.length) { var g = document.createElement("optgroup"); g.label = "Voci italiane"; it.forEach(function (v) { g.appendChild(opt(v)); }); sel.appendChild(g); }
      if (others.length) { var g2 = document.createElement("optgroup"); g2.label = "Altre lingue"; others.forEach(function (v) { g2.appendChild(opt(v)); }); sel.appendChild(g2); }
      var note = $("#voice-note");
      if (!ok) note.textContent = "Questo browser non ha la lettura ad alta voce. Prova con Chrome, Edge o Safari aggiornati.";
      else if (!voices.length) note.textContent = "Sto cercando le voci del dispositivo…";
      else if (!it.length) note.textContent = "Su questo dispositivo non c'è una voce italiana: si può aggiungere dalle impostazioni di sintesi vocale del sistema.";
      else note.textContent = "Le voci disponibili dipendono dal dispositivo e dal browser.";
    }
    if (ok) { loadVoices(); if ("onvoiceschanged" in synth) synth.onvoiceschanged = loadVoices; setTimeout(loadVoices, 800); }
    return { start: start, stop: stop, toggle: toggle, test: test, fill: fillVoiceSelect, get state() { return state; } };
  })();

  /* ---------- impostazioni ---------- */
  function applySettings() {
    document.documentElement.style.setProperty("--scale", S.size);
    document.body.classList.toggle("show-files", !!S.files);
    $$("#set-size button").forEach(function (b) { b.classList.toggle("on", +b.getAttribute("data-size") === +S.size); });
    $("#set-rate").value = S.rate; $("#rate-val").textContent = Math.round(S.rate * 100) + "%";
    $("#set-auto").checked = !!S.auto; $("#set-sfx").checked = !!S.sfx; $("#set-files").checked = !!S.files;
  }
  function openSettings() { TTS.fill(); applySettings(); $("#settings").hidden = false; $("#settings .close-btn").focus(); }
  function closeModal() { $("#settings").hidden = true; }
  $("#btn-settings").addEventListener("click", openSettings);
  $("#settings").addEventListener("click", function (e) { if (e.target.id === "settings" || e.target.hasAttribute("data-close")) closeModal(); });
  $("#set-voice").addEventListener("change", function (e) { S.voice = e.target.value; store.set("voice", S.voice); });
  $("#set-rate").addEventListener("input", function (e) { S.rate = +e.target.value; store.set("rate", S.rate); $("#rate-val").textContent = Math.round(S.rate * 100) + "%"; });
  $("#btn-test-voice").addEventListener("click", function () { TTS.test(); });
  $$("#set-size button").forEach(function (b) { b.addEventListener("click", function () { S.size = +b.getAttribute("data-size"); store.set("size", S.size); applySettings(); }); });
  $("#set-auto").addEventListener("change", function (e) { S.auto = e.target.checked; store.set("auto", S.auto); });
  $("#set-sfx").addEventListener("change", function (e) { S.sfx = e.target.checked; store.set("sfx", S.sfx); });
  $("#set-files").addEventListener("change", function (e) { S.files = e.target.checked; store.set("files", S.files); applySettings(); });
  $("#btn-info").addEventListener("click", function () { closeModal(); go("info"); });

  /* ---------- immagine a schermo intero ---------- */
  function openLightbox(src, alt) { var lb = $("#lightbox"); $("img", lb).src = src; $("img", lb).alt = alt || ""; lb.hidden = false; }
  $("#lightbox").addEventListener("click", function () { $("#lightbox").hidden = true; });

  /* ---------- barra ---------- */
  $("#btn-home").addEventListener("click", function () { go("indice"); });
  $("#btn-prev").addEventListener("click", prev);
  $("#btn-next").addEventListener("click", next);
  $("#btn-read").addEventListener("click", function () { TTS.toggle(); });
  $("#btn-stop").addEventListener("click", function () { TTS.stop(); });
  var fsEl = document.documentElement;
  var canFS = !!(fsEl.requestFullscreen || fsEl.webkitRequestFullscreen);
  if (!canFS) $("#btn-full").style.display = "none";
  $("#btn-full").addEventListener("click", function () {
    var d = document;
    if (d.fullscreenElement || d.webkitFullscreenElement) { (d.exitFullscreen || d.webkitExitFullscreen).call(d); }
    else { var r = (fsEl.requestFullscreen || fsEl.webkitRequestFullscreen).call(fsEl); if (r && r.catch) r.catch(function () {}); }
  });

  /* ---------- tastiera e gesti ---------- */
  document.addEventListener("keydown", function (e) {
    if (!$("#settings").hidden) { if (e.key === "Escape") closeModal(); return; }
    if (!$("#lightbox").hidden) { if (e.key === "Escape" || e.key === "Enter") $("#lightbox").hidden = true; return; }
    var tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "select" || tag === "textarea") return;
    if (e.key === "ArrowRight" || e.key === "PageDown") { next(); e.preventDefault(); }
    else if (e.key === "ArrowLeft" || e.key === "PageUp") { prev(); e.preventDefault(); }
    else if (e.key === "Home") { go("indice"); e.preventDefault(); }
  });
  var sw = null;
  function swStart(x, y, target) { if (target.closest(".track,input,select,textarea,.search")) { sw = null; return; } sw = { x: x, y: y, t: Date.now() }; }
  function swEnd(x, y) {
    if (!sw) return;
    var dx = x - sw.x, dy = y - sw.y, dt = Date.now() - sw.t; sw = null;
    if (dt < 900 && Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) { if (dx < 0) next(); else prev(); }
  }
  if ("ontouchstart" in window) {
    stage.addEventListener("touchstart", function (e) { if (e.touches.length !== 1) { sw = null; return; } var t = e.touches[0]; swStart(t.clientX, t.clientY, e.target); }, { passive: true });
    stage.addEventListener("touchend", function (e) { var t = e.changedTouches[0]; if (t) swEnd(t.clientX, t.clientY); }, { passive: true });
    stage.addEventListener("touchcancel", function () { sw = null; }, { passive: true });
  } else {
    stage.addEventListener("pointerdown", function (e) { if (e.pointerType === "mouse") return; swStart(e.clientX, e.clientY, e.target); });
    stage.addEventListener("pointerup", function (e) { if (e.pointerType === "mouse") return; swEnd(e.clientX, e.clientY); });
    stage.addEventListener("pointercancel", function () { sw = null; });
  }

  /* ---------- avvio ---------- */
  applySettings();
  go("copertina", 1);
  window.addEventListener("hashchange", function () { var h = location.hash.replace("#", ""); if (byId[h] && byId[h].i !== cur) go(h); });
})();
