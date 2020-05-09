import React from "react";

// reactstrap components
import {
 
  Container,
  Row,
  Col
} from "reactstrap";
// import { Link } from "react-router-dom";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import PageHeader from "components/Headers/PageHeader";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import FormMessage from"components/FormMessage.js";
import PositionInfo from"components/PositionInfo.js";
// import AlertDialogSlide from "components/PopUpButton.js";

export default function AttivitaAdulti() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader 
        title="ATTIVITÀ AREA CLINICA  ADULTI"
        image="bg8.jpg" />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto " md="8">
              <img
                      alt="..."
                      src={require("assets/img/riv_psico.jpg")}
                    ></img>
                <h2 className="title" align="center">Perché rivolgersi allo psicologo</h2>
                <h5 >Tutti noi possiamo attraversare  momenti difficili nel corso della nostra vita. A volte cerchiamo e troviamo da soli le soluzioni ai nostri problemi altre volte ci sembra tutto più difficile e ci sentiamo come bloccati. Se non ha senso sopportare un dolore fisico, un mal di schiena, una mal di denti, perché dovremmo sopportare un dolore emotivo?
 Riconoscere un disagio o una debolezza è in realtà un atto di coraggio e di apertura mentale che ci porta a chiedere un aiuto esterno.
 Un intervento psicologico può permettere  di uscire più velocemente e con qualche risorsa in più dalle crisi e con  punti di vista più ampi.
Aumenta la comprensione personale: permette di capire perché siamo come siamo in  determinate situazioni o perché ci succedono sempre le stesse cose. Da ciò può nascere il bisogno di cambiamento. 
Nel mio studio puoi trovare  consulenza e  sostegno psicologico che  possono essere  indicati nei casi in cui ti trovi ad affrontare:
</h5>
<h5><ul>
  <li>conflitti personali, familiari o lavorativi;</li>
  <li>situazioni di crisi associate ad elevata sofferenza emotiva (separazioni, lutti, malattie croniche o invalidanti);</li>
  <li>periodi di forte cambiamento o difficoltà decisionali su tematiche emotivamente importanti (famiglia, lavoro, ecc.);</li>
  <li>problematiche legate all’ansia;</li>
  <li>problematiche legate alla gestione dei figli nei periodi dell’infanzia e dell’adolescenza. </li>
</ul></h5>
<img
                      alt="..."
                      src={require("assets/img/cons_psico.jpg")}
                    ></img>
<h2 className="title" align="center">Consulenza Psicologica: in cosa consiste</h2>
<h5>E’ un processo finalizzato ad aiutare la persona a risolvere un problema o a prendere una decisione in un arco di tempo breve e delimitato
 Il  fine è di rendere possibili scelte e cambiamenti in situazioni percepite come difficili dalla persona ma non costruite come invalidanti il proprio senso di identità personale.

 Durante il percorso  verranno esaminati e discussi alcuni aspetti della situazione: l’origine, la sua evoluzione, le risorse che è possibile attivare  e le strade percorribili per la soluzione. Lo psicologo a sua volta, potrà fornire informazioni  che aiuteranno la persona a comprendere meglio la situazione problematica. 

Si tratta di un intervento breve anche di pochi incontri o comunque limitato; impostato su un obiettivo ben precisato e il più possibilmente definito; efficace verso la risoluzione del problema e/o della presa di decisione.
</h5>
<img
                      alt="..."
                      src={require("assets/img/percorso_psico.jpg")}
                    ></img>
<h2 className="title" align="center">Percorso di sostegno psicologico: in cosa consiste</h2>
<h5>E’ un intervento che vede presente  nella richiesta della persona un’urgenza emotiva  e rappresenta  un supporto  finalizzato ad  alleviarne il disagio.
 Il percorso   ha l’obiettivo di rafforzare le strutture dell’io e le capacità di adattamento della persona per raggiungere e mantenere uno stato di benessere. 
</h5>
<h5><b>Come strutturo il percorso</b></h5>
<h5> In una prima fase ci incontriamo per 3 o 4 volte per analizzare la visione del problema, dare spiegazioni su modalità, costi, tempi dell’intervento, chiarire tutti i dubbi, raccogliere la storia personale, effettuare una valutazione psicologica con l’utilizzo di test e questionari. A questa fase fa seguito un incontro in cui restituisco quanto emerso dalla valutazione e prospetto ipotesi di intervento. </h5>
<h5><b>Punto centrale è stabilire con la persona obiettivi e durata dell’intervento.</b></h5>
<h5>Gli incontri sono a cadenza settimanale. Insieme attuiamo un monitoraggio ciclico dell’ andamento ogni 8/10 incontri  per definire nuovi obiettivi o concludere il percorso.  </h5>
<h5><b>Il mio modello di intervento</b></h5>
<h5>Agisco secondo un modello di intervento di approccio integrato. Ricorro a diverse metodologie che scelgo a seconda della natura del problema e della fase di aiuto.
 Il mio orientamento principale di riferimento è quello cognitivo/comportamentale, partendo da questo, utilizzo anche tecniche di altri orientamenti. 
L’assunto base del modello cognitivo è che le nostre reazioni emotive e il nostro comportamento dipende essenzialmente da come interpretiamo ciò che accade, in altre parole dal nostro pensiero. Se ad esempio penso che non ce la farò, non mi attiverò in quel compito e nello stesso tempo proverò tristezza e senso di svalutazione. Nel tempo collezioniamo una serie di pensieri disfunzionali che diventano automatici e che ci portano a vedere la realtà con occhiali dalle lenti opache. L’intervento  cognitivo comportamentale agisce attraverso:
</h5>
<h5><ul>
  <li>La ristrutturazione delle “false” credenze o di quelle auto-lesionistiche</li>
  <li>Lo sviluppo del self talk positivo, ovvero l’abilità di parlare a se stessi in modo positivo</li>
  <li>La sostituzione di pensieri negativi con pensieri più funzionali</li>
  <li>La riduzione dei comportamenti di evitamento attraverso la desensibilizzazione sistematica e la graduale esposizione del paziente alla situazione temuta (soprattutto nelle fobie)</li>
  <li>L’apprendimento di tecniche di rilassamento (es. Training Autogeno e rilassamento progressivo ) </li>
  <li>L’utilizzo di conoscenze per fronteggiare meglio le situazioni</li>
</ul></h5>
<h5>L’approccio umanistico/esistenziale costituisce la cornice di riferimento entro cui strutturo i colloqui. Di questo modello i valori di riferimento che mi guidano sono: il mettere al centro  la persona e la visione  positiva nelle capacità di autodeterminazione di ognuno, la focalizzazione verso un  tipo di relazione  non giudicante e empatica e l’uso della comunicazione efficace 
 L’approccio sistemico/relazionale mi aiuta a considerare quanto accade a livello individuale sempre all’interno del contesto relazionale di riferimento; la famiglia, la scuola, il gruppo di lavoro e a tener conto del significato della comunicazione/relazionale all’interno del gruppo. 
</h5>

              </Col>
            </Row>
          
          </Container>
        </div>
        <PositionInfo/>
       
        <FormMessage/>
        <DefaultFooter />
      </div>
    </>
  );
}

