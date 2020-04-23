import React from "react";

// reactstrap components
import {
  // Button,
  // NavItem,
  // NavLink,
  // Nav,
  // TabContent,
  // TabPane,
  Container,
  // Row,
  // Col,
  // UncontrolledTooltip
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import FormMessage from"components/FormMessage.js";

function ProfilePage() {
  // const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <h3 className="title">Chi sono</h3>
            <h5 >
            Mi sono laureata in psicologia ad indirizzo clinico e di comunità nel 1993 e ho ottenuto l’abilitazione all’esercizio della professione presso l’Università di Padova. Dal 1996 sono iscritta all’albo degli psicologi della Lombardia e lavoro come libera professionista. Nel  2002 ho conseguito il master biennale in  psicologia scolastica presso  il Centro Bruner. Dal 2018 faccio parte dell’equipe dell’associazione La Fenice, Centro per i disturbi del linguaggio e dell’apprendimento in età evolutiva, struttura accreditata da ATS Brianza per la prima certificazione DSA. Accompagno l’attività clinica  in studio con l’attività di consulente a scuola e ad Enti.  
In questi anni il mio interesse verso il tema del processo di apprendimento mi ha portato a realizzare  progetti in diverse scuole del territorio: sportello di ascolto psicologico,  percorsi di formazione per genitori, alunni e insegnanti sui temi dei DSA e difficoltà di apprendimento; interventi di sviluppo della motivazione e del metodo  di studio, di potenziamento delle abilità di memoria, ragionamento e attenzione rivolti al gruppo classe.
Sul tema della disabilità in età evolutiva, ho curato i progetti di Anfass Seregno: “Accorciamo le distanze”, progetto di sensibilizzazione sui diritti dei disabili rivolto alle scuole elementari e “ Gruppo Sibling per bambini e preadolescenti” rivolto ai fratelli di bambini con disabilità.
Lavoro da circa 16 anni anche nel campo dell’orientamento scolastico e professionale. Sono  accredita come professionista di orientamento dall’associazione SIO (Società Italiana di Orientamento), associazione che nasce dal gruppo di ricerca del Larios dell’Università di Padova. Ho realizzato vari  percorsi di formazione per docenti e genitori e di consulenza orientativa rivolta agli alunni delle medie e superiori in diversi istituti scolastici.   Sono consulente presso vari Enti accreditati per i servizi di formazione e lavoro, realizzo percorsi di orientamento e accompagnamento al lavoro di persone svantaggiate e disabili, in rete con i servizi territoriali e percorsi di formazione di gruppo volti allo sviluppo  di  competenze trasversali. 

            </h5>
          
            {/* <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">My Portfolio</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons location_world"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i className="now-ui-icons sport_user-run"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg1.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg11.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row> */}
          </Container>
          <FormMessage/>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;
