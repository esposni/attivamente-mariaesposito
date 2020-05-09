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

export default function AttivitaInfanzia() {
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
        title="ATTIVITÀ AREA CLINICA  INFANZIA"
        image="bg8.jpg" />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
              
                <h2 className="title" align="center">Valutazione psicodiagnostica</h2>
                <h5>Prevede un colloquio preliminare per la raccolta dei dati anamnestici e l’uso di strumenti testici di personalità, di livello, psicoattitudinali, l’osservazione del bambino in situazioni di gioco libero e/o strutturato. L’obiettivo è di valutare l’adeguatezza del bambino in relazione all’età.  Al termine della valutazione viene fornito un inquadramento psicodiagnostico del quadro sintomatica</h5>
                <h2 className="title" align="center">Sostegno psicologico indirizzato ai bambini</h2>
                <h5>Durante  il percorso evolutivo nel bambino e nell’adolescente   avvengono numerosi ed importanti cambiamenti, fisici, comportamentali, affettivi ed emotivi. Il bambino si trova ad affrontare sfide quotidiane  a forte impatto emotivo come la separazione da mamma e papà,  l’inizio della scuola, il confronto con i pari, le prestazioni scolastiche o l’apprendimento di nuove regole.
 Per qualcuno questo può essere faticoso o addirittura fonte di sofferenza: in questi casi il bambino può cominciare a manifestare segni di disagio. Questo disagio spesso non può essere espresso verbalmente e si manifesta prevalentemente a livello comportamentale, corporeo ed emotivo.
È importante riuscire a riconoscere i segnali di disagio del bambino per poter intervenire nel modo più appropriato e tempestivo. Il disagio del minore viene considerato all’interno del sistema di appartenenza, scuola e famiglia.  E’ importante agire nei contesti di vita del bambino/ragazzo attraverso un intervento integrato che vede coinvolti famiglia e insegnanti. 
Può essere utile una consulenza psicologica o un  lavoro di sostegno psicologico con l’obiettivo di accompagnare lui e la sua famiglia nel momento della difficoltà 
</h5>
                <h5><b>Problematiche trattate: </b></h5>
                <h5><ul>
                  <li>problematiche legate ad ansie, fobie </li>
                  <li>problemi di comportamento e relazionali</li>
                  <li>bassa autostima</li>
                  <li>tic e balbuzie</li>
                </ul></h5>

<h5><b>Come strutturo il percorso di sostegno con bambini</b></h5>

<h5>Primo contatto<br/>
Può avvenire telefonicamente o via mail in questo caso sarete contattati  entro 24 ore. Il primo colloquio avviene generalmente entro una settimana.
<br/>
Fase di Conoscenza<br/>
colloquio volto alla conoscenza reciproca, alla definizione del problema, alla raccolta di informazioni,  alla definizione del contratto terapeutico 
<br/>
Fase di valutazione <br/>
3/4 incontri in cui si raccolgono dati sulla storia personale e familiare, sullo sviluppo psicofisico.  Si somministrano test psicometrici e proiettivi, questionari e osservazione  del comportamento.  Al termine di questa fase incontro nuovamente i genitori per restituire quanto emerso, concordiamo insieme l’intervento mirato e focalizzato alla gestione di una specifica difficoltà si ipotizza una durata 
<br/>
Intervento  <br/>
Strutturato a cicli di 6/8 incontri  rinnovabili .  
L’intervento con i bambini è di tipo psicoeducativo, attraverso il dialogo, il gioco, il disegno, l’ascolto e la costruzione di storie, attività immaginative si  aiuta il bambino a dare un nome alle emozioni,  comprendere i suoi pensieri negativi, a riconoscere le emozioni dolorose  che ne conseguono e i comportamenti sintomatici. Si aiuta dunque il bambino a trovare modalità di gestione più adeguata e a modificare alcuni pensieri disfunzionali.  
Questo lavoro di comprensione e riconoscimento dei propri vissuti, insieme alla condivisione con il bambino e i suoi genitori, può dare inizio ad una fase di cambiamento e quindi di riduzione della sintomatologia e del malessere.
 L’ultimo incontro di ogni ciclo sarà dedicato al monitoraggio dell’intervento che può sfociare in una condivisone di ulteriori obiettivi o nella chiusura ed eventuale follow up a distanza di qualche mese. 
</h5>

<h2 className="title" align="center">Sostegno psicologico all’adolescente </h2>
<h5><b>Problematiche durante l’adolescenza </b></h5>
<h5>L’adolescenza è la fase della vita di un individuo che si interpone tra l’infanzia e la vita adulta. Cronologicamente, l’adolescenza potrebbe essere collocata in un’età compresa tra i dodici e i ventidue anni, anche se è piuttosto difficile darne un’indicazione anagrafica precisa per via delle differenze individuali e delle caratteristiche della nostra società. Questa lunga fase di scoperta segnata da numerosi cambiamenti somatici e psichici, è finalizzata ad un assetto nuovo ed originale del soggetto.
Ma questo “nuovo ed originale” può essere causa di turbamenti: come l’angoscia di perdere, nella trasformazione l’unità dell’Io, il timore di un ritorno all’impotenza originaria, il rischio di una chiusura in se stessi per l’incapacità di far fronte alle nuove e pressanti richieste dell’ambiente. Tuttavia questa scoperta rappresenta anche una fase stimolante e creativa, perché apre a nuove esperienze, nuove possibilità.
La crisi adolescenziale è caratterizzata da una serie di cambiamenti complessi. Per vari motivi questi cambiamenti possono non attuarsi e trasformarsi in situazioni di malessere.
Il sostegno psicologico agli adolescenti può essere richiesto direttamente dai ragazzi, o dai genitori che si trovano a vivere o percepire segnali di stati di sofferenza, tra cui ci possono essere
</h5>
            <h5><b>Problematiche trattate: </b></h5>
            <h5><ul>
                  <li>Crisi rispetto alla propria identità;</li>
                  <li>Crisi rispetto al proprio progetto di vita;</li>
                  <li>Stati di isolamento, disagio nelle relazioni con i coetanei;</li>
                  <li>Sofferenze in campo amoroso;</li>
                  <li>Dubbi sulla propria identità sessuale;</li>
                  <li>Tensioni con i genitori, rabbia;</li>
                  <li>Problemi a scuola;</li>
                  <li>Angosce, paure e ossessioni;</li>
                  <li>Pensieri e gesti autodistruttivi;</li>
                  <li>Somatizzazioni, stati di malessere fisico senza una causa organica. </li>
                </ul></h5>
               
<h5>Il mio modello di riferimento per il counseling è quello del “Colloquio Motivazionale”. Questo approccio  valorizza l’esperienza del ragazzo attraverso l’ascolto e l’esplorazione del suo punto di vista  considerandolo unico esperto di sé stesso, rimandandogli questa competenza con l’obiettivo di attivarla. La ricerca nel Colloquio motivazionale dimostra che restituire l’autonomia di comportamento nelle comunicazioni con il giovane è in grado di non innalzare la reattanza psicologica (i meccanismi di resistenza al cambiamento) e permette di mantenere un buon rapporto con il ragazzo, aumentando, in realtà, la possibilità che il cambiamento si realizzi.</h5>
<h5><b>Come strutturo il mio  percorso di sostegno con gli adolescenti</b></h5>
<h5>Nella prima fase vedo i genitori da soli per uno o due incontri al fine di inquadrare la loro visione del problema, nella seconda fase incontro il ragazzo per tre o quattro incontri per conoscere il suo punto di vista sulla situazione problematica, la sua motivazione al percorso e fornirgli tutte le informazioni utili alla sua intrapresa. In questa fase c’è anche un aspetto valutativo attraverso questionari e test. Nella fase conclusiva effettuo un colloquio insieme al ragazzo e ai genitori per definire insieme l’intervento. 
In base alla situazione, si potrà suggerire un lavoro individuale con il ragazzo o degli incontri a cui partecipano solo i genitori, oppure, coordinare i due interventi al fine di aiutare l'intero nucleo famigliare a trovare una nuova modalità più favorevole di relazione e comunicazione. 
</h5>
<h5><b>	Se la richiesta parte dai genitori</b></h5>
<h5>Se sono i genitori a richiedere una consulenza per il figlio è possibile che l’adolescente non sappia della richiesta e quindi i genitori dovranno parlargliene spiegandogli le loro preoccupazioni, se il ragazzo  è a conoscenza della richiesta, potrà essere d’accordo con la necessità di un aiuto oppure non condividerne il bisogno e rifiutare gli incontri.
Il tipo di lavoro potrà essere una prima consulenza ai genitori rispetto al loro rapporto con il figlio, considerando che nel futuro, il ragazzo potrebbe cambiare idea e decidere di partecipare agli incontri.
</h5>

<h2 className="title" align="center">Sostegno alla genitorialità </h2>
<h5>per i genitori spesso il disagio del figlio può essere fonte di sofferenza e preoccupazione; in questi casi avere uno spazio dove essere ascoltati e confortati può essere di grande aiuto per comprendere meglio le proprie emozioni e quelle del proprio figlio.
 In questo spazio è possibile riflettere sulla modalità di stare insieme così come sulle abitudini di comunicazione familiare. Attraverso la comprensione e la condivisione di questi aspetti, possiamo arrivare a comprendere e ridurre il disagio di tutta la famiglia
</h5>
<h5><b>Sostegno  per il ragazzo, per i genitori o per tutta la famiglia?</b></h5>
<h5> L’intervento  potrà essere più efficace se i genitori saranno disposti a coinvolgersi nel processo che va dalla prima consultazione fino agli incontri veri e propri. Molto spesso, anche la coppia genitoriale necessita di una guida da cui trarre spunti per apportare alcuni cambiamenti nelle modalità di relazionarsi al bambino o di comunicare con lui o di accogliere e recepire i suoi bisogni più profondi.
A seconda dei singoli casi, potrebbe essere indicato per i genitori fare un percorso di sostegno alla genitorialità, parallelo a quello del bambino, oppure può rivelarsi più utile fare degli incontri congiunti con tutta la famiglia, o, ancora, alternare incontri con il bambino a colloqui con i genitori.
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

