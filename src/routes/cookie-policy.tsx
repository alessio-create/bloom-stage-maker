import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/funnel/LegalPage";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — EuroMedPartner" },
      { name: "description", content: "Cookie Policy di euromedpartner.it — informazioni sugli Strumenti di Tracciamento utilizzati da questo Sito Web." },
      { name: "robots", content: "noindex,follow" },
    ],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy">
      <p>Cookie Policy di <strong>euromedpartner.it</strong></p>
      <p>Questo documento contiene informazioni in merito alle tecnologie che consentono a questo Sito Web di raggiungere gli scopi descritti di seguito. Tali tecnologie permettono al Titolare di raccogliere e salvare informazioni (per esempio tramite l'utilizzo di Cookie) o di utilizzare risorse (per esempio eseguendo uno script) sul dispositivo dell'Utente quando quest'ultimo interagisce con questo Sito Web.</p>
      <p>Per semplicità, in questo documento tali tecnologie sono sinteticamente definite "Strumenti di Tracciamento", salvo vi sia ragione di differenziare. Per esempio, sebbene i Cookie possano essere usati in browser sia web sia mobili, sarebbe fuori luogo parlare di Cookie nel contesto di applicazioni per dispositivi mobili, dal momento che si tratta di Strumenti di Tracciamento che richiedono la presenza di un browser. Per questo motivo, all'interno di questo documento il termine Cookie è utilizzato solo per indicare in modo specifico quel particolare tipo di Strumento di Tracciamento.</p>
      <p>Alcune delle finalità per le quali vengono impiegati Strumenti di Tracciamento potrebbero, inoltre richiedere il consenso dell'Utente. Se viene prestato il consenso, esso può essere revocato liberamente in qualsiasi momento seguendo le istruzioni contenute in questo documento.</p>
      <p>Questo Sito Web utilizza Strumenti di Tracciamento gestiti direttamente dal Titolare (comunemente detti Strumenti di Tracciamento "di prima parte") e Strumenti di Tracciamento che abilitano servizi forniti da terzi (comunemente detti Strumenti di Tracciamento "di terza parte"). Se non diversamente specificato all'interno di questo documento, tali terzi hanno accesso ai rispettivi Strumenti di Tracciamento.</p>
      <p>Durata e scadenza dei Cookie e degli altri Strumenti di Tracciamento simili possono variare a seconda di quanto impostato dal Titolare o da ciascun fornitore terzo. Alcuni di essi scadono al termine della sessione di navigazione dell'Utente.</p>
      <p>In aggiunta a quanto specificato nella descrizione di ciascuna delle categorie di seguito riportate, gli Utenti possono ottenere informazioni più dettagliate ed aggiornate sulla durata, così come qualsiasi altra informazione rilevante – quale la presenza di altri Strumenti di Tracciamento – nelle privacy policy dei rispettivi fornitori terzi (tramite i link messi a disposizione) o contattando il Titolare.</p>

      <h2>Attività strettamente necessarie a garantire il funzionamento di questo Sito Web e la fornitura del Servizio</h2>
      <p>Questo Sito Web utilizza Cookie comunemente detti "tecnici" o altri Strumenti di Tracciamento analoghi per svolgere attività strettamente necessarie a garantire il funzionamento o la fornitura del Servizio.</p>

      <h2>Strumenti di Tracciamento di terza parte</h2>
      <h3>Gestione dei tag</h3>
      <p>Questo tipo di servizi è funzionale alla gestione centralizzata dei tag o script utilizzati su questo Sito Web. L'uso di tali servizi comporta il fluire dei Dati dell'Utente attraverso gli stessi e, se del caso, la loro ritenzione.</p>
      <h4>Google Tag Manager (Google Ireland Limited)</h4>
      <p>Google Tag Manager è un servizio di gestione dei tag fornito da Google Ireland Limited. Dati Personali trattati: Dati di utilizzo e Strumento di Tracciamento. Luogo del trattamento: Irlanda – <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>

      <h2>Altre attività che prevedono l'utilizzo di Strumenti di Tracciamento</h2>

      <h3>Miglioramento dell'esperienza</h3>
      <p>Questo Sito Web utilizza Strumenti di Tracciamento per fornire una user experience personalizzata, consentendo una migliore gestione delle impostazioni personali e l'interazione con network e piattaforme esterne.</p>
      <h4>Visualizzazione di contenuti da piattaforme esterne</h4>
      <p>Questo tipo di servizi permette di visualizzare contenuti ospitati su piattaforme esterne direttamente dalle pagine di questo Sito Web e di interagire con essi. Questo tipo di servizio potrebbe comunque raccogliere dati sul traffico web relativo alle pagine dove il servizio è installato, anche quando gli utenti non lo utilizzano.</p>
      <h4>Google Fonts (Google Ireland Limited)</h4>
      <p>Google Fonts è un servizio di visualizzazione di stili di carattere gestito da Google Ireland Limited che permette a questo Sito Web di integrare tali contenuti all'interno delle proprie pagine. Dati Personali trattati: Dati di utilizzo e Strumento di Tracciamento. Luogo del trattamento: Irlanda – <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>
      <h4>Font Awesome (Fonticons, Inc.)</h4>
      <p>Font Awesome è un servizio di visualizzazione di stili di carattere gestito da Fonticons, Inc. che permette a questo Sito Web di integrare tali contenuti all'interno delle proprie pagine. Dati Personali trattati: Dati di utilizzo e Strumento di Tracciamento. Luogo del trattamento: Stati Uniti – <a href="https://fontawesome.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>

      <h3>Misurazione</h3>
      <p>Questo Sito Web utilizza Strumenti di Tracciamento per misurare il traffico e analizzare il comportamento degli Utenti con l'obiettivo di migliorare il Servizio.</p>
      <h4>Servizi di statistica anonimizzata</h4>
      <p>I servizi in questa sezione permettono al Titolare di elaborare e gestire statistiche in forma anonima grazie all'uso di Strumenti di Tracciamento di prima parte.</p>
      <h4>Google Analytics con IP anonimizzato (Google Ireland Limited)</h4>
      <p>Google Analytics è un servizio di analisi web fornito da Google Ireland Limited ("Google"). Google utilizza i Dati Personali raccolti allo scopo di tracciare ed esaminare l'utilizzo di questo Sito Web, compilare report e condividerli con gli altri servizi sviluppati da Google. Google potrebbe utilizzare i Dati Personali per contestualizzare e personalizzare gli annunci del proprio network pubblicitario.</p>
      <p>Questa integrazione di Google Analytics rende anonimo il tuo indirizzo IP. L'anonimizzazione funziona abbreviando entro i confini degli stati membri dell'Unione Europea o in altri Paesi aderenti all'accordo sullo Spazio Economico Europeo l'indirizzo IP degli Utenti. Solo in casi eccezionali, l'indirizzo IP sarà inviato ai server di Google ed abbreviato all'interno degli Stati Uniti.</p>
      <p>Dati Personali trattati: Dati di utilizzo e Strumento di Tracciamento. Luogo del trattamento: Irlanda – <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> – <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noopener noreferrer">Opt Out</a>.</p>
      <p>Durata di archiviazione:</p>
      <ul>
        <li>AMP_TOKEN: 1 ora</li>
        <li>_ga: 2 anni</li>
        <li>_gac*: 3 mesi</li>
        <li>_gat: 1 minuto</li>
        <li>_gid: 1 giorno</li>
      </ul>

      <h4>Statistica</h4>
      <p>I servizi contenuti nella presente sezione permettono al Titolare del Trattamento di monitorare e analizzare i dati di traffico e servono a tener traccia del comportamento dell'Utente.</p>
      <h4>Google Analytics (Google Ireland Limited)</h4>
      <p>Google Analytics è un servizio di analisi web fornito da Google Ireland Limited ("Google"). Google utilizza i Dati Personali raccolti allo scopo di tracciare ed esaminare l'utilizzo di questo Sito Web, compilare report e condividerli con gli altri servizi sviluppati da Google. Google potrebbe utilizzare i Dati Personali per contestualizzare e personalizzare gli annunci del proprio network pubblicitario.</p>
      <p>Dati Personali trattati: Dati di utilizzo e Strumento di Tracciamento. Luogo del trattamento: Irlanda – <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> – <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noopener noreferrer">Opt Out</a>. Durata di archiviazione: fino a 12 mesi.</p>

      <h3>Targeting e Pubblicità</h3>
      <p>Questo Sito Web utilizza Strumenti di Tracciamento per fornire contenuti commerciali personalizzati in base al comportamento dell'Utente e per gestire, diffondere e tracciare annunci pubblicitari.</p>
      <p>Alcuni dei servizi utilizzati dal Titolare aderiscono al <a href="https://iabeurope.eu/transparency-consent-framework/" target="_blank" rel="noopener noreferrer">Transparency And Consent Framework di IAB</a>, un'iniziativa che promuove pratiche responsabili di trattamento dei dati nel settore della pubblicità digitale ed assicura agli Utenti maggior trasparenza e controllo sull'utilizzo dei propri dati a scopo di tracciamento pubblicitario. Gli Utenti possono esprimere le proprie preferenze riguardo ai servizi pubblicitari in qualsiasi momento accedendo al pannello delle impostazioni di tracciamento della pubblicità direttamente dall'informativa sui cookie oppure tramite l'apposito link su questo Sito Web.</p>

      <h3>Gestione contatti e invio di messaggi</h3>
      <p>Questo tipo di servizi consente di gestire un database di contatti email, contatti telefonici o contatti di qualunque altro tipo, utilizzati per comunicare con l'Utente. Questi servizi potrebbero inoltre consentire di raccogliere dati relativi alla data e all'ora di visualizzazione dei messaggi da parte dell'Utente, così come all'interazione dell'Utente con essi, come le informazioni sui click sui collegamenti inseriti nei messaggi.</p>

      <h2>Come gestire le preferenze e prestare o revocare il consenso</h2>
      <p>Esistono vari modi per gestire le preferenze relative agli Strumenti di Tracciamento e per prestare o revocare il consenso, ove necessario:</p>
      <p>Gli Utenti possono gestire le preferenze relative agli Strumenti di Tracciamento direttamente tramite le impostazioni dei propri dispositivi – per esempio, possono impedire l'uso o l'archiviazione di Strumenti di Tracciamento.</p>
      <p>In aggiunta, ogni qualvolta l'utilizzo di Strumenti di Tracciamento dipenda da consenso, l'Utente può prestare o revocare tale consenso impostando le proprie preferenze all'interno dell'informativa sui cookie o aggiornando tali preferenze tramite il widget delle impostazioni di tracciamento, se presente.</p>
      <p>Grazie ad apposite funzioni del browser o del dispositivo è anche possibile rimuovere Strumenti di Tracciamento precedentemente salvati.</p>
      <p>Altri Strumenti di Tracciamento presenti nella memoria locale del browser possono essere rimossi cancellando la cronologia di navigazione.</p>
      <p>Per quanto riguarda Strumenti di Tracciamento di terza parte, gli Utenti possono gestire le preferenze e revocare il consenso visitando il relativo link di opt out (qualora disponibile), utilizzando gli strumenti descritti nella privacy policy della terza parte o contattandola direttamente.</p>

      <h3>Individuare le impostazioni relative agli Strumenti di Tracciamento</h3>
      <p>Gli Utenti possono, per esempio, trovare informazioni su come gestire i Cookie in alcuni dei browser più diffusi ai seguenti indirizzi:</p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647?hl=it&p=cpn_cookies" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/it-it/guide/safari/manage-cookies-and-website-data-sfri11471/" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
        <li><a href="http://windows.microsoft.com/it-it/windows-vista/block-or-allow-cookies" target="_blank" rel="noopener noreferrer">Microsoft Internet Explorer</a></li>
        <li><a href="https://support.microsoft.com/it-it/help/4027947" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        <li><a href="https://support.brave.com/hc/articles/360022806212-How-do-I-use-Shields-while-browsing" target="_blank" rel="noopener noreferrer">Brave</a></li>
        <li><a href="https://help.opera.com/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer">Opera</a></li>
      </ul>
      <p>Gli Utenti possono inoltre gestire alcuni Strumenti di Tracciamento per applicazioni mobili disattivandoli tramite le apposite impostazioni del dispositivo, quali le impostazioni di pubblicità per dispositivi mobili o le impostazioni relative al tracciamento in generale (gli Utenti possono consultare le impostazioni del dispositivo per individuare quella pertinente).</p>

      <h3>Come disattivare la pubblicità basata sugli interessi</h3>
      <p>Fermo restando quanto precede, si informano gli Utenti della possibilità di avvalersi delle informazioni presenti su <a href="http://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">YourOnlineChoices</a> (EU), <a href="https://thenai.org/about-online-advertising/" target="_blank" rel="noopener noreferrer">Network Advertising Initiative</a> (USA) e <a href="https://www.aboutads.info/consumers/" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance</a> (USA), <a href="https://youradchoices.ca/understanding-online-advertising/" target="_blank" rel="noopener noreferrer">DAAC</a> (Canada), <a href="http://www.ddai.info/optout" target="_blank" rel="noopener noreferrer">DDAI</a> (Giappone) o altri servizi analoghi. Con questi servizi è possibile gestire le preferenze di tracciamento della maggior parte degli strumenti pubblicitari. Il Titolare, pertanto, consiglia agli Utenti di utilizzare tali risorse in aggiunta alle informazioni fornite nel presente documento.</p>
      <p>La Digital Advertising Alliance mette inoltre a disposizione un'applicazione chiamata <a href="https://youradchoices.com/appchoices" target="_blank" rel="noopener noreferrer">AppChoices</a> che aiuta gli Utenti a controllare la pubblicità comportamentale sulle applicazioni mobili.</p>

      <h3>Conseguenze del rifiuto del consenso</h3>
      <p>Gli Utenti sono liberi di decidere se prestare o meno il consenso. Tuttavia, si noti che gli Strumenti di Tracciamento consentono a questo Sito Web di fornire una migliore esperienza e funzionalità avanzate agli Utenti (in linea con le finalità delineate nel presente documento). Pertanto, in assenza del consenso dell'Utente, il Titolare potrebbe non essere in grado di fornire le relative funzionalità.</p>

      <div className="legal-meta">
        <p><strong>Titolare del Trattamento dei Dati</strong></p>
        <p>EUROMEDPARTNER LA BOUTIQUE DI FINANZA AGEVOLATA S.R.L.<br />P.IVA 07322520821</p>
        <p><strong>Indirizzo email del Titolare:</strong> <a href="mailto:info@euromedpartner.it">info@euromedpartner.it</a></p>
      </div>

      <p>Dal momento che l'uso di Strumenti di Tracciamento di terza parte su questo Sito Web non può essere completamente controllato dal Titolare, ogni riferimento specifico a Strumenti di Tracciamento di terza parte è da considerarsi indicativo. Per ottenere informazioni complete, gli Utenti sono gentilmente invitati a consultare la privacy policy dei rispettivi servizi terzi elencati in questo documento.</p>
      <p>Data l'oggettiva complessità di identificazione delle tecnologie di tracciamento, gli Utenti sono invitati a contattare il Titolare qualora volessero ricevere ulteriori informazioni in merito all'utilizzo di tali tecnologie su questo Sito Web.</p>

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
