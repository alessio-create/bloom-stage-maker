import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/funnel/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — EuroMedPartner" },
      { name: "description", content: "Privacy Policy di euromedpartner.it — informativa sul trattamento dei dati personali ai sensi del Regolamento (UE) 2016/679." },
      { name: "robots", content: "noindex,follow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>Privacy Policy di <strong>euromedpartner.it</strong></p>
      <p>Questo Sito Web raccoglie alcuni Dati Personali dei propri Utenti. Questo documento può essere stampato utilizzando il comando di stampa presente nelle impostazioni di qualsiasi browser.</p>

      <div className="legal-meta">
        <p><strong>Titolare del Trattamento dei Dati</strong></p>
        <p>EUROMEDPARTNER LA BOUTIQUE DI FINANZA AGEVOLATA S.R.L.<br />P.IVA 07322520821</p>
        <p><strong>Indirizzo email del Titolare:</strong> <a href="mailto:info@euromedpartner.it">info@euromedpartner.it</a></p>
      </div>

      <h2>Tipologie di Dati raccolti</h2>
      <p>Fra i Dati Personali raccolti da questo Sito Web, in modo autonomo o tramite terze parti, ci sono: Strumento di Tracciamento; Dati di utilizzo; email; nome; cognome; data di nascita; numero di telefono.</p>
      <p>Dettagli completi su ciascuna tipologia di dati raccolti sono forniti nelle sezioni dedicate di questa privacy policy o mediante specifici testi informativi visualizzati prima della raccolta dei dati stessi.</p>
      <p>I Dati Personali possono essere liberamente forniti dall'Utente o, nel caso di Dati di Utilizzo, raccolti automaticamente durante l'uso di questo Sito Web.</p>
      <p>Se non diversamente specificato, tutti i Dati richiesti da questo Sito Web sono obbligatori. Se l'Utente rifiuta di comunicarli, potrebbe essere impossibile per questo Sito Web fornire il Servizio. Nei casi in cui questo Sito Web indichi alcuni Dati come facoltativi, gli Utenti sono liberi di astenersi dal comunicare tali Dati, senza che ciò abbia alcuna conseguenza sulla disponibilità del Servizio o sulla sua operatività.</p>
      <p>Gli Utenti che dovessero avere dubbi su quali Dati siano obbligatori, sono incoraggiati a contattare il Titolare.</p>
      <p>L'eventuale utilizzo di Cookie – o di altri strumenti di tracciamento – da parte di questo Sito Web o dei titolari dei servizi terzi utilizzati da questo Sito Web, ove non diversamente precisato, ha la finalità di fornire il Servizio richiesto dall'Utente, oltre alle ulteriori finalità descritte nel presente documento e nella Cookie Policy, se disponibile.</p>
      <p>L'Utente si assume la responsabilità dei Dati Personali di terzi ottenuti, pubblicati o condivisi mediante questo Sito Web e garantisce di avere il diritto di comunicarli o diffonderli, liberando il Titolare da qualsiasi responsabilità verso terzi.</p>

      <h2>Modalità e luogo del trattamento dei Dati raccolti</h2>
      <h3>Modalità di trattamento</h3>
      <p>Il Titolare adotta le opportune misure di sicurezza volte ad impedire l'accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali.</p>
      <p>Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate. Oltre al Titolare, in alcuni casi, potrebbero avere accesso ai Dati altri soggetti coinvolti nell'organizzazione di questo Sito Web (personale amministrativo, commerciale, marketing, legali, amministratori di sistema) ovvero soggetti esterni (come fornitori di servizi tecnici terzi, corrieri postali, hosting provider, società informatiche, agenzie di comunicazione) nominati anche, se necessario, Responsabili del Trattamento da parte del Titolare. L'elenco aggiornato dei Responsabili potrà sempre essere richiesto al Titolare del Trattamento.</p>

      <h3>Base giuridica del trattamento</h3>
      <p>Il Titolare tratta Dati Personali relativi all'Utente in caso sussista una delle seguenti condizioni:</p>
      <ul>
        <li>l'Utente ha prestato il consenso per una o più finalità specifiche;</li>
        <li>il trattamento è necessario all'esecuzione di un contratto con l'Utente e/o all'esecuzione di misure precontrattuali;</li>
        <li>il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare;</li>
        <li>il trattamento è necessario per l'esecuzione di un compito di interesse pubblico o per l'esercizio di pubblici poteri di cui è investito il Titolare;</li>
        <li>il trattamento è necessario per il perseguimento del legittimo interesse del Titolare o di terzi.</li>
      </ul>
      <p>È comunque sempre possibile richiedere al Titolare di chiarire la concreta base giuridica di ciascun trattamento ed in particolare di specificare se il trattamento sia basato sulla legge, previsto da un contratto o necessario per concludere un contratto.</p>

      <h3>Luogo</h3>
      <p>I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate. Per ulteriori informazioni, contatta il Titolare.</p>
      <p>I Dati Personali dell'Utente potrebbero essere trasferiti in un paese diverso da quello in cui l'Utente si trova. Per ottenere ulteriori informazioni sul luogo del trattamento l'Utente può fare riferimento alla sezione relativa ai dettagli sul trattamento dei Dati Personali.</p>
      <p>L'Utente ha diritto a ottenere informazioni in merito alla base giuridica del trasferimento di Dati al di fuori dell'Unione Europea o ad un'organizzazione internazionale di diritto internazionale pubblico o costituita da due o più paesi, come ad esempio l'ONU, nonché in merito alle misure di sicurezza adottate dal Titolare per proteggere i Dati.</p>
      <p>L'Utente può verificare se abbia luogo uno dei trasferimenti appena descritti esaminando la sezione di questo documento relativa ai dettagli sul trattamento di Dati Personali o chiedere informazioni al Titolare contattandolo agli estremi riportati in apertura.</p>

      <h3>Periodo di conservazione</h3>
      <p>I Dati sono trattati e conservati per il tempo richiesto dalle finalità per le quali sono stati raccolti. Pertanto:</p>
      <ul>
        <li>I Dati Personali raccolti per scopi collegati all'esecuzione di un contratto tra il Titolare e l'Utente saranno trattenuti sino a quando sia completata l'esecuzione di tale contratto.</li>
        <li>I Dati Personali raccolti per finalità riconducibili all'interesse legittimo del Titolare saranno trattenuti sino al soddisfacimento di tale interesse. L'Utente può ottenere ulteriori informazioni in merito all'interesse legittimo perseguito dal Titolare nelle relative sezioni di questo documento o contattando il Titolare.</li>
      </ul>
      <p>Quando il trattamento è basato sul consenso dell'Utente, il Titolare può conservare i Dati Personali più a lungo sino a quando detto consenso non venga revocato. Inoltre, il Titolare potrebbe essere obbligato a conservare i Dati Personali per un periodo più lungo in ottemperanza ad un obbligo di legge o per ordine di un'autorità.</p>
      <p>Al termine del periodo di conservazione i Dati Personali saranno cancellati. Pertanto, allo spirare di tale termine il diritto di accesso, cancellazione, rettificazione ed il diritto alla portabilità dei Dati non potranno più essere esercitati.</p>

      <h2>Finalità del Trattamento dei Dati raccolti</h2>
      <p>I Dati dell'Utente sono raccolti per consentire al Titolare di fornire il Servizio, adempiere agli obblighi di legge, rispondere a richieste o azioni esecutive, tutelare i propri diritti ed interessi (o quelli di Utenti o di terze parti), individuare eventuali attività dolose o fraudolente, nonché per le seguenti finalità: Statistica, Gestione contatti e invio di messaggi, Gestione dei tag e Visualizzazione di contenuti da piattaforme esterne.</p>
      <p>Per ottenere informazioni dettagliate sulle finalità del trattamento e sui Dati Personali trattati per ciascuna finalità, l'Utente può fare riferimento alla sezione "Dettagli sul trattamento dei Dati Personali".</p>

      <h2>Dettagli sul trattamento dei Dati Personali</h2>
      <p>I Dati Personali sono raccolti per le seguenti finalità ed utilizzando i seguenti servizi:</p>

      <h3>Gestione contatti e invio di messaggi</h3>
      <p>Questo tipo di servizi consente di gestire un database di contatti email, contatti telefonici o contatti di qualunque altro tipo, utilizzati per comunicare con l'Utente. Questi servizi potrebbero inoltre consentire di raccogliere dati relativi alla data e all'ora di visualizzazione dei messaggi da parte dell'Utente, così come all'interazione dell'Utente con essi, come le informazioni sui click sui collegamenti inseriti nei messaggi.</p>

      <h3>Gestione dei tag</h3>
      <p>Questo tipo di servizi è funzionale alla gestione centralizzata dei tag o script utilizzati su questo Sito Web. L'uso di tali servizi comporta il fluire dei Dati dell'Utente attraverso gli stessi e, se del caso, la loro ritenzione.</p>
      <h4>Google Tag Manager (Google Ireland Limited)</h4>
      <p>Google Tag Manager è un servizio di gestione dei tag fornito da Google Ireland Limited. Dati Personali trattati: Dati di utilizzo; Strumento di Tracciamento. Luogo del trattamento: Irlanda – <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>

      <h3>Statistica</h3>
      <p>I servizi contenuti nella presente sezione permettono al Titolare del Trattamento di monitorare e analizzare i dati di traffico e servono a tener traccia del comportamento dell'Utente.</p>
      <h4>Google Analytics (Google Ireland Limited)</h4>
      <p>Google Analytics è un servizio di analisi web fornito da Google Ireland Limited ("Google"). Google utilizza i Dati Personali raccolti allo scopo di tracciare ed esaminare l'utilizzo di questo Sito Web, compilare report e condividerli con gli altri servizi sviluppati da Google. Google potrebbe utilizzare i Dati Personali per contestualizzare e personalizzare gli annunci del proprio network pubblicitario.</p>
      <p>Dati Personali trattati: Dati di utilizzo; Strumento di Tracciamento. Luogo del trattamento: Irlanda – <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> – <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noopener noreferrer">Opt Out</a>.</p>
      <h4>Google Analytics con IP anonimizzato (Google Ireland Limited)</h4>
      <p>Questa integrazione di Google Analytics rende anonimo il tuo indirizzo IP. L'anonimizzazione funziona abbreviando entro i confini degli stati membri dell'Unione Europea o in altri Paesi aderenti all'accordo sullo Spazio Economico Europeo l'indirizzo IP degli Utenti. Solo in casi eccezionali, l'indirizzo IP sarà inviato ai server di Google ed abbreviato all'interno degli Stati Uniti.</p>
      <p>Dati Personali trattati: Dati di utilizzo; Strumento di Tracciamento. Luogo del trattamento: Irlanda – <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> – <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noopener noreferrer">Opt Out</a>.</p>

      <h3>Visualizzazione di contenuti da piattaforme esterne</h3>
      <p>Questo tipo di servizi permette di visualizzare contenuti ospitati su piattaforme esterne direttamente dalle pagine di questo Sito Web e di interagire con essi. Questo tipo di servizio potrebbe comunque raccogliere dati sul traffico web relativo alle pagine dove il servizio è installato, anche quando gli utenti non lo utilizzano.</p>
      <h4>Google Fonts (Google Ireland Limited)</h4>
      <p>Google Fonts è un servizio di visualizzazione di stili di carattere gestito da Google Ireland Limited che permette a questo Sito Web di integrare tali contenuti all'interno delle proprie pagine. Dati Personali trattati: Dati di utilizzo; Strumento di Tracciamento. Luogo del trattamento: Irlanda – <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>
      <h4>Font Awesome (Fonticons, Inc.)</h4>
      <p>Font Awesome è un servizio di visualizzazione di stili di carattere gestito da Fonticons, Inc. che permette a questo Sito Web di integrare tali contenuti all'interno delle proprie pagine. Dati Personali trattati: Dati di utilizzo; Strumento di Tracciamento. Luogo del trattamento: Stati Uniti – <a href="https://fontawesome.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>

      <p>Informazioni su come disattivare gli annunci pubblicitari basati sugli interessi: oltre a qualsiasi funzione di opt-out fornita da uno qualsiasi dei servizi elencati in questo documento, gli Utenti possono leggere di più su come disattivare gli annunci pubblicitari basati sugli interessi nell'apposita sezione della <a href="/cookie-policy">Cookie Policy</a>.</p>

      <h2>Diritti dell'Utente</h2>
      <p>Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare. In particolare, l'Utente ha il diritto di:</p>
      <ul>
        <li><strong>revocare il consenso in ogni momento.</strong> L'Utente può revocare il consenso al trattamento dei propri Dati Personali precedentemente espresso.</li>
        <li><strong>opporsi al trattamento dei propri Dati.</strong> L'Utente può opporsi al trattamento dei propri Dati quando esso avviene su una base giuridica diversa dal consenso.</li>
        <li><strong>accedere ai propri Dati.</strong> L'Utente ha diritto ad ottenere informazioni sui Dati trattati dal Titolare, su determinati aspetti del trattamento ed a ricevere una copia dei Dati trattati.</li>
        <li><strong>verificare e chiedere la rettificazione.</strong> L'Utente può verificare la correttezza dei propri Dati e richiederne l'aggiornamento o la correzione.</li>
        <li><strong>ottenere la limitazione del trattamento.</strong> Quando ricorrono determinate condizioni, l'Utente può richiedere la limitazione del trattamento dei propri Dati.</li>
        <li><strong>ottenere la cancellazione o rimozione dei propri Dati Personali.</strong> Quando ricorrono determinate condizioni, l'Utente può richiedere la cancellazione dei propri Dati da parte del Titolare.</li>
        <li><strong>ricevere i propri Dati o farli trasferire ad altro titolare.</strong> L'Utente ha diritto di ricevere i propri Dati in formato strutturato, di uso comune e leggibile da dispositivo automatico e, ove tecnicamente fattibile, di ottenerne il trasferimento senza ostacoli ad un altro titolare.</li>
        <li><strong>proporre reclamo.</strong> L'Utente può proporre un reclamo all'autorità di controllo della protezione dei dati personali competente o agire in sede giudiziale.</li>
      </ul>

      <h3>Dettagli sul diritto di opposizione</h3>
      <p>Quando i Dati Personali sono trattati nell'interesse pubblico, nell'esercizio di pubblici poteri di cui è investito il Titolare oppure per perseguire un interesse legittimo del Titolare, gli Utenti hanno diritto ad opporsi al trattamento per motivi connessi alla loro situazione particolare.</p>
      <p>Si fa presente agli Utenti che, ove i loro Dati fossero trattati con finalità di marketing diretto, possono opporsi al trattamento senza fornire alcuna motivazione.</p>

      <h3>Come esercitare i diritti</h3>
      <p>Per esercitare i diritti dell'Utente, gli Utenti possono indirizzare una richiesta agli estremi di contatto del Titolare indicati in questo documento. Le richieste sono depositate a titolo gratuito e evase dal Titolare nel più breve tempo possibile, in ogni caso entro un mese.</p>

      <h2>Cookie Policy</h2>
      <p>Questo Sito Web fa utilizzo di Strumenti di Tracciamento. Per saperne di più, l'Utente può consultare la <a href="/cookie-policy">Cookie Policy</a>.</p>

      <h2>Ulteriori informazioni sul trattamento</h2>
      <h3>Difesa in giudizio</h3>
      <p>I Dati Personali dell'Utente possono essere utilizzati da parte del Titolare in giudizio o nelle fasi preparatorie alla sua eventuale instaurazione per la difesa da abusi nell'utilizzo di questo Sito Web o dei Servizi connessi da parte dell'Utente. L'Utente dichiara di essere consapevole che il Titolare potrebbe essere obbligato a rivelare i Dati per ordine delle autorità pubbliche.</p>
      <h3>Informative specifiche</h3>
      <p>Su richiesta dell'Utente, in aggiunta alle informazioni contenute in questa privacy policy, questo Sito Web potrebbe fornire all'Utente delle informative aggiuntive e contestuali riguardanti Servizi specifici, o la raccolta ed il trattamento di Dati Personali.</p>
      <h3>Log di sistema e manutenzione</h3>
      <p>Per necessità legate al funzionamento ed alla manutenzione, questo Sito Web e gli eventuali servizi terzi da essa utilizzati potrebbero raccogliere log di sistema, ossia file che registrano le interazioni e che possono contenere anche Dati Personali, quali l'indirizzo IP Utente.</p>
      <h3>Informazioni non contenute in questa policy</h3>
      <p>Ulteriori informazioni in relazione al trattamento dei Dati Personali potranno essere richieste in qualsiasi momento al Titolare del Trattamento utilizzando gli estremi di contatto.</p>
      <h3>Risposta alle richieste "Do Not Track"</h3>
      <p>Questo Sito Web non supporta le richieste "Do Not Track". Per scoprire se gli eventuali servizi di terze parti utilizzati le supportino, l'Utente è invitato a consultare le rispettive privacy policy.</p>
      <h3>Modifiche a questa privacy policy</h3>
      <p>Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento notificandolo agli Utenti su questa pagina e, se possibile, su questo Sito Web nonché, qualora tecnicamente e legalmente fattibile, inviando una notifica agli Utenti attraverso uno degli estremi di contatto di cui è in possesso. Si prega dunque di consultare con frequenza questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.</p>
      <p>Qualora le modifiche interessino trattamenti la cui base giuridica è il consenso, il Titolare provvederà a raccogliere nuovamente il consenso dell'Utente, se necessario.</p>

      <h2>Definizioni e riferimenti legali</h2>
      <h4>Dati Personali (o Dati)</h4>
      <p>Costituisce dato personale qualunque informazione che, direttamente o indirettamente, anche in collegamento con qualsiasi altra informazione, ivi compreso un numero di identificazione personale, renda identificata o identificabile una persona fisica.</p>
      <h4>Dati di Utilizzo</h4>
      <p>Sono le informazioni raccolte automaticamente attraverso questo Sito Web (anche da applicazioni di parti terze integrate in questo Sito Web), tra cui: gli indirizzi IP o i nomi a dominio dei computer utilizzati dall'Utente che si connette con questo Sito Web, gli indirizzi in notazione URI (Uniform Resource Identifier), l'orario della richiesta, il metodo utilizzato nell'inoltrare la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.) il paese di provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna pagina) e i dettagli relativi all'itinerario seguito all'interno dell'Applicazione, con particolare riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema operativo e all'ambiente informatico dell'Utente.</p>
      <h4>Utente</h4>
      <p>L'individuo che utilizza questo Sito Web che, salvo ove diversamente specificato, coincide con l'Interessato.</p>
      <h4>Interessato</h4>
      <p>La persona fisica cui si riferiscono i Dati Personali.</p>
      <h4>Responsabile del Trattamento (o Responsabile)</h4>
      <p>La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che tratta dati personali per conto del Titolare, secondo quanto esposto nella presente privacy policy.</p>
      <h4>Titolare del Trattamento (o Titolare)</h4>
      <p>La persona fisica o giuridica, l'autorità pubblica, il servizio o altro organismo che, singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali e gli strumenti adottati, ivi comprese le misure di sicurezza relative al funzionamento ed alla fruizione di questo Sito Web. Il Titolare del Trattamento, salvo quanto diversamente specificato, è il titolare di questo Sito Web.</p>
      <h4>Questo Sito Web (o questa Applicazione)</h4>
      <p>Lo strumento hardware o software mediante il quale sono raccolti e trattati i Dati Personali degli Utenti.</p>
      <h4>Servizio</h4>
      <p>Il Servizio fornito da questo Sito Web così come definito nei relativi termini (se presenti) su questo sito/applicazione.</p>
      <h4>Unione Europea (o UE)</h4>
      <p>Salvo ove diversamente specificato, ogni riferimento all'Unione Europea contenuto in questo documento si intende esteso a tutti gli attuali stati membri dell'Unione Europea e dello Spazio Economico Europeo.</p>
      <h4>Cookie</h4>
      <p>I Cookie sono Strumenti di Tracciamento che consistono in piccole porzioni di dati conservate all'interno del browser dell'Utente.</p>
      <h4>Strumento di Tracciamento</h4>
      <p>Per Strumento di Tracciamento s'intende qualsiasi tecnologia – es. Cookie, identificativi univoci, web beacons, script integrati, e-tag e fingerprinting – che consenta di tracciare gli Utenti, per esempio raccogliendo o salvando informazioni sul dispositivo dell'Utente.</p>
      <h4>Riferimenti legali</h4>
      <p>La presente informativa privacy è redatta sulla base di molteplici ordinamenti legislativi, inclusi gli artt. 13 e 14 del Regolamento (UE) 2016/679.</p>
      <p>Ove non diversamente specificato, questa informativa privacy riguarda esclusivamente questo Sito Web.</p>
    </LegalPage>
  );
}
