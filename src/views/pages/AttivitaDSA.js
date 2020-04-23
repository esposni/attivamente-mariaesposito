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
// import AlertDialogSlide from "components/PopUpButton.js";

export default function AttivitaDSA() {
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
        title="ATTIVITA AREA APPRENDIMENTO - DSA"
        image="bg8.jpg" />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto " md="8">
              
              <h2 className="title" align="center">Certificazione dei disturbi specifici di apprendimento</h2>
              <h5>Faccio parte dell’equipe psicopedagogica del Centro La Fenice, autorizzata da ATS Brianza ad effettuare prima certificazione diagnostica valida ai fini scolastici secondo quanto previsto dalla Legge 170/2010. La sede del centro è a Monza, in via Manzoni, 6.
Per conoscere tutti i servizi del centro e l’equipe con cui lavoro visita il sito </h5>
<h5><a href="www.lafeniceassistenza.it">www.lafeniceassistenza.it</a> </h5>
<h5><b>Servizi che puoi trovare accedendo al mio studio:</b></h5>
<h2 className="title" align="center">Trattamento dei disturbi specifici di apprendimento </h2>
<h5>Molto spesso capita che una volta ottenuta la diagnosi e la certificazione  con la prescrizione  degli strumenti compensativi e dispensativi si pensa che il percorso sia giunto a conclusione in realtà è appena iniziato. </h5>
<h5><b>Si può migliorare </b></h5>
<h5>  Gli effetti della dislessia da adulti dipenderanno dalla severità del disturbo, dall’età in cui è stato diagnosticato e dalla qualità del supporto avuto a casa, a scuola e in ambito sanitario. Le ricerche hanno dimostrato che si può migliorare nell’area critica per quasi tutti i bambini a patto che l’intervento sia di un certo tipo.</h5>

<h5><b>Caratteristiche di un buon intervento</b></h5>
<h5><ul>
  <li>	Si deve basare su un modello chiaro e su evidenze scientifiche </li>
  <li>Deve essere effettuato da specialisti</li>
  <li>è dominio- specifica il che vuol dire che ad esempio, se l’area critica è la lettura  prenderà come riferimento il parametro “correttezza”, con la misura del numero di errori e/o il parametro velocità, con la misura delle sillabe al secondo, se è l’area critica è il sistema di calcolo, si prenderà in esame il numero di errori e la velocità nel calcolo a mente, oppure si può avere l’obiettivo di lavorare sulla memoria di lavoro o l’attenzione. </li>
  <li>Deve essere misurabile con misurazioni pre e post </li>
  <li>Deve essere caratterizzato da un lavoro costante, intenso e prolungato anche con cicli  </li>
</ul></h5>

<h5><b> Caratteristiche del mio intervento</b></h5>
<h5>Molto spesso a problemi di lettura, scrittura e calcolo, si associano debolezze nelle aree della memoria di lavoro e attenzione. Per questo è utile potenziare con appositi training questi aspetti di funzionamento cognitivo in associazione al lavoro più specifico sulle abilità scolastiche. L’intervento è rivolto a bambini e ragazzi fino ai 13 anni. Si svolge a cicli di 10 incontri nell’arco di tempo di due mesi in cui è importante un allenamento breve (anche 20 minuti) di almeno 3 giorni alla settimana. Risulta evidente il coinvolgimento attivo della famiglia nell’intervento  per la gestione dei suoi aspetti pratici/organizzativi ma soprattutto per il ruolo motivante che possono svolgere i genitori. In affiancamento al lavoro individuale con il bambino è previsto un intervento di parent training con incontri psicoeducativi finalizzati alla comprensione, condivisione e gestione della situazione. Orientamento e consulenza per la gestione degli ausili informatici compensativi e dei compiti a casa. 
Incontri di consulenza agli insegnanti per collaborare alla realizzazione di un piano didattico personalizzato e per monitorare l’andamento degli apprendimenti nel corso dell’anno. 
</h5>
<h5><b>Strumenti del mio intervento :
Utilizzo la piattaforma di riabilitazione on line RIDInet 
</b></h5>
<h5>RIDInet è un servizio online per la riabilitazione dei Disturbi Specifici dell’Apprendimento e i Disturbi del Linguaggio che permette di unire l’ intervento in studio  con l’ esercizio da casa
RIDInet risponde alle raccomandazioni cliniche sui DSA emerse dalla Consensus Conference e in particolare dal documento d’intesa PARCC 2001 perché permette un esercizio continuativo e controllato a casa. Lo specialista sceglie e personalizza i percorsi con le app sulla base delle esigenze del bambino, dà l’accesso alla piattaforma, assegna gli esercizi e monitora il lavoro effettuato e i miglioramenti raggiunti .  
</h5>
<h5><b>L’INTERO PERCORSO PUO’ ESSERE EFFETTUATO ON LINE SOTTO IL CONTROLLO DELLO SPECIALISTA,

PER MAGGIORNI INFORMAZIONI CONTATTAMI 
</b></h5>
<h2 className="title" align="center">Temi di approfondimento </h2>
<h5><b> Cosa si intende per DSA </b></h5>
<h5>I Disturbi Specifici di Apprendimento sono caratteriste dell’individuo fondate su base neurobiologica che comportano difficoltà gravi in aree di apprendimento come la lettura e/o la scrittura e/o il calcolo in assenza di esclusione di fattori fisici o emotivo-affettivo o ambientali. La Legge 170/2010 riconosce e descrive questi disturbi. Sono specifici perché riguardano solo alcuni processi di apprendimento, cioè automatismi che non si sviluppano durante il percorso scolastico , la capacità di leggere ad un certa velocità, di scrivere senza errori con grafia leggibile, di effettuare procedure di calcolo a mente e scritto. </h5>
<h5><b> Che differenza c’è tra difficoltà e  disturbo  apprendimento? </b></h5>
<h5>Parliamo di difficoltà considerando una qualsiasi problema riscontrato nel corso dello studio, può essere dovuto a fattori personali, sociali e ambientali è una situazione modificabile con interventi mirati. Il disturbo ha cause neurobiologiche ed è resistente all’intervento.  </h5>
<h5><b> Che differenza c’è tra valutazione diagnostica e certificazione dei disturbi di apprendimento</b></h5>
<h5>Per diagnosi si intende un giudizio clinico attestante una patologia o un disturbo. 
Per certificazione si intende un documento con valore legale che attesta il diritto dell’interessato ad avvalersi delle misure previste da precise disposizioni di legge in questo caso gli strumenti compensativi e dispensativi  L170/2010
La certificazione di DSA è fatta servizi pubblici e strutture accreditate da ATS da un’equipe composta da neuropsichiatra infantile, psicologo e logopedista e si svolge seguendo un iter diagnostico ben definito che comprende uso di test standardizzati.
</h5>
<h5><b>Cosa si intende per trattamento?</b></h5>
<h5>Nel caso di DSA non si riabilitano delle capacità perse ma si abilitano le persone a raggiungere obiettivi di miglioramento con interventi specialistici , strategie e strumenti didattici adatti al suo profilo di funzionamento
Si intende un intervento specialistico di tipo clinico 
In base a quanto raccomandato nella Consensus Conference (2007), nel Panel di aggiornamento e Revisione della Consensus Conference (2011) e nella Consensus Conference dell’Istituto Superiore di Sanità (2011),
Il trattamento deve essere iniziato quanto più precocemente possibile,
Il trattamento è parte di un progetto di “presa in carico” e deve essere condiviso tra la famiglia, il bambino e gli operatori sanitari coinvolti. Il trattamento si deve basare su un modello chiaro e su evidenze scientifiche e va regolato sulla base dell’effettiva efficacia dimostrabile. Si ritiene che un trattamento sia efficace quando migliora l’evoluzione di un processo più della sua evoluzione naturale; in altre parole, un trattamento per la dislessia è efficace se migliora la correttezza ed i tempi di lettura più di quanto queste sarebbero migliorate naturalmente con lo sviluppo e con la normale attività didattica.
</h5>
<h5><ul>
  <li>	Dominio-specifica, quindi il riabilitatore deve intervenire sugli ambiti specifici della difficoltà. Ovvero lavorerà sulla lettura, e se necessario sul linguaggio in quanto suo prerequisito, per la dislessia. Per la disortografia interverrà sulla scrittura, e se necessario sul linguaggio in quanto suo prerequisito. Per la disgrafia lavorerà sull’ortografia e se necessario sulla motricità fine in quanto suo prerequisito. Per la discalculia lavorerà sul sistema del calcolo e dei numeri e, quando necessario, sulla memoria a breve termine e sulle abilità visuo-spaziali in quanto suoi prerequisiti</li>
   <li>Intensiva, ovvero richiede un trattamento di 2-3 volte a settimana, meglio se incrementato con ulteriori esercitazioni da fare a casa tutti i giorni per poco tempo al giorno. </li> 
<li>Prolungata, si tratta di cicli ripetuti di almeno 3 mesi di trattamento, da realizzare ambulatorialmente e/o a domicilio. </li>
<li>Effettuata da specialisti sanitari, nel caso specifico: logopedisti, in alcune regioni neuropsicomotricisti, e psicologi esperti nella riabilitazione neuropsicologica.</li>

</ul></h5>







              </Col>
            </Row>
          
          </Container>
        </div>

        {/* <div className="section section-team text-center">
          <Container>
            <h2 className="title">Dove trovarmi</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/studio-milano.jpg")}
                    ></img>
                    <h4 className="title">Centro Mindfulness Milano</h4>
                 
                   
                    Via Cenisio, 5 <br/>
                    Per contattarmi: 338 2331754
                    
                   
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/studio2.png")}
                    ></img>
                    <h4 className="title">Studio privato</h4>
                  
                    Via Auguadri 22 Como
               
                   
                  </div>
                </Col>
               
              </Row>
            </div>
          </Container>
        </div> */}
        <FormMessage/>
        <DefaultFooter />
      </div>
    </>
  );
}

