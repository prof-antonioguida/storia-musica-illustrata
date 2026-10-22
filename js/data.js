/* Storia della musica illustrata per la scuola primaria – Antonio Guida
   Testi del libro. Per correggere un testo basta modificarlo qui, tra le virgolette.
   _parola_ = corsivo   **parola** = grassetto
   Nei box "listen" il campo "file" è il nome dell'mp3 da mettere nella cartella "audio".
   "optional: true" = ascolto facoltativo. */

window.BOOK = {
  title: "Storia della musica illustrata",
  subtitle: "per la scuola primaria",
  author: "Antonio Guida",
  cover: { img: "base_10_copertina", alt: "Un grande libro aperto in un prato al tramonto: dalle sue pagine sale una spirale di strumenti di tutte le epoche." },

  preface: {
    title: "Prefazione",
    img: "base_11_prefazione",
    alt: "La maestra legge una storia ai bambini in biblioteca.",
    body: [
      "Ciao! Io sono Ottavio, un gufo che ama la musica più di ogni altra cosa. Il mio nome viene da una parola dei musicisti, l'ottava. Ti spiegherò che cos'è quando arriveremo nell'antica Grecia.",
      "Ti sei mai accorto di quanta musica c'è intorno a te? La canti alle feste di compleanno, la senti alla radio, la balli, la fischietti mentre giochi. Ma la musica non è sempre stata come quella di oggi. È cambiata tantissimo, insieme alle persone che la inventavano, la suonavano e la ascoltavano.",
      "In questo libro faremo insieme un lungo viaggio nel tempo, in otto tappe. Partiremo da una grotta di quarantamila anni fa e arriveremo fino ai giorni nostri. Incontreremo monaci che cantano, cavalieri che danzano, bambini prodigio, orchestre gigantesche e perfino musicisti che suonano con il computer.",
      "Lungo la strada troverai alcuni aiuti:",
      { list: [
        "il pulsante con l'altoparlante: se lo tocchi, una voce ti legge la pagina;",
        "i riquadri **Ascolta!**: premi il pulsante e senti un brano dell'epoca di cui stai leggendo;",
        "i riquadri **Lo sapevi?**: piccole curiosità da raccontare agli amici;",
        "le carte d'identità dei grandi compositori, per conoscerli da vicino;",
        "alla fine di ogni capitolo, un gioco per scoprire quanto hai imparato."
      ] },
      "Per questo viaggio non serve sapere già tutto. Bastano le orecchie ben aperte e tanta curiosità. Sei pronto? Seguimi: si parte!"
    ]
  },

  chapters: [
    /* ===================== CAPITOLO 1 ===================== */
    {
      n: 1,
      title: "Le origini della musica e le civiltà antiche",
      subtitle: "Dai primi ritmi intorno al fuoco alla musica di Egizi, Greci e Romani",
      img: "cap1_00_apertura",
      alt: "Una famiglia preistorica fa musica intorno al fuoco, dentro la grotta.",
      intro: [
        "Immagina una notte di tantissimo tempo fa. Non ci sono case, né luci elettriche, né libri. Dentro una grotta, una famiglia è seduta intorno al fuoco. Il papà batte su un tamburo, la bambina soffia in un piccolo flauto, la mamma e il fratellino battono le mani a tempo. Stanno facendo musica!",
        "In questo capitolo scopriremo come è nata la musica e come la suonavano i popoli più antichi: gli Egizi, i Greci e i Romani."
      ],
      ottavio: "Siediti vicino al fuoco e ascolta bene: si parte!",
      sections: [
        {
          id: "1.1", title: "La musica prima della storia",
          img: "cap1_01_preistoria", alt: "Bambini preistorici imitano i suoni della natura in riva a un fiume.",
          body: [
            "La preistoria è il lunghissimo periodo in cui le persone non sapevano ancora scrivere. Per questo non ci sono rimasti libri o spartiti di quell'epoca. Possiamo però immaginare come è nata la musica, perché ogni essere umano ha sempre con sé uno strumento: il proprio corpo.",
            "Gli uomini e le donne preistorici vivevano in mezzo ai suoni della natura: il canto degli uccelli, il gracidare delle rane, lo scroscio dell'acqua, il tuono. Forse hanno cominciato proprio imitando questi suoni con la voce. Poi hanno scoperto che battendo le mani, i piedi o due bastoncini si poteva creare un ritmo: una serie di colpi che si ripetono con regolarità, come il battito del cuore.",
            "La musica serviva a tante cose: a chiamarsi da lontano, a far addormentare i bambini, a lavorare tutti insieme, a festeggiare e a pregare."
          ],
          ottavio: "Prova anche tu! Batti le mani: piano, piano, forte… piano, piano, forte. Hai appena creato un ritmo!",
          know: "In alcune grotte con le pareti dipinte, la voce rimbomba in modo speciale. Alcuni studiosi pensano che le persone preistoriche scegliessero proprio quei punti per cantare e dipingere."
        },
        {
          id: "1.2", title: "I primi strumenti",
          img: "cap1_02_primi_strumenti", alt: "Nella grotta si costruiscono un flauto d'osso, un tamburo e un sonaglio.",
          body: [
            "Dopo il corpo, i nostri antenati cominciarono a usare quello che trovavano intorno a loro per creare suoni nuovi.",
            "Un tronco cavo, coperto con una pelle di animale ben tesa, diventava un tamburo. Una zucca secca piena di semi diventava un sonaglio. Una grande conchiglia marina, se ci si soffiava dentro, suonava come una tromba. Il tamburo e il sonaglio sono strumenti a percussione, perché si suonano battendoli o scuotendoli. La conchiglia invece è uno strumento a fiato.",
            "Lo strumento più antico che conosciamo è proprio un flauto. È fatto con un osso sottile dell'ala di un avvoltoio e ha cinque piccoli fori. È stato trovato in una grotta della Germania e ha circa quarantamila anni!"
          ],
          listen: [
            { title: "Il flauto d'osso", text: "Gli studiosi hanno costruito una copia del flauto preistorico, uguale all'originale. Ascolta il suo suono: ti ricorda il canto di un uccello o il fischio del vento?", file: "asc_1_1_flauto_osso.mp3" }
          ],
          ottavio: "Anche tu puoi costruire un sonaglio. Metti un pugno di riso in una bottiglietta di plastica, chiudi bene il tappo e scuoti!"
        },
        {
          id: "1.3", title: "Mesopotamia ed Egitto",
          img: "cap1_03_egitto", alt: "Musicisti egizi in un tempio sul Nilo: arpa, sistro, flauto e danza.",
          body: [
            "Circa cinquemila anni fa, in Mesopotamia, la terra tra due grandi fiumi, il Tigri e l'Eufrate, nacquero le prime città e fu inventata la scrittura. Qui la musica accompagnava le feste, le preghiere nei templi e la vita dei re. In una tomba della città di Ur sono state trovate delle lire decorate con una testa di toro d'oro.",
            "Poco lontano, lungo il fiume Nilo, vivevano gli Egizi. Sulle pareti delle loro tombe ci sono tantissimi dipinti di musicisti: donne che suonano l'arpa, uomini con lunghi flauti, danzatrici e cantanti. Gli Egizi suonavano anche il sistro, un sonaglio di metallo dedicato alla dea Hathor, protettrice della musica e della gioia. La musica si sentiva nei templi, alle feste, durante il lavoro nei campi e ai banchetti dei faraoni."
          ],
          ottavio: "Guarda bene l'arpa egizia: ha la forma di un arco, senza la colonna davanti che hanno le arpe di oggi.",
          listen: [
            { title: "La melodia scritta più antica", text: "Circa 1400 anni prima di Cristo, nella città di Ugarit, sulla costa dell'attuale Siria, qualcuno incise su una tavoletta d'argilla un canto per la dea Nikkal. È la melodia più antica che conosciamo quasi per intero. Gli studiosi hanno provato a ricostruirla: ascolta come poteva suonare.", file: "asc_1_2_inno_hurrita.mp3" }
          ],
          know: "Nella tomba del faraone Tutankhamon sono state trovate due trombe, una d'argento e una di bronzo. Nel 1939 qualcuno le ha suonate di nuovo e il loro suono è stato trasmesso alla radio, dopo più di tremila anni di silenzio!"
        },
        {
          id: "1.4", title: "Gli antichi Greci",
          img: "cap1_04_grecia", alt: "Lira, aulos e coro sui gradini di un teatro greco sul mare.",
          body: [
            "Per gli antichi Greci la musica era importantissima. Perfino la parola «musica» viene dal greco: significa «l'arte delle Muse», ovvero le dee che proteggevano il canto, la poesia, la danza e le altre arti.",
            "Lo strumento più amato era la lira, uno strumento a corda che si suona pizzicando le corde con le dita. Secondo una leggenda, la inventò il dio Ermes quando era ancora un bambino: prese il guscio di una tartaruga e ci tese sopra delle corde. Poi la regalò al dio Apollo, che da allora la suonò sempre.",
            "Accanto alla lira c'era l'aulos, formato da due canne suonate insieme dallo stesso musicista. Il suo suono era forte e squillante, più simile a quello di un oboe che a quello di un flauto. Nei teatri all'aperto un gruppo di cantanti e danzatori, chiamato coro, raccontava le storie cantando tutti insieme. Ad Atene i ragazzi studiavano la musica a scuola, insieme alla lettura e alla ginnastica."
          ],
          ottavio: "Ecco la storia del mio nome! Si racconta che il filosofo Pitagora scoprì una cosa curiosa: se una corda viene accorciata della metà, suona la stessa nota, ma più acuta. I musicisti chiamano questa distanza «ottava».",
          listen: [
            { title: "La canzone di Seikilos", text: "Circa duemila anni fa, un uomo di nome Seikilos fece incidere su una colonnina di pietra una canzone, con le parole e i segni delle note. Le parole dicono più o meno così: «Finché vivi, risplendi, non essere triste per nulla: la vita dura poco». È la canzone completa più antica arrivata fino a noi.", file: "asc_1_3_seikilos.mp3" }
          ]
        },
        {
          id: "1.5", title: "Gli antichi Romani",
          img: "cap1_05_roma", alt: "Una parata di soldati romani con trombe e corno, e un organo ad acqua vicino a una fontana.",
          body: [
            "I Romani costruirono un grande impero e impararono molto dai Greci, anche nella musica. Suonavano la lira e i flauti, ma amavano soprattutto gli strumenti potenti, adatti alle grandi feste e all'esercito.",
            "I soldati usavano strumenti di bronzo per dare i segnali: «Sveglia!», «All'attacco!», «Ritirata!». C'era la tuba, una tromba lunga e dritta, e il corno, una grande tromba piegata quasi a cerchio, che il suonatore appoggiava sulla spalla.",
            "Nelle arene e durante gli spettacoli si sentiva l'organo ad acqua, chiamato idraulo. Lo aveva inventato un ingegnere greco di Alessandria d'Egitto, Ctesibio. L'acqua aiutava a spingere l'aria nelle canne sempre con la stessa forza. È il nonno dell'organo che oggi si suona nelle chiese!"
          ],
          ottavio: "Riesci a immaginare una parata con decine di trombe e corni che suonano tutti insieme? Tappati le orecchie!",
          listen: [
            { title: "I suoni di Roma", text: "Pochi strumenti romani sono arrivati fino a noi. Alcuni musicisti li hanno ricostruiti copiando i resti ritrovati, i mosaici e le statue. Ascolta come potevano suonare trombe, corni e organo ad acqua.", file: "asc_1_4_roma.mp3" }
          ],
          know: "La tuba di oggi, il più grave tra gli strumenti di ottone, ha preso il nome proprio dalla tromba dei soldati romani."
        }
      ],
      summary: [
        "La musica è nata insieme agli esseri umani: all'inizio si faceva con la voce e con il corpo.",
        "I primi strumenti erano fatti di ossa, legno, pelli, zucche e conchiglie. Il più antico che conosciamo è un flauto d'osso di circa quarantamila anni fa.",
        "In Mesopotamia e in Egitto la musica accompagnava le feste, le preghiere e la vita dei re; si suonavano arpe, lire e sistri.",
        "I Greci chiamarono la musica «l'arte delle Muse» e suonavano la lira e l'aulos.",
        "I Romani amavano gli strumenti potenti: trombe, corni e l'organo ad acqua."
      ],
      quiz: [
        { q: "Qual è stato il primo strumento degli esseri umani?", a: ["il proprio corpo", "il flauto", "l'arpa"] },
        { q: "Con che cosa è fatto il flauto più antico che conosciamo?", a: ["con un osso d'ala di avvoltoio", "con una canna di bambù", "con il guscio di una tartaruga"] },
        { q: "Che cos'era il sistro?", a: ["un sonaglio di metallo degli Egizi", "un tamburo greco", "una tromba romana"] },
        { q: "Da dove viene la parola «musica»?", a: ["dalle Muse, le dee delle arti", "dal nome di un re", "dal suono dell'aulos"] },
        { q: "Come si chiamava l'organo ad acqua?", a: ["idraulo", "aulos", "sistro"] }
      ],
      game: "Gioco d'ascolto: riascolta i quattro brani del capitolo a occhi chiusi. Riesci a dire quale popolo li suonava?",
      words: [
        ["Ritmo", "una serie di colpi o di suoni che si ripetono con regolarità."],
        ["Melodia", "una serie di note, una dopo l'altra, che si può cantare."],
        ["Strumento a percussione", "si suona battendolo o scuotendolo, come il tamburo, il sonaglio e il sistro."],
        ["Strumento a fiato", "si suona soffiandoci dentro, come il flauto, l'aulos e la tromba."],
        ["Strumento a corda", "si suona pizzicando delle corde tese, come l'arpa e la lira."],
        ["Coro", "un gruppo di persone che cantano insieme."],
        ["Ottava", "la distanza fra due note con lo stesso nome, una più grave e una più acuta."]
      ]
    },

    /* ===================== CAPITOLO 2 ===================== */
    {
      n: 2,
      title: "La musica nel Medioevo",
      subtitle: "Dal canto dei monaci alle feste dei giullari",
      img: "cap2_00_apertura",
      alt: "Un giullare suona il liuto per una famiglia di contadini; sotto il portico del monastero cantano i monaci; sullo sfondo il castello e il borgo.",
      intro: [
        "Dopo la fine dell'Impero romano comincia un periodo lunghissimo, di circa mille anni: il Medioevo. È l'epoca dei castelli e dei cavalieri, dei monasteri e dei borghi circondati da mura.",
        "In questo capitolo ascolteremo i monaci che cantano, scopriremo chi ha dato il nome alle note e andremo alle feste in piazza con i giullari."
      ],
      ottavio: "Senti? Dal monastero arriva un canto, e sulla strada un giullare suona il liuto. Andiamo a vedere!",
      sections: [
        {
          id: "2.1", title: "Il canto dei monaci",
          img: "cap2_01_gregoriano", alt: "I monaci cantano intorno a un grande libro corale in una chiesa romanica illuminata dalle candele.",
          body: [
            "Nel Medioevo i monasteri erano luoghi importantissimi. I monaci e le monache vivevano lì tutta la vita: pregavano, lavoravano, studiavano e copiavano i libri a mano, uno per uno. Più volte al giorno si riunivano in chiesa per pregare cantando.",
            "Il loro canto si chiama canto gregoriano. Tutti cantano la stessa melodia nello stesso momento, come se fossero una voce sola. Non ci sono strumenti musicali e le parole sono in latino, la lingua della Chiesa. Il nome viene da papa Gregorio Magno: secondo la tradizione fu lui a raccogliere e ordinare questi canti.",
            "I libri del coro erano scritti a mano su pergamena e decorati con colori e oro. Erano così grandi che tutti i monaci potevano leggerli insieme, anche da lontano."
          ],
          listen: [
            { title: "«Puer natus est nobis»", text: "È un canto di Natale: il titolo significa «Ci è nato un bambino». Ascolta come le voci si muovono tutte insieme, calme e leggere.", file: "asc_2_1_gregoriano.mp3" }
          ],
          know: "In molti dipinti papa Gregorio è ritratto con una colomba sulla spalla. Secondo una leggenda, era la colomba a suggerirgli i canti all'orecchio!"
        },
        {
          id: "2.2", title: "Guido d'Arezzo e i nomi delle note",
          img: "cap2_02_guido", alt: "Guido insegna ai giovani cantori; alla parete una pergamena con le righe colorate e le note.",
          body: [
            "Per imparare tutti i canti a memoria, i giovani cantori impiegavano tantissimi anni. Le melodie si imparavano a orecchio, ascoltando e ripetendo. Circa mille anni fa un monaco italiano, Guido d'Arezzo, ebbe due idee geniali per rendere tutto più facile.",
            "La prima idea fu il rigo musicale: alcune linee orizzontali su cui scrivere le note, più in alto o più in basso a seconda che il suono sia acuto o grave. Guido usava quattro linee, e alcune erano colorate di rosso e di giallo. Oggi ne usiamo cinque: è il pentagramma.",
            "La seconda idea fu dare un nome alle note. Guido prese un inno dedicato a San Giovanni Battista, in cui ogni verso comincia con una nota più alta del precedente, e usò le prime sillabe dei versi: UT, RE, MI, FA, SOL, LA. Per aiutare la memoria, i suoi allievi indicavano le note anche sulle dita della mano."
          ],
          cards: [
            { img: "guido", rows: [["Nome", "Guido d'Arezzo"], ["Nato", "verso il 990, in Italia"], ["Morto", "dopo il 1033"], ["Mestiere", "monaco e maestro di canto"], ["Famoso per", "il rigo musicale e i nomi delle note"]] }
          ],
          listen: [
            { title: "«Ut queant laxis»", text: "È l'inno da cui Guido prese i nomi delle note. Ascolta la prima strofa: ogni verso parte da una nota un po' più alta, come i gradini di una scala.", file: "asc_2_2_ut_queant_laxis.mp3" }
          ],
          know: "Più tardi UT è diventato DO, perché è più facile da cantare. Poi si è aggiunta la nota SI, dalle iniziali di Sancte Iohannes, cioè San Giovanni, le ultime parole dell'inno.",
          ottavio: "Ogni volta che canti DO RE MI, stai usando l'invenzione di un monaco di mille anni fa!"
        },
        {
          id: "2.3", title: "Ildegarda di Bingen",
          img: "cap2_03_ildegarda", alt: "Ildegarda scrive musica in un giardino di erbe e fiori, mentre le monache cantano.",
          body: [
            "In Germania, quasi novecento anni fa, viveva una monaca straordinaria: Ildegarda di Bingen. Era la badessa, cioè la guida del suo monastero, e sapeva fare tantissime cose. Scriveva libri, studiava le piante e le erbe per curare i malati, dipingeva e componeva musica.",
            "Ildegarda scrisse più di settanta canti per le sue monache. Le sue melodie sono ampie e luminose: salgono in alto, scendono, poi risalgono, come il volo di un uccello. Scrisse anche un'opera musicale in cui i personaggi sono le virtù, come la Speranza e la Pazienza, che lottano contro il diavolo.",
            "In un'epoca in cui quasi tutti i musicisti erano uomini, Ildegarda è una delle prime compositrici di cui conosciamo il nome."
          ],
          cards: [
            { img: "ildegarda", rows: [["Nome", "Ildegarda di Bingen"], ["Nata", "1098, in Germania"], ["Morta", "1179, nel suo monastero vicino a Bingen"], ["Mestiere", "badessa, scrittrice, esperta di erbe e compositrice"], ["Famosa per", "i suoi canti luminosi e i suoi libri sulla natura"]] }
          ],
          listen: [
            { title: "«O viridissima virga»", text: "Il titolo significa «O ramo verdissimo». Segui la melodia: dove sale più in alto?", file: "asc_2_3_ildegarda.mp3" }
          ],
          know: "Ildegarda inventò perfino una lingua segreta, con un suo alfabeto e centinaia di parole nuove!"
        },
        {
          id: "2.4", title: "Trovatori, giullari e feste in piazza",
          img: "cap2_04_giullari", alt: "Festa in un borgo medievale: il giullare suona, il trovatore canta con il liuto sotto il balcone, la gente balla in cerchio, un uomo suona la cornamusa e una bambina il tamburello.",
          body: [
            "Nel Medioevo la musica non risuonava soltanto nelle chiese. Nei castelli, nelle piazze e nelle osterie si cantava e si ballava.",
            "Nei castelli del sud della Francia vivevano i trovatori, poeti e musicisti che spesso erano nobili cavalieri. Componevano canzoni d'amore e storie di avventure, e le cantavano accompagnandosi con il liuto o con la viella, un antenato del violino.",
            "Per le strade, invece, viaggiavano i giullari. Andavano di paese in paese, e nelle piazze cantavano, suonavano, facevano giochi di prestigio e raccontavano le notizie dei posti lontani. Alle feste suonavano flauti, tamburelli, cornamuse e la ghironda, mentre la gente ballava in cerchio tenendosi per mano."
          ],
          ottavio: "La ghironda è uno strumento curioso: con una mano giri una manovella e una ruota sfrega le corde, con l'altra premi i tasti per cambiare le note.",
          listen: [
            { title: "Un saltarello", text: "È una danza italiana di circa settecento anni fa. Si chiama così perché si ballava saltellando! Riconosci il flauto e il tamburo?", file: "asc_2_4_saltarello.mp3" }
          ],
          know: "Il liuto è arrivato in Europa dal mondo arabo. Il suo nome viene dalla parola araba al-ūd, che significa «il legno»."
        },
        {
          id: "2.5", title: "Più voci insieme: la polifonia",
          img: "cap2_05_polifonia", alt: "Un coro canta in due gruppi dentro una cattedrale gotica, sotto un grande rosone di vetri colorati.",
          body: [
            "Per secoli nelle chiese si cantò una sola melodia alla volta. Poi i musicisti ebbero un'idea nuova: mentre alcuni cantori cantavano la melodia, altri potevano cantare un'altra melodia nello stesso momento. Nacque così la polifonia, cioè la musica a più voci.",
            "Intorno all'anno 1200, nella grande cattedrale di Notre-Dame a Parigi, lavorava un musicista di nome Perotino. Scrisse brani a tre e perfino a quattro voci. Le voci più basse tenevano note lunghissime, mentre quelle più alte si muovevano veloci sopra di loro, come rondini sopra un campanile.",
            "Per cantare tutti insieme senza confondersi, bisognava sapere quanto doveva durare ogni nota. Così i musicisti inventarono nuovi segni, e la scrittura della musica diventò sempre più precisa."
          ],
          ottavio: "Polifonia è una parola greca: «poli» vuol dire «molti» e «fonia» vuol dire «suoni», «voci».",
          listen: [
            { title: "«Viderunt omnes» di Perotino", text: "Ascolta le voci basse che tengono le note lunghissime e quelle alte che ci danzano sopra.", file: "asc_2_5_perotin.mp3" },
            { title: "«Ecco la primavera»", text: "È una canzone a due voci di Francesco Landini, un musicista di Firenze vissuto circa settecento anni fa. Landini era cieco fin da bambino, ma suonava l'organo così bene che tutti venivano ad ascoltarlo.", file: "asc_2_6_landini.mp3", optional: true }
          ]
        }
      ],
      summary: [
        "Nel Medioevo i monaci cantavano il canto gregoriano: una sola melodia, tutti insieme, in latino e senza strumenti musicali.",
        "Guido d'Arezzo inventò il rigo musicale e diede alle note i nomi UT, RE, MI, FA, SOL, LA.",
        "Ildegarda di Bingen fu badessa, scrittrice e una delle prime compositrici di cui conosciamo il nome.",
        "Trovatori e giullari portavano la musica nei castelli e nelle piazze, con liuti, flauti, tamburelli e cornamuse.",
        "Con la polifonia si cominciò a cantare più melodie diverse nello stesso momento."
      ],
      quiz: [
        { q: "In che lingua si canta il canto gregoriano?", a: ["in latino", "in italiano", "in greco"] },
        { q: "Da dove prese Guido d'Arezzo i nomi delle note?", a: ["da un inno a San Giovanni", "dai nomi dei suoi allievi", "dai giorni della settimana"] },
        { q: "Che cosa studiava Ildegarda di Bingen, oltre alla musica?", a: ["le piante e le erbe per curare i malati", "le stelle", "i castelli"] },
        { q: "Chi andava di paese in paese a cantare e a fare giochi di prestigio?", a: ["i giullari", "i monaci", "i re"] },
        { q: "Che cosa vuol dire «polifonia»?", a: ["molte voci", "una voce sola", "voce forte"] }
      ],
      game: "Gioco di canto: cantate tutti insieme la stessa nota, come i monaci. Poi dividetevi in due gruppi: uno tiene una nota lunga, l'altro canta DO RE MI FA SOL sopra di lui. Avete appena fatto polifonia!",
      words: [
        ["Monastero", "il luogo dove vivono, pregano e lavorano i monaci o le monache."],
        ["Canto gregoriano", "il canto della Chiesa nel Medioevo, a una sola melodia e in latino."],
        ["Rigo musicale", "le linee su cui si scrivono le note; oggi sono cinque e formano il pentagramma."],
        ["Compositore e compositrice", "chi inventa e scrive la musica."],
        ["Trovatore", "poeta e musicista che cantava nei castelli."],
        ["Giullare", "artista di strada che cantava, suonava e intratteneva la gente nelle piazze."],
        ["Polifonia", "musica in cui si sentono più melodie diverse nello stesso momento."]
      ]
    },

    /* ===================== CAPITOLO 3 ===================== */
    {
      n: 3,
      title: "La musica nel Rinascimento",
      subtitle: "Stampatori, cori e danze di corte",
      img: "cap3_00_apertura",
      alt: "Su una terrazza fiorita davanti a Firenze, dame e cavalieri ballano in cerchio mentre i musicisti suonano liuto, viola e flauto.",
      intro: [
        "Siamo in Italia, circa cinquecento anni fa. In città come Firenze, Roma e Venezia lavorano grandi artisti, come Leonardo da Vinci e Michelangelo. Questo periodo si chiama Rinascimento, cioè «nascere di nuovo», perché le persone riscoprono l'arte e il sapere degli antichi Greci e Romani.",
        "Anche la musica cambia: diventa elegante e gioiosa, si canta nelle chiese, ma anche a casa con gli amici e nelle feste dei palazzi. E grazie a una nuova invenzione, comincia a viaggiare in tutta Europa."
      ],
      ottavio: "Che profumo di fiori! Seguimi in questa danza: il Rinascimento ci aspetta.",
      sections: [
        {
          id: "3.1", title: "La musica si stampa",
          img: "cap3_01_stampa", alt: "Una bottega di stampa a Venezia: dal torchio escono i fogli di musica, appesi ad asciugare; fuori passa una gondola.",
          body: [
            "Per molti secoli la musica era stata copiata a mano, nota per nota. Copiare un libro di canti richiedeva mesi di lavoro, e solo le chiese e i signori più ricchi potevano permetterselo.",
            "Verso il 1450 in Germania fu inventata la stampa a caratteri mobili: piccole lettere di metallo che si potevano comporre, bagnare d'inchiostro e premere sulla carta con un torchio. Così si potevano fare tante copie dello stesso libro in poco tempo.",
            "Nel 1501, a Venezia, lo stampatore Ottaviano Petrucci pubblicò il primo libro di musica a più voci stampato con i caratteri mobili. Da allora gli spartiti si poterono comprare nelle botteghe, e la musica cominciò a viaggiare in tutta Europa. Anche le famiglie potevano cantare e suonare a casa."
          ],
          ottavio: "Lo stampatore che fece conoscere la musica stampata in tutta Europa si chiamava Ottaviano. Quasi come me!",
          listen: [
            { title: "«El grillo» di Josquin Desprez", text: "Questa canzone fu stampata da Petrucci. Ascolta come le voci ripetono velocissime le stesse parole, per imitare il cri cri del grillo.", file: "asc_3_1_josquin_grillo.mp3" }
          ]
        },
        {
          id: "3.2", title: "Palestrina e le voci che si intrecciano",
          img: "cap3_02_palestrina", alt: "Palestrina dirige il coro in una grande basilica romana piena di affreschi.",
          body: [
            "Nel Rinascimento la polifonia diventò ricchissima: quattro, cinque, sei voci cantavano insieme, ognuna con la propria melodia. Il musicista più famoso di questa musica fu Giovanni Pierluigi, detto Palestrina dal nome della sua città, vicino a Roma.",
            "Palestrina lavorò per tutta la vita nelle grandi basiliche di Roma, come San Pietro, dove guidava il coro. Scrisse più di cento messe e centinaia di altri canti religiosi. Nella sua musica le voci entrano una dopo l'altra e si intrecciano con calma, come i fili colorati di un tessuto. Eppure le parole si capiscono sempre bene."
          ],
          cards: [
            { img: "palestrina", rows: [["Nome", "Giovanni Pierluigi da Palestrina"], ["Nato", "verso il 1525, a Palestrina, vicino a Roma"], ["Morto", "1594, a Roma"], ["Mestiere", "compositore e maestro del coro"], ["Famoso per", "le messe e i canti a più voci, chiari e armoniosi"]] }
          ],
          listen: [
            { title: "«Sicut cervus»", text: "Il titolo significa «Come il cervo». Ascolta l'inizio: le quattro voci entrano una alla volta. Riesci a contarle?", file: "asc_3_2_palestrina.mp3" }
          ],
          know: "Si racconta che i capi della Chiesa volessero vietare la polifonia, perché con tante voci insieme non si capivano le parole. Palestrina avrebbe scritto una messa così chiara da far cambiare idea a tutti. Oggi gli studiosi pensano che sia solo una leggenda, ma è una bella storia!"
        },
        {
          id: "3.3", title: "Cantare per divertirsi: il madrigale",
          img: "cap3_03_madrigale", alt: "Amici cantano intorno a una tavola davanti al camino; un cane ulula, un gatto miagola e alla finestra c'è un gufo.",
          body: [
            "Nel Rinascimento si cantava anche per divertirsi. La sera, dopo cena, amici e parenti si sedevano intorno a una tavola e cantavano insieme dei madrigali: canzoni a quattro o cinque voci su poesie in italiano. Parlavano d'amore, di natura, di feste e di scherzi.",
            "Ogni cantante aveva davanti un libretto con la sua parte, cioè soltanto le note della sua voce. Per cantare bene bisognava ascoltarsi a vicenda e partire tutti insieme. Alcuni compositori si divertivano a far imitare alle voci i suoni della natura e i versi degli animali."
          ],
          listen: [
            { title: "«Contrappunto bestiale alla mente» di Adriano Banchieri", text: "In questo brano i cantanti imitano un cane, un gatto, un cuculo e un gufo. Riesci a riconoscerli tutti?", file: "asc_3_3_banchieri.mp3" },
            { title: "«Il canto degli uccelli» di Clément Janequin", text: "Un coro francese che imita i cinguettii di tanti uccellini.", file: "asc_3_4_janequin.mp3", optional: true }
          ],
          ottavio: "Hai sentito il gufo? Fa «chiù, chiù». Chissà, forse è un mio lontano cugino!"
        },
        {
          id: "3.4", title: "Danze e strumenti di corte",
          img: "cap3_04_danze", alt: "Una sala da ballo di un palazzo: le coppie danzano sul pavimento a scacchi, i musicisti suonano dal balconcino.",
          body: [
            "Nei palazzi dei signori del Rinascimento, come i Medici a Firenze o i Gonzaga a Mantova, si organizzavano feste e balli magnifici. C'erano maestri di ballo che insegnavano ai nobili i passi giusti, proprio come oggi si va a lezione di danza.",
            "Le danze andavano spesso in coppia: prima una lenta e solenne, come la pavana, poi una vivace e piena di salti, come la gagliarda. I musicisti suonavano dal balconcino della sala: liuti, flauti, viole, tamburi e le prime spinette, piccoli strumenti a tastiera."
          ],
          ottavio: "La viola da gamba si chiama così perché si suona tenendola fra le gambe, come il violoncello di oggi.",
          listen: [
            { title: "«Schiarazula marazula» di Giorgio Mainerio", text: "È una danza allegra, facile da ricordare. Prova a battere il tempo con le mani mentre ascolti!", file: "asc_3_5_mainerio.mp3" },
            { title: "«La Mourisque» di Tielman Susato", text: "Una danza per trombe, tromboni e tamburo.", file: "asc_3_6_susato.mp3", optional: true }
          ],
          know: "Leonardo da Vinci era anche un bravo musicista. Suonava la lira da braccio, un antenato del violino, e disegnò progetti di strumenti nuovi mai visti prima."
        },
        {
          id: "3.5", title: "Venezia e la musica a due cori",
          img: "cap3_05_venezia", alt: "Nella basilica di San Marco due gruppi di musicisti suonano da balconate una di fronte all'altra, mentre la folla ascolta.",
          body: [
            "Nel Cinquecento Venezia era una delle città più ricche e famose del mondo. Nella sua basilica più importante, San Marco, c'erano due organi e due balconate per i cantori, una di fronte all'altra.",
            "I musicisti di San Marco, come Andrea Gabrieli e suo nipote Giovanni, ebbero un'idea spettacolare. Divisero i cantanti e i suonatori in due gruppi, uno per balconata. I gruppi si rispondevano come in un dialogo, poi suonavano tutti insieme. Chi stava in mezzo alla basilica sentiva la musica arrivare prima da una parte, poi dall'altra, poi da tutte e due.",
            "Giovanni Gabrieli fu anche uno dei primi a scrivere esattamente quali strumenti dovevano suonare: cornetti, tromboni e violini."
          ],
          listen: [
            { title: "«Sonata pian' e forte» di Giovanni Gabrieli", text: "È uno dei primi brani in cui il compositore scrive sulla musica quando suonare piano e quando suonare forte. Ascolta la differenza!", file: "asc_3_7_gabrieli.mp3" }
          ],
          ottavio: "Proviamo anche noi! Dividete la classe in due gruppi, ai due lati dell'aula: un gruppo canta una frase, l'altro risponde. Sembra un'eco!"
        }
      ],
      summary: [
        "Il Rinascimento è il periodo in cui si riscoprono l'arte e il sapere degli antichi; la musica diventa elegante e gioiosa.",
        "Con la stampa, a partire dal 1501, la musica si diffonde in tutta Europa e si può suonare anche a casa.",
        "Palestrina scrive musica a molte voci che si intrecciano, ma in cui le parole si capiscono bene.",
        "Con i madrigali gli amici cantano insieme per divertirsi, a volte imitando i versi degli animali.",
        "Nei palazzi si balla la pavana e la gagliarda; a Venezia due cori si rispondono da una parte all'altra della basilica."
      ],
      quiz: [
        { q: "Che cosa vuol dire «Rinascimento»?", a: ["nascere di nuovo", "addormentarsi", "ballare in cerchio"] },
        { q: "In quale città fu stampato il primo libro di musica a più voci?", a: ["Venezia", "Firenze", "Roma"] },
        { q: "Che cos'è un madrigale?", a: ["una canzone a più voci su una poesia", "una danza veloce", "uno strumento a corda"] },
        { q: "Quale danza era lenta e solenne?", a: ["la pavana", "la gagliarda", "il saltarello"] },
        { q: "Perché a San Marco la musica arrivava da due parti?", a: ["perché i musicisti erano divisi su due balconate", "perché c'era l'eco", "perché la basilica era rotonda"] }
      ],
      game: "Gioco di ascolto: riascolta il brano di Banchieri e alza la mano ogni volta che senti un animale. Quanti ne hai contati?",
      words: [
        ["Rinascimento", "il periodo, circa dal 1400 al 1600, in cui si riscoprono l'arte e il sapere degli antichi."],
        ["Stampa a caratteri mobili", "il modo di stampare con piccole lettere di metallo, che permette di fare tante copie."],
        ["Spartito", "il foglio o il libro su cui è scritta la musica."],
        ["Madrigale", "canzone a più voci su una poesia, cantata per divertimento."],
        ["Pavana e gagliarda", "due danze di corte, una lenta e una vivace."],
        ["Piano e forte", "le parole che dicono se suonare a volume basso o alto."]
      ]
    },

    /* ===================== CAPITOLO 4 ===================== */
    {
      n: 4,
      title: "La musica nel Barocco",
      subtitle: "Teatri d'opera, violini e grandi compositori",
      img: "cap4_00_apertura",
      alt: "Un teatro d'opera con i palchi dorati: sul palco due cantanti davanti a un mare in tempesta dipinto, sotto di loro l'orchestra.",
      intro: [
        "Tra il 1600 e il 1750 l'Europa si riempie di palazzi e chiese decorati con stucchi dorati, statue e affreschi pieni di movimento. Questo periodo si chiama Barocco.",
        "Anche la musica ama la meraviglia e i contrasti: forte e piano, veloce e lento, un solo strumento contro tutta l'orchestra. In questo capitolo vedremo nascere l'Opera, entreremo nella bottega dove si costruiscono i violini più famosi del mondo e conosceremo tre grandi compositori: Vivaldi, Bach e Händel."
      ],
      ottavio: "Il sipario si sta alzando! Accomodati: lo spettacolo comincia.",
      sections: [
        {
          id: "4.1", title: "Nasce l'opera: Monteverdi",
          img: "cap4_01_monteverdi", alt: "Mantova, 1607: sul palco Orfeo canta con la lira, Monteverdi dirige i musicisti davanti al pubblico della corte.",
          body: [
            "Verso il 1600 alcuni musicisti di Firenze vollero far rivivere il teatro degli antichi Greci, dove le storie si raccontavano cantando. Nacque così l'Opera: una storia in cui i personaggi non parlano, ma cantano, accompagnati dagli strumenti, con costumi e scenografie.",
            "Nel 1607, alla corte dei Gonzaga a Mantova, Claudio Monteverdi presentò «L'Orfeo», il primo grande capolavoro dell'Opera. Racconta di Orfeo, un cantore così bravo che la sua musica incantava gli animali e gli alberi. Quando perde la sua sposa Euridice, Orfeo scende nel regno dei morti per riportarla indietro con la forza del suo canto.",
            "Pochi anni dopo l'Opera conquistò tutta l'Italia, e poi tutta l'Europa."
          ],
          cards: [
            { img: "monteverdi", rows: [["Nome", "Claudio Monteverdi"], ["Nato", "1567, a Cremona"], ["Morto", "1643, a Venezia"], ["Mestiere", "compositore, maestro di musica a Mantova e poi a San Marco a Venezia"], ["Famoso per", "«L'Orfeo», una delle prime opere della storia, e i suoi madrigali"]] }
          ],
          listen: [
            { title: "La Toccata dell'«Orfeo»", text: "È la fanfara di trombe che apriva lo spettacolo: veniva suonata tre volte, prima che si alzasse il sipario.", file: "asc_4_1_monteverdi.mp3" }
          ],
          know: "Nel 1637 a Venezia aprì il primo teatro d'opera pubblico: per la prima volta chiunque comprasse un biglietto poteva assistere, non solo i nobili invitati a corte."
        },
        {
          id: "4.2", title: "Violini, clavicembali e organi",
          img: "cap4_02_stradivari", alt: "La bottega di Stradivari a Cremona: il vecchio maestro prova un violino, un allievo lo vernicia, alle pareti violini e violoncelli appesi.",
          body: [
            "Nel Barocco il violino diventò il re degli strumenti musicali. Insieme ai suoi fratelli, la viola, il violoncello e il contrabbasso, formò il cuore dell'orchestra, che proprio in questo periodo cominciò a prendere forma.",
            "I violini più famosi del mondo nacquero a Cremona, nelle botteghe di grandi liutai come Amati, Guarneri e soprattutto Antonio Stradivari. Stradivari lavorò per tutta la sua lunghissima vita e costruì più di mille strumenti, scegliendo con cura il legno e preparando vernici speciali.",
            "Accanto ai violini suonavano il clavicembalo, uno strumento a tastiera in cui ogni tasto fa pizzicare una corda da una piccola punta, e l'organo, con le sue canne e i suoi mantici."
          ],
          cards: [
            { img: "stradivari", rows: [["Nome", "Antonio Stradivari"], ["Nato", "verso il 1644, a Cremona"], ["Morto", "1737, a Cremona"], ["Mestiere", "liutaio"], ["Famoso per", "violini, viole e violoncelli dal suono meraviglioso"]] }
          ],
          ottavio: "Chi costruisce violini si chiama liutaio: la parola viene da «liuto», lo strumento che hai conosciuto nel capitolo sul Medioevo.",
          listen: [
            { title: "«La Follia» di Arcangelo Corelli", text: "Una melodia viene ripetuta tante volte, e ogni volta il violino la cambia e la rende più difficile: è una gara di bravura!", file: "asc_4_2_corelli.mp3" },
            { title: "«La fuga del gatto» di Domenico Scarlatti", text: "Si racconta che l'idea venne da un gatto che camminava sulla tastiera del clavicembalo.", file: "asc_4_3_scarlatti.mp3", optional: true }
          ],
          know: "Oggi esistono ancora circa seicentocinquanta strumenti di Stradivari, e alcuni valgono milioni di euro. Ancora oggi nessuno sa con certezza quale fosse il suo segreto."
        },
        {
          id: "4.3", title: "Antonio Vivaldi",
          img: "cap4_03_vivaldi", alt: "A Venezia Vivaldi, con i capelli rossi, dirige l'orchestra delle ragazze della Pietà; dalle finestre si vedono i canali e le gondole.",
          body: [
            "Antonio Vivaldi nacque a Venezia e aveva i capelli rossi come il fuoco. Diventò prete, ma la sua vera passione era il violino: per questo tutti lo chiamavano «il prete rosso».",
            "Per molti anni insegnò musica all'Ospedale della Pietà, un istituto che accoglieva bambine e ragazze senza famiglia. Con Vivaldi le ragazze della Pietà formarono un'orchestra e un coro così bravi che i visitatori arrivavano da tutta Europa per ascoltarle.",
            "Vivaldi scrisse circa cinquecento concerti. Nel concerto, un solista, per esempio un violino, dialoga con l'orchestra: a volte suona da solo, a volte gli strumenti dell'orchestra suonano tutti insieme. I suoi concerti più famosi sono «Le quattro stagioni»: la musica descrive la primavera, l'estate, l'autunno e l'inverno."
          ],
          cards: [
            { img: "vivaldi", rows: [["Nome", "Antonio Vivaldi"], ["Nato", "1678, a Venezia"], ["Morto", "1741, a Vienna"], ["Mestiere", "violinista, compositore e insegnante"], ["Famoso per", "«Le quattro stagioni» e centinaia di concerti"]] }
          ],
          listen: [
            { title: "«La primavera»", text: "Ascolta l'inizio allegro, poi i violini che imitano il canto degli uccellini, il mormorio dei ruscelli e infine un temporale con lampi e tuoni.", file: "asc_4_4_vivaldi.mp3" }
          ],
          know: "Ognuna delle quattro stagioni è accompagnata da una poesia. Sulla musica Vivaldi scrisse anche delle piccole indicazioni, come «il cane che abbaia», per dire ai musicisti che cosa stavano imitando."
        },
        {
          id: "4.4", title: "Johann Sebastian Bach",
          img: "cap4_04_bach", alt: "Bach suona un grande organo in chiesa; la moglie e i figli ascoltano, due ragazzi muovono i mantici per dare aria alle canne.",
          body: [
            "Johann Sebastian Bach nacque in Germania in una famiglia piena di musicisti: zii, cugini e fratelli suonavano tutti. Diventò uno dei più grandi organisti del suo tempo. L'organo si suona con le mani su più tastiere e con i piedi su una tastiera di pedali, che fa le note più gravi.",
            "Per quasi trent'anni Bach lavorò nella città di Lipsia: insegnava ai ragazzi del coro e ogni domenica doveva preparare musica nuova per la chiesa. Scrisse tantissimo: musica per organo, per clavicembalo, per orchestra e per coro.",
            "Bach era un maestro della fuga, una composizione in cui una melodia passa da una voce all'altra, come in un gioco a rincorrersi. Ebbe venti figli e alcuni di loro diventarono compositori famosi."
          ],
          cards: [
            { img: "bach", rows: [["Nome", "Johann Sebastian Bach"], ["Nato", "1685, a Eisenach, in Germania"], ["Morto", "1750, a Lipsia"], ["Mestiere", "organista, compositore e maestro del coro"], ["Famoso per", "la musica per organo, le fughe e la musica per la chiesa"]] }
          ],
          listen: [
            { title: "La «Badinerie»", text: "Il nome vuol dire «scherzo»: è un brano velocissimo e allegro, in cui il flauto corre senza fermarsi mai.", file: "asc_4_5_bach_badinerie.mp3" },
            { title: "La «Toccata e fuga in re minore»", text: "Ascolta il suono potente dell'organo.", file: "asc_4_6_bach_toccata.mp3", optional: true }
          ],
          know: "Da giovane Bach fece circa quattrocento chilometri a piedi, solo per ascoltare un famoso organista che ammirava. Che passione!"
        },
        {
          id: "4.5", title: "Händel e la musica sull'acqua",
          img: "cap4_05_handel", alt: "Londra, 1717: la barca dorata del re sul Tamigi e, accanto, la barca dei musicisti diretti da Händel; la folla saluta dalla riva.",
          body: [
            "Georg Friedrich Händel nacque in Germania nello stesso anno di Bach, ma i due non si incontrarono mai. Da giovane visse alcuni anni in Italia, dove imparò a scrivere opere. Poi si trasferì a Londra, dove diventò il musicista più famoso d'Inghilterra.",
            "Una sera d'estate del 1717 il re Giorgio I decise di fare una gita in barca sul fiume Tamigi. Accanto alla sua barca ne viaggiava un'altra con circa cinquanta musicisti, che suonavano la musica scritta per l'occasione da Händel: la «Musica sull'acqua». Al re piacque così tanto che la fece ripetere tre volte!",
            "Händel scrisse anche tante opere in italiano e grandi composizioni per coro e orchestra, come «Il Messia»."
          ],
          cards: [
            { img: "handel", rows: [["Nome", "Georg Friedrich Händel"], ["Nato", "1685, a Halle, in Germania"], ["Morto", "1759, a Londra"], ["Mestiere", "compositore e organista"], ["Famoso per", "la «Musica sull'acqua», «Il Messia» e le opere in italiano"]] }
          ],
          listen: [
            { title: "«Alla Hornpipe» dalla «Musica sull'acqua»", text: "Ascolta i corni e le trombe: all'aperto, sull'acqua, servivano strumenti dal suono forte e brillante.", file: "asc_4_7_handel_water.mp3" },
            { title: "«Hallelujah» dal «Messia»", text: "È il coro più famoso di Händel.", file: "asc_4_8_handel_hallelujah.mp3", optional: true }
          ],
          know: "In Inghilterra, quando si canta il coro «Hallelujah», il pubblico si alza in piedi. Si racconta che la tradizione sia nata perché un re, emozionato, si alzò durante il concerto, e tutti fecero come lui."
        }
      ],
      summary: [
        "Il Barocco, tra il 1600 e il 1750, è l'epoca della meraviglia e dei contrasti, anche nella musica.",
        "Intorno al 1600 nasce l'opera; «L'Orfeo» di Monteverdi è uno dei primi capolavori.",
        "A Cremona Stradivari e altri liutai costruiscono violini dal suono meraviglioso; nasce l'orchestra.",
        "Vivaldi scrive centinaia di concerti, tra cui «Le quattro stagioni».",
        "Bach è un grande organista e maestro della fuga; Händel fa suonare la sua musica sul Tamigi per il re."
      ],
      quiz: [
        { q: "Che cos'è un'Opera?", a: ["una storia raccontata cantando", "un quadro famoso", "una danza di corte"] },
        { q: "In quale città lavorava Stradivari?", a: ["Cremona", "Venezia", "Londra"] },
        { q: "Perché Vivaldi era chiamato «il prete rosso»?", a: ["perché aveva i capelli rossi", "perché vestiva di rosso", "perché arrossiva sempre"] },
        { q: "Con che cosa si suonano le note più gravi dell'organo?", a: ["con i piedi, sui pedali", "con il gomito", "con un bastone"] },
        { q: "Dove fu suonata la «Musica sull'acqua» di Händel?", a: ["su una barca, sul fiume Tamigi", "in una chiesa", "in un teatro di Venezia"] }
      ],
      game: "Gioco di ascolto: riascolta «La primavera» di Vivaldi e alza la mano quando senti gli uccellini. Poi battila sul banco quando arriva il temporale!",
      words: [
        ["Barocco", "il periodo tra il 1600 e il 1750, pieno di decorazioni e di contrasti."],
        ["Opera", "una storia cantata, con orchestra, costumi e scenografie."],
        ["Orchestra", "un gruppo di musicisti che suonano insieme strumenti diversi."],
        ["Liutaio", "l'artigiano che costruisce violini e altri strumenti a corda."],
        ["Concerto", "un brano in cui uno strumento solista dialoga con l'orchestra."],
        ["Fuga", "un brano in cui una melodia passa da una voce all'altra, come in un inseguimento."],
        ["Clavicembalo", "uno strumento a tastiera in cui le corde vengono pizzicate."]
      ]
    },

    /* ===================== CAPITOLO 5 ===================== */
    {
      n: 5,
      title: "La musica nel Classicismo",
      subtitle: "Il pianoforte, l'orchestra e tre grandi di Vienna",
      img: "cap5_00_apertura",
      alt: "Un salone del Settecento con lampadari di cristallo: un giovane pianista in giacca rossa suona con un violinista e un violoncellista, mentre dame e signori con la parrucca ascoltano.",
      intro: [
        "Siamo nella seconda metà del Settecento. Le persone eleganti portano la parrucca bianca e si ritrovano nei saloni dei palazzi per ascoltare musica. La città più musicale d'Europa è Vienna.",
        "Questo periodo si chiama Classicismo. La musica diventa chiara, ordinata ed equilibrata, come gli antichi templi greci. Le melodie sono facili da ricordare, e i concerti cominciano a essere aperti a tutti, non solo ai nobili."
      ],
      ottavio: "Mettiti la parrucca e siediti in prima fila: oggi suonano i più grandi!",
      sections: [
        {
          id: "5.1", title: "Arriva il pianoforte",
          img: "cap5_01_pianoforte", alt: "Nel suo laboratorio di Firenze Bartolomeo Cristofori suona il nuovo strumento davanti ad amici e musicisti stupiti.",
          body: [
            "Il clavicembalo aveva un problema: qualunque forza si usasse per premere i tasti, suonava sempre allo stesso volume. Verso il 1700, a Firenze, un costruttore di strumenti di nome Bartolomeo Cristofori trovò la soluzione.",
            "Nel suo strumento, quando si preme un tasto, un piccolo martelletto ricoperto di pelle colpisce la corda e poi torna subito indietro. Se il tasto si preme piano, il suono è delicato; se si preme con forza, il suono è forte. Cristofori lo chiamò «gravicembalo col piano e forte».",
            "Il nuovo strumento conquistò a poco a poco tutti i musicisti. Nel Classicismo diventò lo strumento preferito per suonare a casa e nei concerti."
          ],
          cards: [
            { img: "cristofori", rows: [["Nome", "Bartolomeo Cristofori"], ["Nato", "1655, a Padova"], ["Morto", "1731, a Firenze"], ["Mestiere", "costruttore di strumenti alla corte dei Medici"], ["Famoso per", "l'invenzione del pianoforte"]] }
          ],
          ottavio: "«Gravicembalo col piano e forte» era un nome troppo lungo! Così la gente cominciò a chiamarlo semplicemente Pianoforte.",
          listen: [
            { title: "Il «Rondò alla turca» di Mozart", text: "Ascolta come il pianoforte suona ora piano, ora forte.", file: "asc_5_1_mozart_turca.mp3" }
          ],
          know: "Si chiama «alla turca» perché imita le bande militari turche, con i loro tamburi e piatti. A Vienna, in quegli anni, questa musica era di gran moda!"
        },
        {
          id: "5.2", title: "Haydn e l'orchestra",
          img: "cap5_02_haydn", alt: "Haydn dirige l'orchestra in un salone; i timpani suonano fortissimo e un signore che si era addormentato fa un salto sulla sedia.",
          body: [
            "Franz Joseph Haydn era figlio di un artigiano che costruiva ruote e carri. Da bambino cantava nel coro della cattedrale di Vienna. Da grande lavorò per quasi trent'anni al servizio dei principi Esterházy, che avevano nel loro palazzo un'orchestra tutta per loro.",
            "Con quell'orchestra Haydn poteva provare ogni giorno le sue idee. Scrisse più di cento sinfonie: grandi brani per orchestra, divisi in più parti chiamate movimenti. Nella sua orchestra c'erano gli archi, i fiati di legno come flauti e oboi, gli ottoni come corni e trombe, e i timpani.",
            "Haydn era così gentile e allegro che i suoi musicisti lo chiamavano «papà Haydn»."
          ],
          cards: [
            { img: "haydn", rows: [["Nome", "Franz Joseph Haydn"], ["Nato", "1732, a Rohrau, in Austria"], ["Morto", "1809, a Vienna"], ["Mestiere", "compositore e direttore dell'orchestra del principe"], ["Famoso per", "più di cento sinfonie e i quartetti per archi"]] }
          ],
          listen: [
            { title: "La sinfonia «La sorpresa»", text: "Una melodia tranquilla, quasi una ninna nanna… e poi, all'improvviso, un colpo fortissimo! Si racconta che Haydn volesse svegliare chi si addormentava ai concerti.", file: "asc_5_2_haydn_sorpresa.mp3" }
          ],
          know: "Una volta il principe, durante una vacanza, trattenne i suoi musicisti in campagna per troppo tempo, lontano dalle loro famiglie. Haydn allora scrisse una sinfonia in cui, verso la fine, i musicisti smettono di suonare uno alla volta, spengono la candela e se ne vanno. Il principe capì il messaggio e il giorno dopo tutti tornarono a casa!"
        },
        {
          id: "5.3", title: "Mozart, il bambino prodigio",
          img: "cap5_03_mozart", alt: "Il piccolo Mozart, in giacca rossa, suona il clavicembalo in un salone dorato della corte di Vienna, davanti a dame e signori a bocca aperta.",
          body: [
            "Wolfgang Amadeus Mozart nacque a Salisburgo nel 1756. A tre anni cercava gli accordi sul clavicembalo, a cinque componeva i primi brani. Suo padre Leopold, anche lui musicista, capì subito che il figlio aveva un talento straordinario.",
            "A sei anni Wolfgang suonò a Vienna davanti all'imperatrice Maria Teresa. Poi, insieme al padre e alla sorella Nannerl, bravissima anche lei, viaggiò per anni in tutta Europa. Nei palazzi il piccolo Mozart stupiva tutti: suonava perfino con la tastiera coperta da un panno, senza vedere i tasti!",
            "Da grande scrisse più di seicento composizioni: sinfonie, concerti, musica per pianoforte e tante opere. Morì giovanissimo, a soli trentacinque anni, ma la sua musica è tra la più amata al mondo."
          ],
          cards: [
            { img: "mozart", rows: [["Nome", "Wolfgang Amadeus Mozart"], ["Nato", "1756, a Salisburgo, oggi in Austria"], ["Morto", "1791, a Vienna"], ["Mestiere", "compositore, pianista e violinista"], ["Famoso per", "sinfonie, concerti e opere, più di seicento composizioni"]] }
          ],
          listen: [
            { title: "Le variazioni su «Ah, vous dirai-je, maman»", text: "Questa melodia la conosci di sicuro: è «Brilla brilla la stellina»! Mozart la ripete e ogni volta la trasforma in modo diverso.", file: "asc_5_3_mozart_variazioni.mp3" },
            { title: "«Eine kleine Nachtmusik»", text: "Vuol dire «Piccola serenata notturna»: è una delle melodie più famose del mondo.", file: "asc_5_4_mozart_nachtmusik.mp3", optional: true }
          ],
          know: "A quattordici anni, a Roma, Mozart ascoltò nella Cappella Sistina un lungo brano per coro che era vietato copiare. Tornato a casa, lo riscrisse tutto a memoria, nota per nota!"
        },
        {
          id: "5.4", title: "Il flauto magico",
          img: "cap5_04_flauto_magico", alt: "Sul palco di un teatro la Regina della notte siede su una falce di luna, un serpente gigante striscia nel bosco e Papageno, coperto di piume, suona il suo flautino con una gabbietta in mano.",
          body: [
            "Nel 1791, pochi mesi prima di morire, Mozart scrisse un'opera che sembra una fiaba: «Il flauto magico». Non era in italiano, come molte opere di allora, ma in tedesco, la lingua del pubblico di Vienna, e fra un canto e l'altro i personaggi parlavano.",
            "La storia comincia con il principe Tamino, inseguito da un serpente gigante. Tre dame misteriose lo salvano e, quando Tamino si risveglia, accanto a lui c'è Papageno, un buffo cacciatore di uccelli tutto coperto di piume, che si vanta di aver sconfitto lui il serpente. La misteriosa Regina della notte affida loro una missione: liberare sua figlia, la principessa Pamina. Per difendersi, Tamino riceve un flauto magico e Papageno dei campanelli incantati. Durante il viaggio scopriranno che niente è come sembra."
          ],
          ottavio: "Papageno è coperto di piume come me. Siamo quasi parenti!",
          listen: [
            { title: "«Sono io l'uccellatore»", text: "Papageno si presenta con una canzone allegra e, fra una strofa e l'altra, suona il suo flautino. Riesci a sentirlo?", file: "asc_5_5_papageno.mp3" },
            { title: "L'aria della Regina della notte", text: "La Regina canta note altissime, che sembrano fuochi d'artificio.", file: "asc_5_6_regina_notte.mp3", optional: true }
          ],
          know: "Alla fine dell'opera Papageno incontra Papagena, una ragazza vestita di piume come lui. Sono così emozionati che cantano balbettando: «Pa-pa-pa-pa…»."
        },
        {
          id: "5.5", title: "Beethoven, un ponte verso il futuro",
          img: "cap5_05_beethoven", alt: "Beethoven, spettinato, compone al pianoforte appoggiandosi per sentire le vibrazioni; la stanza è piena di fogli e fuori c'è un temporale.",
          body: [
            "Ludwig van Beethoven nacque a Bonn, in Germania, e da giovane si trasferì a Vienna, dove prese lezioni anche da Haydn. Era un pianista formidabile e un uomo dal carattere forte e appassionato.",
            "Verso i trent'anni Beethoven cominciò a perdere l'udito, e col tempo diventò completamente sordo. Per un musicista era una disgrazia terribile. Ma Beethoven non si arrese: continuò a comporre, perché la musica la sentiva dentro la sua mente. Si racconta che appoggiasse un bastoncino al pianoforte e lo stringesse fra i denti, per sentirne le vibrazioni.",
            "Nella sua musica Beethoven mise tutte le sue emozioni: la rabbia, il dolore, la gioia. Per questo è come un ponte tra il Classicismo e l'epoca che verrà dopo, il Romanticismo."
          ],
          cards: [
            { img: "beethoven", rows: [["Nome", "Ludwig van Beethoven"], ["Nato", "1770, a Bonn, in Germania"], ["Morto", "1827, a Vienna"], ["Mestiere", "compositore e pianista"], ["Famoso per", "nove sinfonie, tra cui la Quinta e la Nona, e la musica per pianoforte"]] }
          ],
          listen: [
            { title: "L'inizio della Quinta sinfonia", text: "Quattro note che sembrano bussare alla porta: ta-ta-ta-taaa! Quante volte le senti ritornare?", file: "asc_5_7_beethoven_quinta.mp3" },
            { title: "L'«Inno alla gioia» dalla Nona sinfonia", text: "In questa sinfonia, cosa nuovissima per l'epoca, cantano anche un coro e dei solisti. Oggi questa melodia è l'inno dell'Unione Europea.", file: "asc_5_8_beethoven_gioia.mp3" },
            { title: "«Per Elisa»", text: "È il brano per pianoforte che quasi tutti i principianti sognano di suonare.", file: "asc_5_9_per_elisa.mp3", optional: true }
          ],
          know: "Alla prima esecuzione della Nona sinfonia Beethoven, ormai sordo, non sentì gli applausi. Una cantante allora lo prese gentilmente per un braccio e lo girò verso il pubblico: tutti in piedi applaudivano e sventolavano i fazzoletti!"
        }
      ],
      summary: [
        "Nel Classicismo, nella seconda metà del Settecento, la musica diventa chiara ed equilibrata; Vienna è la sua città più famosa.",
        "Bartolomeo Cristofori inventa il pianoforte, che può suonare piano e forte.",
        "Haydn scrive più di cento sinfonie e dà forma all'orchestra moderna.",
        "Mozart è un bambino prodigio che diventa uno dei compositori più amati al mondo; «Il flauto magico» è la sua opera-fiaba.",
        "Beethoven, anche quando diventa sordo, continua a comporre e apre la strada al Romanticismo."
      ],
      quiz: [
        { q: "Che cosa colpisce le corde del pianoforte?", a: ["un martelletto", "una piccola punta", "un archetto"] },
        { q: "Come chiamavano Haydn i suoi musicisti?", a: ["papà Haydn", "il prete rosso", "il maestro dei maestri"] },
        { q: "Quanti anni aveva Mozart quando suonò per l'imperatrice Maria Teresa?", a: ["sei", "tre", "quattordici"] },
        { q: "Come si chiama il cacciatore di uccelli coperto di piume del «Flauto magico»?", a: ["Papageno", "Tamino", "Pamina"] },
        { q: "Quale melodia di Beethoven è oggi l'inno dell'Unione Europea?", a: ["l'«Inno alla gioia»", "«Per Elisa»", "la Quinta sinfonia"] }
      ],
      game: "Gioco di ritmo: battete tutti insieme sul banco le quattro note della Quinta di Beethoven, ta-ta-ta-taaa. Poi provate piano, e poi fortissimo!",
      words: [
        ["Classicismo", "il periodo della seconda metà del Settecento, con una musica chiara ed equilibrata."],
        ["Pianoforte", "strumento a tastiera in cui dei martelletti colpiscono le corde; può suonare piano e forte."],
        ["Sinfonia", "un grande brano per orchestra, diviso in più parti."],
        ["Movimento", "ognuna delle parti di una sinfonia o di un concerto."],
        ["Variazione", "una melodia ripetuta e trasformata ogni volta in modo diverso."],
        ["Aria", "un brano di un'opera cantato da un solo personaggio."]
      ]
    },

    /* ===================== CAPITOLO 6 ===================== */
    {
      n: 6,
      title: "La musica nel Romanticismo",
      subtitle: "Emozioni, sogni, leggende e grandi virtuosi",
      img: "cap6_00_apertura",
      alt: "Una notte di luna piena: un castello su una rupe, la nebbia nella valle, una coppia guarda il paesaggio e da una casetta illuminata arriva il suono di un pianoforte.",
      intro: [
        "Nell'Ottocento artisti e musicisti vogliono esprimere soprattutto i sentimenti: la gioia, la malinconia, la paura, l'amore per la natura e per la propria patria. Si ispirano alle leggende, ai sogni, ai paesaggi notturni avvolti dalla nebbia. Questo periodo si chiama Romanticismo.",
        "Il pianoforte si trova in tante case, le orchestre diventano grandissime e il pubblico corre ad applaudire i virtuosi, musicisti così bravi da sembrare magici. In Italia, intanto, tutti vanno pazzi per l'Opera."
      ],
      ottavio: "Che notte misteriosa! Ascolta: da quella finestra arriva una musica piena di sogni.",
      sections: [
        {
          id: "6.1", title: "Schubert: Le canzoni che raccontano",
          img: "cap6_01_schubert", alt: "Un ruscello limpido in campagna: una trota salta fuori dall'acqua, un pescatore tiene la canna e un giovane con gli occhiali, seduto sulla riva, guarda la scena.",
          body: [
            "Franz Schubert visse a Vienna ed era un ragazzo timido ma con tanti amici. Scrisse sinfonie e musica per pianoforte, ma soprattutto più di seicento Lieder: canzoni per voce e pianoforte su poesie di grandi scrittori. In queste canzoni il pianoforte non accompagna e basta; racconta anch'esso la storia.",
            "Uno dei suoi Lieder più famosi è «La trota». Un poeta, seduto sulla riva di un ruscello limpido, guarda una trota che guizza veloce e allegra nell'acqua. Arriva un pescatore con la canna, ma l'acqua è così chiara che la trota vede l'amo e non abbocca. Allora il pescatore, furbo, smuove il fondo e intorbida l'acqua: la trota non vede più l'amo e ci casca. Il poeta, che faceva il tifo per lei, ci rimane molto male!",
            "Gli amici di Schubert organizzavano serate in cui si suonava e si cantava soltanto la sua musica: le chiamavano «Schubertiadi». Schubert morì giovanissimo, a trentun anni, e molte sue opere furono scoperte solo dopo la sua morte."
          ],
          cards: [
            { img: "schubert", rows: [["Nome", "Franz Schubert"], ["Nato", "1797, a Vienna"], ["Morto", "1828, a Vienna"], ["Mestiere", "compositore"], ["Famoso per", "più di seicento Lieder, sinfonie e musica per pianoforte"]] }
          ],
          listen: [
            { title: "«La trota»", text: "Il pianoforte fa saltellare le note, come la trota che guizza fra i sassi. Ascolta bene verso la fine: quando il pescatore intorbida l'acqua, anche la musica cambia e diventa agitata.", file: "asc_6_1_schubert_trota.mp3" }
          ],
          know: "Qualche anno dopo Schubert riprese la melodia della trota in un brano per cinque strumenti, il «Quintetto della trota». Lo scrisse per un amico violoncellista che amava moltissimo questa canzone."
        },
        {
          id: "6.2", title: "Chopin, il poeta del pianoforte",
          img: "cap6_02_chopin", alt: "In un salotto di Parigi Chopin suona il pianoforte per un gruppo di amici; sul tappeto un cagnolino si rincorre la coda.",
          body: [
            "Fryderyk Chopin nacque in Polonia e a vent'anni si trasferì a Parigi, dove rimase per tutta la vita. Era un pianista straordinario, ma timido: preferiva suonare per pochi amici, nei salotti, invece che nei grandi teatri.",
            "Chopin scrisse quasi soltanto musica per pianoforte: valzer, notturni pieni di sogni e tante danze, come le mazurche e le polacche, per ricordare la sua terra lontana. La sua musica è così espressiva che lo chiamarono «il poeta del pianoforte»."
          ],
          cards: [
            { img: "chopin", rows: [["Nome", "Fryderyk Chopin"], ["Nato", "1810, vicino a Varsavia, in Polonia"], ["Morto", "1849, a Parigi"], ["Mestiere", "pianista e compositore"], ["Famoso per", "valzer, notturni, mazurche e polacche per pianoforte"]] }
          ],
          listen: [
            { title: "Il «Valzer del minuto»", text: "Si racconta che Chopin l'abbia scritto guardando un cagnolino che si rincorreva la coda. Senti come la melodia gira e rigira su se stessa?", file: "asc_6_2_chopin_minuto.mp3" }
          ],
          know: "Molti pensano che si chiami «del minuto» perché dura un minuto. In realtà «minuto» qui vuol dire «piccolo», e il valzer dura quasi due minuti!"
        },
        {
          id: "6.3", title: "Paganini, il violinista del diavolo",
          img: "cap6_03_paganini", alt: "Paganini, magro e vestito di nero, suona da solo sul grande palco illuminato; il pubblico nei palchi lo guarda a bocca aperta.",
          body: [
            "Niccolò Paganini nacque a Genova e cominciò a suonare il violino da piccolissimo. Diventò uno dei violinisti più famosi di tutti i tempi. Era alto e magrissimo, vestiva sempre di nero e aveva dita lunghe e agili che correvano sulle corde del violino a una velocità incredibile.",
            "Quando suonava, il pubblico non credeva alle proprie orecchie. Riusciva a suonare brani interi su una corda sola, e se durante il concerto una corda si rompeva, continuava sulle altre come se niente fosse. C'era chi diceva che avesse fatto un patto con il diavolo: per questo lo chiamavano «il violinista del diavolo». In realtà il suo segreto era il talento, insieme a tantissime ore di studio.",
            "Paganini fu uno dei primi virtuosi: musicisti capaci di suonare cose difficilissime, che il pubblico andava ad ascoltare come oggi si va a vedere un campione."
          ],
          cards: [
            { img: "paganini", rows: [["Nome", "Niccolò Paganini"], ["Nato", "1782, a Genova"], ["Morto", "1840, a Nizza"], ["Mestiere", "violinista e compositore"], ["Famoso per", "una bravura incredibile e i 24 Capricci per violino solo"]] }
          ],
          listen: [
            { title: "Il Capriccio numero 24", text: "Una melodia breve viene ripetuta e trasformata con trucchi sempre più difficili: il violino sembra fare magie!", file: "asc_6_3_paganini.mp3" }
          ],
          know: "Il violino preferito di Paganini, che lui chiamava «il Cannone» per il suo suono potente, è conservato a Genova. Ogni tanto lo suonano i giovani violinisti che vincono un concorso dedicato a lui."
        },
        {
          id: "6.4", title: "L'opera italiana: Rossini e Verdi",
          img: "cap6_04_opera_italiana", alt: "Un grande teatro d'opera pieno di pubblico entusiasta; sul palco, ambientato nell'antico Egitto, un grande coro, e il compositore si inchina.",
          body: [
            "Nell'Ottocento in Italia l'opera era amatissima. In ogni città c'era un teatro, e il pubblico conosceva a memoria le arie più belle delle opere famose e le canticchiava per strada.",
            "Gioachino Rossini, nato a Pesaro, scriveva opere piene di allegria. La più famosa è «Il barbiere di Siviglia». Nelle sue musiche le voci corrono, saltano e fanno acrobazie, e l'orchestra cresce piano piano fino a diventare fortissima.",
            "Giuseppe Verdi, nato in un piccolo paese vicino a Busseto, scrisse opere piene di passione: «Rigoletto», «La traviata» e «Aida», ambientata nell'antico Egitto. Nella sua opera «Nabucco» il coro degli Ebrei, lontani dalla loro patria, canta «Va', pensiero» e gli italiani di allora, che sognavano un'Italia unita, lo sentirono come un canto dedicato a loro."
          ],
          cards: [
            { img: "rossini", rows: [["Nome", "Gioachino Rossini"], ["Nato", "1792, a Pesaro"], ["Morto", "1868, vicino a Parigi"], ["Mestiere", "compositore"], ["Famoso per", "«Il barbiere di Siviglia» e «Guglielmo Tell»"]] },
            { img: "verdi", rows: [["Nome", "Giuseppe Verdi"], ["Nato", "1813, a Le Roncole, vicino a Busseto"], ["Morto", "1901, a Milano"], ["Mestiere", "compositore"], ["Famoso per", "«Nabucco», «Rigoletto», «La traviata» e «Aida»"]] }
          ],
          listen: [
            { title: "Il finale dell'ouverture del «Guglielmo Tell» di Rossini", text: "È una cavalcata velocissima: senti i cavalli che galoppano?", file: "asc_6_4_rossini_tell.mp3" },
            { title: "«Va', pensiero» dal «Nabucco» di Verdi", text: "Un coro dolce e malinconico, che ancora oggi molti italiani conoscono a memoria.", file: "asc_6_5_verdi_pensiero.mp3" }
          ],
          know: "Rossini a trentasette anni smise di scrivere opere e si dedicò a un'altra grande passione: la cucina! Ancora oggi alcuni piatti portano il suo nome."
        },
        {
          id: "6.5", title: "Musica che racconta storie",
          img: "cap6_05_carnevale_animali", alt: "Sul palco, fra due pianoforti, sfilano un leone con la corona, un elefante, i canguri, una tartaruga, un cigno e un acquario con i pesci.",
          body: [
            "Nel Romanticismo molti compositori vollero raccontare storie e descrivere immagini usando solo i suoni, senza parole. Questa si chiama musica a programma: il titolo ci dice che cosa immaginare, e la musica fa il resto.",
            "Il francese Camille Saint-Saëns scrisse «Il carnevale degli animali»: una sfilata di animali fatti di musica. Il leone ruggisce con i pianoforti, l'elefante balla pesante con il contrabbasso, i canguri saltellano, i pesci nuotano nell'acquario e il cigno scivola sull'acqua con il violoncello.",
            "Il norvegese Edvard Grieg descrisse la grotta dei troll, i giganti delle montagne. Il russo Modest Musorgskij trasformò in musica i quadri di un amico pittore: uno di questi mostra dei pulcini che ballano ancora mezzi chiusi nel guscio."
          ],
          listen: [
            { title: "«Marcia reale del leone» di Saint-Saëns", text: "Ascolta i pianoforti che imitano i ruggiti.", file: "asc_6_6_saint_saens_leone.mp3" },
            { title: "«Nell'antro del re della montagna» di Grieg", text: "La stessa melodia ritorna sempre più forte e più veloce, come i troll che inseguono qualcuno.", file: "asc_6_8_grieg.mp3" },
            { title: "«Il cigno» di Saint-Saëns", text: "Il violoncello scivola come un cigno sull'acqua.", file: "asc_6_7_saint_saens_cigno.mp3", optional: true },
            { title: "«Balletto dei pulcini nei loro gusci» di Musorgskij", text: "Pulcini che zampettano appena usciti dall'uovo.", file: "asc_6_9_musorgskij.mp3", optional: true }
          ],
          know: "Saint-Saëns scrisse «Il carnevale degli animali» per scherzo, per divertire gli amici, e non volle che fosse pubblicato finché era vivo. Fece un'eccezione solo per «Il cigno»."
        },
        {
          id: "6.6", title: "Il balletto: Čajkovskij",
          img: "cap6_06_schiaccianoci", alt: "Sul palco una bambina stringe lo schiaccianoci accanto all'albero di Natale, mentre la fata confetto e i fiocchi di neve danzano.",
          body: [
            "Nel balletto la storia non si racconta con le parole e nemmeno con il canto, ma con la danza e la musica. Le ballerine danzano sulle punte dei piedi, i ballerini saltano e volteggiano, e ogni gesto racconta qualcosa.",
            "Il russo Pëtr Il'ič Čajkovskij scrisse le musiche dei balletti più famosi del mondo: «Il lago dei cigni», «La bella addormentata» e «Lo schiaccianoci».",
            "Lo schiaccianoci è una fiaba di Natale. Una bambina riceve in regalo uno schiaccianoci a forma di soldatino. Di notte i giocattoli si animano, lo schiaccianoci combatte contro un esercito di topi e poi accompagna la bambina in un viaggio magico, tra fiocchi di neve danzanti, fino al regno dei dolci, dove regna la fata confetto."
          ],
          cards: [
            { img: "cajkovskij", rows: [["Nome", "Pëtr Il'ič Čajkovskij"], ["Nato", "1840, a Votkinsk, in Russia"], ["Morto", "1893, a San Pietroburgo"], ["Mestiere", "compositore"], ["Famoso per", "i balletti «Il lago dei cigni», «La bella addormentata» e «Lo schiaccianoci»"]] }
          ],
          listen: [
            { title: "«Danza della fata confetto»", text: "Ascolta il suono magico della celesta: sembra fatto di campanellini di cristallo.", file: "asc_6_10_cajkovskij.mp3" }
          ],
          know: "La celesta era uno strumento nuovissimo, inventato da poco a Parigi. Čajkovskij se ne innamorò e se la fece spedire in Russia in gran segreto, perché nessun altro compositore la usasse prima di lui!"
        }
      ],
      summary: [
        "Nel Romanticismo, l'Ottocento, la musica esprime sentimenti, sogni, leggende e l'amore per la natura e per la patria.",
        "Schubert racconta storie nei Lieder; Chopin è il poeta del pianoforte.",
        "Paganini è un virtuoso del violino così bravo da sembrare magico.",
        "In Italia trionfa l'Opera, con Rossini e Verdi.",
        "Con la musica a programma e il balletto, la musica racconta storie anche senza parole."
      ],
      quiz: [
        { q: "Che cos'è un Lied?", a: ["una canzone per voce e pianoforte", "una danza polacca", "un violino tedesco"] },
        { q: "In quale città visse Chopin dopo aver lasciato la Polonia?", a: ["Parigi", "Vienna", "Genova"] },
        { q: "Perché Paganini veniva chiamato «il violinista del diavolo»?", a: ["perché era così bravo che sembrava diabolico", "perché suonava solo di notte", "perché aveva un violino rosso"] },
        { q: "Quale coro di Verdi gli italiani sentivano come il loro canto?", a: ["«Va', pensiero»", "«Hallelujah»", "«Inno alla gioia»"] },
        { q: "Quale strumento fa il suono magico della fata confetto?", a: ["la celesta", "l'arpa", "il flauto"] }
      ],
      game: "Gioco di fantasia: ascolta «Il carnevale degli animali» a occhi chiusi e prova a muoverti come l'animale che senti: il leone, l'elefante, il canguro…",
      words: [
        ["Romanticismo", "il periodo dell'Ottocento in cui la musica esprime sentimenti, sogni e leggende."],
        ["Lied", "canzone tedesca per voce e pianoforte su una poesia (al plurale: Lieder)."],
        ["Virtuoso", "un musicista capace di suonare musiche difficilissime con grande bravura."],
        ["Melodramma", "un altro nome dell'opera, usato soprattutto per quella italiana dell'Ottocento."],
        ["Musica a programma", "musica che racconta una storia o descrive un'immagine senza parole."],
        ["Balletto", "uno spettacolo in cui la storia si racconta con la danza e la musica."]
      ]
    },

    /* ===================== CAPITOLO 7 ===================== */
    {
      n: 7,
      title: "Le avanguardie musicali del primo Novecento",
      subtitle: "Nuovi suoni per un mondo nuovo",
      img: "cap7_00_apertura",
      alt: "Parigi al tramonto, all'inizio del Novecento: una famiglia ascolta il grammofono al tavolino di un caffè; sullo sfondo la Torre Eiffel, il tram, un'automobile e un biplano.",
      intro: [
        "È l'inizio del Novecento e il mondo corre veloce. Per le strade passano le prime automobili e i tram elettrici, nel cielo volano i primi aeroplani, al cinema si vedono i primi film. E con il grammofono la musica si può ascoltare a casa, ogni volta che si vuole.",
        "Anche i musicisti vogliono esplorare strade mai percorse. Inventano suoni nuovi, ritmi particolari e perfino strumenti fatti per suonare i rumori. Li chiamiamo musicisti d'avanguardia, come i soldati che marciano davanti a tutti per scoprire il cammino."
      ],
      ottavio: "Senti questo suono un po' gracchiante? È un grammofono: la musica ora esce da una tromba di metallo!",
      sections: [
        {
          id: "7.1", title: "Musica come un dipinto: Debussy e Ravel",
          img: "cap7_01_debussy", alt: "Debussy suona il pianoforte in una stanza di Parigi decorata con ventagli e stampe giapponesi; dalla finestra aperta si vede la luna che illumina la Senna.",
          body: [
            "In Francia alcuni pittori, come Claude Monet, dipingevano con piccole pennellate di colore per catturare un'impressione: la luce del sole sull'acqua, la nebbia del mattino. Per questo furono chiamati impressionisti.",
            "Il compositore Claude Debussy fece qualcosa di simile con i suoni. La sua musica non racconta una storia precisa: sembra piuttosto un quadro fatto di luci, riflessi e colori che cambiano. Ascoltandola si possono immaginare il mare, le nuvole, la luna.",
            "Anche Maurice Ravel, un altro grande compositore francese, era un mago dei colori dell'orchestra. Nel suo «Boléro» il tamburo ripete sempre lo stesso ritmo dall'inizio alla fine, mentre la melodia passa da uno strumento all'altro e la musica diventa sempre più forte."
          ],
          cards: [
            { img: "debussy", rows: [["Nome", "Claude Debussy"], ["Nato", "1862, vicino a Parigi"], ["Morto", "1918, a Parigi"], ["Mestiere", "compositore e pianista"], ["Famoso per", "«Chiaro di luna», «Il mare» e tanta musica per pianoforte"]] }
          ],
          listen: [
            { title: "«Chiaro di luna» di Debussy", text: "Chiudi gli occhi: che cosa vedi?", file: "asc_7_1_debussy.mp3" },
            { title: "Il «Boléro» di Ravel", text: "Ascolta il tamburo che non si ferma mai e prova a riconoscere gli strumenti che entrano uno dopo l'altro.", file: "asc_7_2_ravel_bolero.mp3" }
          ],
          know: "Nel 1889, a una grande esposizione a Parigi, Debussy ascoltò un'orchestra dell'isola di Giava, in Indonesia, con gong e metallofoni. Ne rimase incantato, e quei suoni lo ispirarono per tutta la vita."
        },
        {
          id: "7.2", title: "Lo scandalo della Sagra della primavera",
          img: "cap7_02_sagra", alt: "Parigi, 1913: sul palco i ballerini in costumi russi pestano i piedi, mentre in platea il pubblico protesta, grida e agita i cappelli.",
          body: [
            "La sera del 29 maggio 1913, in un elegante teatro di Parigi, andò in scena un nuovo balletto: «La sagra della primavera» del compositore russo Igor Stravinskij. Raccontava gli antichi riti con cui i popoli della Russia di tanto tempo fa salutavano l'arrivo della primavera.",
            "Appena cominciò la musica, il pubblico rimase a bocca aperta. Gli accordi battevano forte e irregolari, come piedi che pestano la terra; i ballerini non danzavano sulle punte, ma saltavano a piedi uniti e si muovevano in modo strano. In sala scoppiò il finimondo: c'era chi fischiava, chi applaudiva, chi litigava con il vicino. Il rumore era così forte che i ballerini non riuscivano più a sentire l'orchestra!",
            "Oggi «La sagra della primavera» è considerata uno dei capolavori del Novecento."
          ],
          listen: [
            { title: "«Gli àuguri primaverili»", text: "Ascolta gli accordi che martellano: prova a battere le mani sugli accenti forti. Riesci a prevedere quando arrivano?", file: "asc_7_3_stravinskij.mp3" }
          ],
          ottavio: "Ogni cosa nuova all'inizio può sembrare strana. A volte basta ascoltarla attentamente e senza fretta."
        },
        {
          id: "7.3", title: "Il Futurismo e l'arte dei rumori",
          img: "cap7_03_futurismo", alt: "Nel suo laboratorio Luigi Russolo mostra ai bambini gli intonarumori, scatole colorate con grandi trombe: i bambini girano le manovelle e lui si tappa le orecchie ridendo.",
          body: [
            "Nel 1909 un gruppo di artisti italiani fondò il Futurismo. I futuristi amavano tutto ciò che era moderno: la velocità, le macchine, le fabbriche, le grandi città piene di vita e di rumore.",
            "Il pittore e musicista Luigi Russolo pensò che anche i rumori potessero diventare musica: il rombo dei motori, il fischio dei treni, il ronzio delle fabbriche. Nel 1913 scrisse un manifesto intitolato «L'arte dei rumori» e costruì degli strumenti nuovissimi, gli intonarumori. Erano scatole di legno con una grande tromba: girando una manovella o muovendo una leva si producevano rumori diversi, che ronzavano, crepitavano, scoppiettavano o ululavano.",
            "I suoi concerti fecero scandalo, ma le sue idee furono importantissime per la musica che verrà dopo."
          ],
          cards: [
            { img: "russolo", rows: [["Nome", "Luigi Russolo"], ["Nato", "1885, a Portogruaro, vicino a Venezia"], ["Morto", "1947, a Laveno, sul Lago Maggiore"], ["Mestiere", "pittore, musicista e inventore"], ["Famoso per", "gli intonarumori e il manifesto «L'arte dei rumori»"]] }
          ],
          listen: [
            { title: "I suoni degli intonarumori", text: "Gli strumenti di Russolo sono andati perduti, ma oggi ne sono state costruite delle copie. Ascolta: ti ricordano i rumori di una città?", file: "asc_7_4_russolo.mp3" }
          ],
          ottavio: "Fai una prova: stai in silenzio per un minuto e ascolta i rumori intorno a te. Un'automobile, il frigorifero, la pioggia… Quale ti sembra più musicale?"
        },
        {
          id: "7.4", title: "Dodici note tutte uguali: Schönberg",
          img: "cap7_04_schoenberg", alt: "Nel suo studio pieno di quadri Schönberg dispone con i bambini dodici gettoni colorati in cerchio, come in un gioco.",
          body: [
            "In quasi tutta la musica che abbiamo ascoltato finora c'è una nota «capo», la tonica: le altre note le girano intorno e alla fine tornano da lei, come a casa. È per questo che un brano musicale, quando finisce, ci sembra davvero finito.",
            "Il compositore viennese Arnold Schönberg ebbe un'idea rivoluzionaria: e se tutte le note fossero importanti allo stesso modo? Nell'ottava ci sono dodici note diverse, contando i tasti bianchi e neri del pianoforte. Schönberg le mise in fila in un ordine scelto da lui, e stabilì che nessuna nota potesse tornare prima che avessero suonato anche tutte le altre. Come in un gioco in cui ognuno aspetta il proprio turno. Questo metodo si chiama dodecafonia.",
            "La sua musica può sembrare strana, a volte misteriosa, perché non sappiamo mai dove andrà a finire."
          ],
          cards: [
            { img: "schoenberg", rows: [["Nome", "Arnold Schönberg"], ["Nato", "1874, a Vienna"], ["Morto", "1951, a Los Angeles, negli Stati Uniti"], ["Mestiere", "compositore, insegnante e pittore"], ["Famoso per", "la dodecafonia e «Pierrot lunaire»"]] }
          ],
          listen: [
            { title: "«Ebbro di luna» dal «Pierrot lunaire»", text: "Pierrot è un personaggio malinconico, incantato dalla luce della luna. Il brano è di qualche anno prima della dodecafonia, ma anche qui nessuna nota fa da «capo». Ascolta la voce: non canta e non parla, ma fa qualcosa a metà strada fra le due cose.", file: "asc_7_5_schoenberg.mp3" }
          ],
          know: "Schönberg era anche un pittore, e dipingeva quadri pieni di colori e di volti misteriosi. Era amico di Vasilij Kandinskij, uno dei primi pittori astratti."
        },
        {
          id: "7.5", title: "Musica dai villaggi e dall'America: Bartók e Gershwin",
          img: "cap7_05_bartok", alt: "In un villaggio ungherese Bartók registra con il fonografo il canto di un'anziana contadina, mentre i bambini ballano e un violinista suona.",
          body: [
            "Il compositore ungherese Béla Bartók aveva una grande curiosità: voleva conoscere le canzoni che la gente dei villaggi cantava da secoli, senza averle mai scritte. Insieme all'amico Zoltán Kodály girò a lungo per le campagne con un fonografo, un apparecchio che registrava i suoni su cilindri di cera. Raccolse migliaia di canti e danze popolari, e i loro ritmi vivaci entrarono nella sua musica.",
            "Dall'altra parte dell'oceano, in America, stava nascendo il jazz: una musica piena di ritmo e di libertà, nata nelle comunità afroamericane del Sud degli Stati Uniti. Il giovane compositore di New York George Gershwin la portò nelle sale da concerto, mescolandola con l'orchestra sinfonica."
          ],
          cards: [
            { img: "bartok", rows: [["Nome", "Béla Bartók"], ["Nato", "1881, in Ungheria, in una città che oggi fa parte della Romania"], ["Morto", "1945, a New York"], ["Mestiere", "compositore, pianista e ricercatore di musiche popolari"], ["Famoso per", "la musica ispirata ai canti e alle danze dei villaggi"]] }
          ],
          listen: [
            { title: "«Rhapsody in Blue» di Gershwin", text: "All'inizio il clarinetto sale come una sirena: è il jazz che entra nella sala da concerto!", file: "asc_7_6_gershwin.mp3" },
            { title: "La prima delle «Danze popolari rumene» di Bartók", text: "Una musica nata dalle danze dei villaggi.", file: "asc_7_7_bartok.mp3", optional: true }
          ],
          know: "Quel famoso inizio della «Rhapsody in Blue» nacque per scherzo: durante una prova il clarinettista fece scivolare le note verso l'alto come una sirena. A Gershwin piacque così tanto che chiese di suonarlo sempre in quel modo!"
        },
        {
          id: "7.6", title: "Una fiaba in musica: Pierino e il lupo",
          img: "cap7_06_pierino", alt: "Nella neve Pierino con la corda, l'uccellino, l'anatra nello stagno, il gatto sullo steccato, il nonno e il lupo; intorno a ciascuno lo strumento che lo rappresenta.",
          body: [
            "Nel 1936 il compositore russo Sergej Prokof'ev scrisse una fiaba musicale per far conoscere ai bambini gli strumenti dell'orchestra: «Pierino e il lupo». Una voce racconta la storia e ogni personaggio è interpretato da uno o più strumenti diversi, con una sua melodia.",
            "Una mattina Pierino apre il cancello del giardino e va nel prato. Il nonno lo sgrida, perché nel bosco c'è il lupo. E infatti il lupo arriva! Ma Pierino, coraggioso e furbo, con l'aiuto dell'uccellino riesce a catturarlo con una corda. Alla fine arrivano i cacciatori, e tutti insieme accompagnano il lupo allo zoo in una grande parata."
          ],
          table: { head: ["Personaggio", "Strumento"], rows: [["Pierino", "gli archi"], ["l'uccellino", "il flauto"], ["l'anatra", "l'oboe"], ["il gatto", "il clarinetto"], ["il nonno", "il fagotto"], ["il lupo", "i corni"], ["i cacciatori", "i legni, con i colpi di timpani e grancassa"]] },
          listen: [
            { title: "La presentazione dei personaggi", text: "Ascolta ogni strumento: indovina chi è l'uccellino e chi è il lupo prima che la voce lo dica!", file: "asc_7_8_prokofiev.mp3" }
          ],
          know: "Il lupo, in un boccone, si è mangiato l'anatra intera. Ma se ascolti bene la fine della storia, la senti ancora fare _qua qua_ nella sua pancia!"
        }
      ],
      summary: [
        "All'inizio del Novecento il mondo cambia in fretta, e i musicisti d'avanguardia cercano suoni nuovi.",
        "Debussy e Ravel dipingono con i suoni, come i pittori impressionisti con i colori.",
        "«La sagra della primavera» di Stravinskij, con i suoi ritmi potenti, fa scandalo a Parigi nel 1913.",
        "Russolo e i futuristi trasformano i rumori in musica; Schönberg inventa la dodecafonia.",
        "Bartók raccoglie i canti dei villaggi, Gershwin porta il jazz nelle sale da concerto e Prokof'ev racconta una fiaba con l'orchestra."
      ],
      quiz: [
        { q: "Che cosa voleva fare Debussy con la sua musica?", a: ["dipingere luci e colori con i suoni", "imitare le macchine", "raccontare barzellette"] },
        { q: "Che cosa successe alla prima della «Sagra della primavera»?", a: ["il pubblico protestò e fece un gran baccano", "il teatro era vuoto", "i ballerini si addormentarono"] },
        { q: "Come si chiamano gli strumenti per i rumori inventati da Russolo?", a: ["intonarumori", "grammofoni", "fonografi"] },
        { q: "Quante sono le note della dodecafonia di Schönberg?", a: ["dodici", "sette", "cento"] },
        { q: "In «Pierino e il lupo», quale strumento fa l'uccellino?", a: ["il flauto", "il fagotto", "i corni"] }
      ],
      game: "Gioco di ascolto: ognuno sceglie un personaggio di «Pierino e il lupo». Poi riascoltate la fiaba: quando entra il vostro personaggio, alzatevi in piedi!",
      words: [
        ["Avanguardia", "artisti che sperimentano idee nuovissime, prima di tutti gli altri."],
        ["Impressionismo", "uno stile che cerca di catturare luci, colori e atmosfere."],
        ["Futurismo", "movimento artistico italiano che amava la velocità, le macchine e i rumori della città."],
        ["Dodecafonia", "un modo di comporre in cui le dodici note hanno tutte la stessa importanza."],
        ["Musica popolare", "le canzoni e le danze tramandate a voce, di generazione in generazione."],
        ["Jazz", "musica nata negli Stati Uniti, piena di ritmo e di improvvisazione."]
      ]
    },

    /* ===================== CAPITOLO 8 ===================== */
    {
      n: 8,
      title: "Le avanguardie musicali del secondo Novecento",
      subtitle: "Nastri, silenzi, metronomi e colonne sonore",
      img: "cap8_00_apertura",
      alt: "Uno studio di musica elettronica degli anni Sessanta: un uomo al banco pieno di manopole e schermi verdi, una donna sistema le bobine dei registratori, un bambino ascolta con le cuffie; fuori dalla finestra parte un razzo.",
      intro: [
        "Dopo la Seconda guerra mondiale arrivano invenzioni che cambiano la vita di tutti: il registratore a nastro, la televisione, i primi computer. Nel cielo partono i primi razzi verso lo spazio.",
        "I musicisti del secondo Novecento usano queste nuove tecnologie per inventare suoni mai sentiti prima. Ma sperimentano anche con il silenzio, con il caso, con la voce e con la ripetizione. E intanto la musica entra al cinema, nelle case e nelle orecchie di tutti."
      ],
      ottavio: "Mettiti le cuffie e allaccia le cinture: è l'ultima tappa del nostro viaggio!",
      sections: [
        {
          id: "8.1", title: "Suoni registrati: musica concreta ed elettronica",
          img: "cap8_01_elettronica", alt: "Lo Studio di Fonologia della RAI a Milano: due musicisti fra apparecchi pieni di manopole tagliano nastri con le forbici; due bambini guardano curiosi e fuori dalla finestra passa un treno.",
          body: [
            "Con i nuovi apparecchi per registrare, prima i dischi e poi i nastri, si poteva catturare qualsiasi suono: una porta che cigola, il rumore dell'acqua che gocciola, un treno che passa. Nel 1948, a Parigi, il francese Pierre Schaeffer registrò i rumori delle locomotive e li montò insieme per creare un brano musicale. Nacque così la musica concreta, fatta con suoni veri del mondo.",
            "Altri musicisti cominciarono a creare suoni completamente nuovi con apparecchi elettronici: è la musica elettronica. A Milano, nel 1955, Luciano Berio e Bruno Maderna fondarono lo Studio di Fonologia della RAI, uno dei laboratori più importanti del mondo.",
            "In questi studi i nastri si tagliavano con le forbici e si incollavano in un ordine nuovo. Si potevano far suonare al contrario, più veloci o più lenti: una voce poteva diventare un mostro o un topolino!"
          ],
          listen: [
            { title: "«Studio sui treni» di Pierre Schaeffer", text: "Senti i fischi, gli sbuffi e il ritmo delle ruote sui binari: è musica fatta dal rumore dei treni!", file: "asc_8_1_schaeffer.mp3" }
          ],
          know: "Gli apparecchi dello Studio di Fonologia di Milano oggi si possono vedere da vicino al Museo degli strumenti musicali del Castello Sforzesco.",
          ottavio: "Oggi con un telefono puoi registrare qualsiasi suono. Prova a registrare i rumori della cucina e a metterli in fila: hai creato la tua musica concreta!"
        },
        {
          id: "8.2", title: "John Cage e il silenzio che suona",
          img: "cap8_02_cage", alt: "In una stanza piena di libri e piante un compositore sistema viti e pezzetti di gomma fra le corde di un pianoforte a coda.",
          body: [
            "L'americano John Cage era un esploratore dei suoni. Un giorno gli serviva un'orchestra di percussioni, ma sul palco c'era posto solo per un pianoforte. Allora infilò fra le corde viti, bulloni, pezzetti di gomma e di carta. Il pianoforte cominciò a suonare come un insieme di tamburi, gong e campanelli: era nato il pianoforte preparato.",
            "Cage fece anche esperimenti ancora più sorprendenti. A volte sceglieva le note lanciando delle monete, lasciando decidere al caso. Nel suo brano più famoso, il pianista si siede al pianoforte e non suona nemmeno una nota per quattro minuti e trentatré secondi. Il pubblico allora sente i colpi di tosse, il vento che soffia fuori, il rumore delle sedie che vengono spostate. Per Cage anche quei suoni erano musica: il silenzio perfetto, diceva, non esiste."
          ],
          listen: [
            { title: "La Sonata numero 5 per pianoforte preparato", text: "Sembra un pianoforte? O una piccola orchestra di percussioni?", file: "asc_8_2_cage.mp3" }
          ],
          ottavio: "Proviamo il brano di Cage in classe! Restate in silenzio per un minuto con gli occhi chiusi, poi scrivete tutti i suoni che avete sentito.",
          know: "Cage era un grande esperto di funghi. Nel 1959 partecipò a un famoso quiz della televisione italiana, «Lascia o raddoppia?», rispondendo a domande sui funghi… e vinse!"
        },
        {
          id: "8.3", title: "Cento metronomi: Ligeti",
          img: "cap8_03_metronomi", alt: "Un palco coperto di metronomi di legno che ticchettano davanti a un cielo stellato; i bambini ascoltano seduti, a bocca aperta.",
          body: [
            "Il metronomo è un piccolo apparecchio che i musicisti usano per tenere il tempo: un'asticella oscilla e fa tic-tac, più veloce o più lento a seconda di come lo si regola.",
            "Nel 1962 il compositore ungherese György Ligeti scrisse un brano molto speciale: un «poema sinfonico» per cento metronomi. Sul palco i metronomi vengono caricati, regolati a velocità diverse e fatti partire tutti insieme. All'inizio si sente una pioggia fittissima di tic-tac. Poi, a uno a uno, i metronomi si scaricano e si fermano. Il ticchettio diventa sempre più rado, finché ne resta uno solo… e quando si ferma anche lui, il brano è finito."
          ],
          listen: [
            { title: "«Poema sinfonico per cento metronomi»", text: "Ascolta come i ritmi si mescolano e poi, piano piano, si spengono. Chi sarà l'ultimo?", file: "asc_8_3_ligeti.mp3" }
          ],
          know: "Altre musiche di Ligeti, misteriose e piene di voci, sono state usate in un famoso film di fantascienza, «2001: Odissea nello spazio».",
          ottavio: "Anche voi potete fare il brano di Ligeti: ognuno apre un metronomo sul tablet o sul telefono, sceglie una velocità diversa e lo fa partire insieme agli altri. Poi, uno alla volta, si spengono!"
        },
        {
          id: "8.4", title: "La voce che gioca: Cathy Berberian",
          img: "cap8_04_voce", alt: "Una cantante con un vestito arcobaleno canta sul palco; dalla sua bocca escono nuvolette colorate che diventano animali, gocce di pioggia e campanelli, e il pubblico ride.",
          body: [
            "Cathy Berberian era una cantante americana che visse a lungo in Italia. Aveva una voce incredibile: sapeva cantare l'Opera, le canzoni popolari, i Beatles… e sapeva fare con la voce qualunque suono, dai versi degli animali ai rumori dei cartoni animati.",
            "Molti compositori scrissero musica apposta per lei, tra cui Luciano Berio, che per molti anni fu suo marito, un compositore che abbiamo già conosciuto quando abbiamo parlato dello Studio di Fonologia di Milano. Ma anche Cathy scriveva musica. Il suo brano più divertente si chiama «Stripsody»: è fatto tutto con i suoni dei fumetti, come BOING, SPLASH, ZZZ, BANG! Lo spartito è disegnato proprio come un fumetto, e la voce lo «leggeva» ad alta voce."
          ],
          listen: [
            { title: "«Stripsody»", text: "Quanti suoni dei fumetti riesci a riconoscere?", file: "asc_8_4_berberian.mp3" }
          ],
          ottavio: "Disegnate un vostro fumetto fatto solo di suoni: un'onda, un tuono, un gatto, un'esplosione di bolle. Poi «leggetelo» con la voce, come uno spartito!"
        },
        {
          id: "8.5", title: "Ripetere per cambiare: il minimalismo",
          img: "cap8_05_minimalismo", alt: "In una classe i bambini, seduti in due file uno di fronte all'altro, battono le mani a ritmo; nell'aria fluttuano disegni colorati che si ripetono come in un caleidoscopio.",
          body: [
            "Negli anni Sessanta, negli Stati Uniti, alcuni compositori come Steve Reich, Philip Glass e Terry Riley scelsero una strada nuova: usare pochissimi elementi. Un breve motivo viene ripetuto tantissime volte, e a poco a poco cambia: si sposta, si allunga, si sovrappone a un altro. Questo modo di scrivere musica si chiama Minimalismo.",
            "Ascoltarla è un po' come guardare in un caleidoscopio: sembra tutto uguale, ma a ogni giro compare un disegno nuovo. La ripetizione ci fa entrare dentro la musica, come in un incantesimo.",
            "In «Clapping Music», cioè «Musica per battiti di mani», di Steve Reich, due persone battono le mani con lo stesso ritmo. Poi una delle due si sposta di un colpo, poi di un altro, e i due ritmi si incastrano in modi sempre diversi, finché tornano di nuovo uguali."
          ],
          listen: [
            { title: "«Clapping Music» di Steve Reich", text: "Solo mani, nient'altro. Riesci a seguire i due ritmi?", file: "asc_8_5_reich.mp3" },
            { title: "«Spiegel im Spiegel» dell'estone Arvo Pärt", text: "Il titolo vuol dire «Specchio nello specchio»: poche note e tanta calma.", file: "asc_8_6_part.mp3", optional: true }
          ],
          ottavio: "Ecco il ritmo di «Clapping Music»: tre battiti, pausa, due battiti, pausa, un battito, pausa, due battiti, pausa. Imparatelo tutti insieme, poi provate a dividervi in due gruppi!"
        },
        {
          id: "8.6", title: "Musica per il cinema, e la musica di domani",
          img: "cap8_06_cinema", alt: "In un grande studio di registrazione un anziano compositore con gli occhiali dirige l'orchestra, mentre sullo schermo i cowboy galoppano nel deserto; in fondo i bambini guardano mangiando i popcorn.",
          body: [
            "I primi film erano muti: nella sala un pianista o una piccola orchestra suonava dal vivo mentre scorrevano le immagini. Poi arrivò il cinema sonoro, e con esso un nuovo mestiere: il compositore di colonne sonore. La musica di un film ci fa provare paura, allegria o commozione, a volte ancora prima che succeda qualcosa.",
            "Uno dei più grandi compositori per il cinema è stato l'italiano Ennio Morricone. Scrisse la musica per più di quattrocento film, e le sue melodie sono conosciute in tutto il mondo. Nei film western del regista Sergio Leone mescolava l'orchestra con fischi, voci, chitarre elettriche e versi che sembrano quelli dei coyote.",
            "E domani? Oggi la musica si fa anche con il computer, si ascolta sul telefono e viaggia in un attimo da una parte all'altra del pianeta. Chiunque può registrare, comporre e condividere la propria musica. Chissà quali suoni inventeranno i musicisti di domani… magari proprio tu!"
          ],
          listen: [
            { title: "Il tema del film «Il buono, il brutto, il cattivo» di Ennio Morricone", text: "Fischi, voci e chitarra elettrica: è il suono del Far West.", file: "asc_8_7_morricone.mp3" }
          ],
          know: "Ennio Morricone e Sergio Leone erano compagni di classe alle elementari! Si ritrovarono da grandi e insieme fecero alcuni dei film più famosi della storia del cinema."
        }
      ],
      summary: [
        "Nel secondo Novecento i musicisti usano registratori e apparecchi elettronici per creare suoni nuovi: nascono la musica concreta e la musica elettronica.",
        "John Cage prepara il pianoforte con viti e gomme e ci fa ascoltare il silenzio.",
        "Ligeti scrive un brano per cento metronomi; Cathy Berberian gioca con la voce e con i suoni dei fumetti.",
        "I minimalisti ripetono brevi melodie che cambiano a poco a poco.",
        "La musica per il cinema, come quella di Ennio Morricone, arriva in tutto il mondo; oggi chiunque può creare musica."
      ],
      quiz: [
        { q: "Con quali suoni Pierre Schaeffer creò il suo «Studio sui treni»?", a: ["con i rumori registrati delle locomotive", "con un'orchestra", "con un pianoforte"] },
        { q: "Che cosa mise John Cage fra le corde del pianoforte?", a: ["viti, bulloni e pezzetti di gomma", "fiori e foglie", "caramelle"] },
        { q: "Quando finisce il brano di Ligeti per cento metronomi?", a: ["quando si ferma l'ultimo metronomo", "dopo un minuto esatto", "quando il direttore lo decide"] },
        { q: "Con quali suoni è fatto «Stripsody» di Cathy Berberian?", a: ["con i suoni dei fumetti", "con i rumori del mare", "con il canto degli uccelli"] },
        { q: "Per che cosa è famoso Ennio Morricone?", a: ["per la musica dei film", "per le sinfonie", "per i balletti"] }
      ],
      game: "Gioco di ritmo: in due gruppi, provate «Clapping Music» come ha spiegato Ottavio. All'inizio battete insieme, poi un gruppo comincia un colpo dopo. Che effetto fa?",
      words: [
        ["Musica concreta", "musica fatta con suoni e rumori registrati dal mondo reale."],
        ["Musica elettronica", "musica con suoni creati da apparecchi elettronici."],
        ["Pianoforte preparato", "un pianoforte con oggetti fra le corde, che cambiano il suono."],
        ["Metronomo", "apparecchio che segna il tempo con un tic-tac regolare."],
        ["Minimalismo", "musica fatta di brevi melodie ripetute che cambiano a poco a poco."],
        ["Colonna sonora", "la musica scritta per accompagnare un film."]
      ]
    }
  ],

  finale: {
    title: "Tocca a te!",
    img: "base_12_finale",
    alt: "Bambini di oggi suonano insieme in un parco: chi con il tablet, chi con la chitarra, la batteria, il flauto o la voce; sopra di loro volano strumenti di tutte le epoche.",
    body: [
      "Che viaggio! Siamo partiti da una grotta, con un flauto d'osso e un tamburo fatto con un tronco. Abbiamo ascoltato i monaci del Medioevo, ballato alle feste del Rinascimento, applaudito Mozart bambino e Paganini, e siamo arrivati fino ai suoni elettronici e alla musica dei film.",
      "In tutto questo tempo la musica è cambiata moltissimo. Ma una cosa è rimasta uguale: le persone hanno sempre avuto bisogno di ascoltare, cantare, suonare e ballare insieme, per festeggiare, per pregare, per raccontare storie e per sentirsi vicine.",
      "Adesso la storia della musica continua con te. Canta, suona, inventa ritmi, ascolta i suoni intorno a te con le orecchie ben aperte. Chissà, forse un giorno in un libro come questo ci sarà anche il tuo nome!"
    ],
    ottavio: "Grazie per avermi accompagnato in questo viaggio. Ci vediamo alla prossima nota!"
  }
};

/* Pronuncia per la voce virtuale: a sinistra come è scritto, a destra come deve leggerlo la voce.
   Si può modificare liberamente; vale solo per la lettura ad alta voce. */
window.PRONUNCIA = {
  "Händel": "Hendel",
  "Haydn": "Aidn",
  "Esterházy": "Èsterasi",
  "Schubertiadi": "Sciubertiàdi",
  "Schubert": "Sciùbert",
  "Lieder": "Lìder",
  "Lied": "Lid",
  "Schönberg": "Sciònberg",
  "Čajkovskij": "Ciaicòvschi",
  "Pëtr Il'ič": "Piòtr Ilìc",
  "Prokof'ev": "Prokòfiev",
  "Stravinskij": "Stravìnschi",
  "Musorgskij": "Mùsorgschi",
  "Kandinskij": "Kandìnschi",
  "Saint-Saëns": "Sen Sans",
  "Debussy": "Debüssì",
  "Chopin": "Sciopèn",
  "Fryderyk": "Frìderik",
  "Ravel": "Ravèl",
  "Boléro": "Bolerò",
  "Gershwin": "Ghèrsciuin",
  "Rhapsody in Blue": "Rèpsodi in blu",
  "Bartók": "Bàrtok",
  "Béla": "Bèla",
  "Kodály": "Kòdai",
  "Zoltán": "Zòltan",
  "Ligeti": "Lìgheti",
  "György": "Giòrgi",
  "Cathy": "Kèti",
  "Berberian": "Berberiàn",
  "Stripsody": "Strìpsodi",
  "Beatles": "Bìtols",
  "John Cage": "Gion Chèig",
  "Cage": "Chèig",
  "Steve Reich": "Stiv Ràisc",
  "Reich": "Ràisc",
  "Philip Glass": "Fìlip Glas",
  "Terry Riley": "Tèrri Ràili",
  "Clapping Music": "Clèpping Miùsic",
  "Pärt": "Pert",
  "Spiegel im Spiegel": "Spìghel im Spìghel",
  "Pierre Schaeffer": "Piér Sceffèr",
  "Schaeffer": "Sceffèr",
  "Josquin Desprez": "Josquèn Deprè",
  "Clément Janequin": "Clemàn Gianchèn",
  "Tielman Susato": "Tìlman Susàto",
  "La Mourisque": "La Murìsc",
  "Notre-Dame": "Notr Dam",
  "Eine kleine Nachtmusik": "Àine klàine nàctmusik",
  "Ah, vous dirai-je, maman": "A, vu dirèsg, mamàn",
  "Hallelujah": "Alleluia",
  "Hornpipe": "Hòrnpaip",
  "Badinerie": "Badinerì",
  "Pierrot lunaire": "Pierrò lunèr",
  "Pierrot": "Pierrò",
  "Claude Monet": "Clod Monè",
  "Claude": "Clod",
  "Maurice": "Morìs",
  "Camille": "Camìi",
  "Edvard Grieg": "Èdvard Grig",
  "Johann Sebastian": "Iòhan Sebàstian",
  "Georg Friedrich": "Ghèorg Frìdric",
  "Franz Joseph": "Franz Iòsef",
  "Ludwig": "Lùdvig",
  "Eisenach": "Àisenac",
  "Rohrau": "Roràu",
  "Hathor": "Àtor",
  "Seikilos": "Sèikilos",
  "Sancte Iohannes": "Sancte Ioànnes",
  "Arnold": "Àrnold",
  "Igor": "Ìgor",
  "Sergej": "Serghèi",
  "Vasilij": "Vasìli",
  "Bingen": "Bìnghen",
  "Leopold": "Lèopold",
  "Nannerl": "Nànnerl",
  "Far West": "Far uèst",
  "BOING": "boing",
  "ZZZ": "zzzz"
};
