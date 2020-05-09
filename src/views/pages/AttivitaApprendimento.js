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

export default function AttivitaApprendimento() {
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
        title="ATTIVITÀ AREA APPRENDIMENTO"
        image="bg8.jpg" />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto " md="8">
              
              <h2 className="title" align="center">Affrontare  con successo le difficoltà di apprendimento</h2>
              <h5>Se ti sembra che tuo figlio faccia fatica a tenere il passo con il gruppo classe, se il rendimento non equivale all’impegno profuso, se gli insegnanti notano che è sempre distratto e non riesce a concentrarsi, è importante capire da cosa dipende il problema. 

Una difficoltà di apprendimento può essere dovuta a diversi fattori e riguardare il modo personale di apprendere, il metodo di insegnamento, le emozioni connesse allo studio,  problemi relazionali con familiari e insegnanti. Le difficoltà, se trascurate, possono portare ad una serie di fallimenti e insuccessi che determinano perdita di autostima e motivazione, se affrontate generano capacità di affrontare il compito con consapevolezza ed entusiasmo.

Il primo passo da compiere è un attenta valutazione di tutte le componenti in gioco, 
il secondo è programmare un intervento che come un pezzo di puzzle vada ad incastrarsi perfettamente con le caratteristiche personali. 
</h5>
<h5><b>I servizi che offro nel mio studio: Valutazione e trattamento delle difficoltà di apprendimento</b></h5>
<h2 className="title" align="center">Valutazione delle difficoltà di apprendimento: in cosa consiste </h2>
<h5>La valutazione comprende vari aspetti che potranno essere esplorati a seconda delle problematiche e degli obiettivi. Le aree di indagine riguardano:</h5>
<h5><ul>
<li>	Funzionamento cognitivo, (memoria, attenzione, abilità di astrazione, pianificazione,  analisi e discriminazione visiva e altre con il fine di arrivare a descrivere il profilo di funzionamento cognitivo della persona, il suo modo cioè di ricevere ed elaborare le informazioni esterne. </li>
  <li>abilità strumentali di lettura, scrittura, calcolo o dei prerequisiti degli apprendimenti per bambini di  5/6 anni</li>
  <li>sfera relazionale e motivazionale. </li>

</ul></h5>
<h5>L’attività di valutazione si svolge in tre momenti. Una prima fase prevede il colloquio con i genitori per l’analisi della richiesta, raccolta anamnestica e analisi del materiale scolastico, una seconda fase di almeno  tre  incontri, è necessaria alla somministrazione di test standardizzati e un’ultima fase  vede l’ incontro con i genitori  per spiegare quanto emerso  e formulare un piano di intervento.  </h5>
<h2 className="title" align="center">Il mio modello di intervento per lo  sviluppo di scrittura, conteggio, lettura  </h2>
<h5><b>ScriCoLe </b></h5>
<h5>Si basa su un approccio multidimensionale. Ogni percorso è individuale perché ogni persona apprende in modo diverso dall’altro. Non si tratta di ripetizioni o sostegno pomeridiano. Il percorso riguarda il potenziamento di aree cognitive specifiche (abilità visuospaziali, memoria, attenzione), trainining di abilità strumentali di lettura, scrittura, calcolo, intervento sull’ area emotivo- relazionale su autostima, senso di auotoefficacia e motivazione. Il fine è di conoscere le aree di forza e di debolezza del bambino/ragazzo e impostare un programma che poi a casa si potrà autonomamente portare avanti prevedendo degli incontri di monitoraggio. Una parte importante dell’intervento è rivolta al raccordo con insegnanti e genitori per la condivisione degli obiettivi e per la conusulenza/formazione sugli strumenti  da utilizzare, che potranno essere, schede, software, app, giochi. Il percorso  Si struttura in cicli di 10 incontri a cui segue valutazione congiunta con i genitori per la verifica degli obiettivi raggiunti ed eventualmente il rinnovo. </h5>
<h5><b>	Percorso di sviluppo delle abilità strumentali-prerequisito degli apprendimenti    ScriCoLe 1 </b></h5>
<h5>Rivolto a bambini di 5/6 anni che mostrano qualche difficoltà a ha l’obiettivo di potenziare  le abilità di analisi visiva, discriminazione uditiva, abilità metafonologiche, memoria uditiva, abilità logiche matematiche, attraverso giochi. Giochi di parole, rime, conte, filastrocche per imparare a “smontare e rimontare le parole” e  a lavorare con le quantità. </h5>

<h5><b>Percorso di potenziamento delle abilità scolastiche età 6/10 ScriCoLe 2  </b></h5>
<h5>Per bambini della scuola primaria che incontrano difficoltà in una o più aree degli apprendimenti: lettura, comprensione del testo, scrittura, abilità matematiche. Il percorso comprende più approcci metodologici: quello della narrazione didattica prevede la trattazioni di argomenti con il racconto di  storie appositamente costruite. Molto in breve: ascoltando le  favole  si viene calati in una realtà virtuale potente che fa attivare l’attenzione  e di conseguenza il processo di memorizzazione dei contenuti è facilitato. Altri  metodi  usati sono: il metodo  analogico di Camillo Bortolato in cui suoni e quantità hanno associazioni visive che facilitano la loro composizione e scomposizione e  l’approccio metacognitivo proposto dal gruppo di ricerca dell’Università di Padova che aiuta il bambino ad autocontrollare e  ad autovalutare il modo in cui lavora.  </h5>
<h5><b>	Percorso di potenziamento delle abilità scolastiche per preadolescenti e adolescenti ScriCoLe 3  </b></h5>
<h5>Il percorso è incentrato soprattutto allo sviluppo di abilità metacognitive,  attività guidate a pensare a come imparo: a come leggo, quali strategie uso per ricordare e analizzare un testo, come mi approccio alla risoluzione di un testo. Il lavoro svolto insieme al ragazzo si basa anche  sulla  costruzione di un metodo e  di strategie di studio adeguate a scuola e nell’affrontare i compiti a casa.  Una parte del percorso  è dedicata ad  analizzare gli aspetti emotivi-relazionali e motivazionali legati allo studio con particolare riferimento al senso di autoefficacia e  all’autostima. </h5>
<h5>LABORATORI PER TUTTI <br/>

LAB-METODO Studiare consapevolmente conviene enormemente <br/>
LAB-ANSIA MATTA Meno preoccupazioni più riflessioni <br/>
LAB-GAME TRAINER Allenare il cervello con il gioco è più bello <br/>
</h5>
<h5><b>Per approfondire…
La mia visione di apprendimento e gli obiettivi che ne derivano nel mio modello di intervento 
</b></h5>
<img
              alt="..."
              className=""
              src={require("assets/img/apprendimento/apprendimento1.png")}
            />
            <img
              alt="..."
              className=""
              src={require("assets/img/apprendimento/apprendimento2.png")}
            />





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

