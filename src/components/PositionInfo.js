import React from "react";
import {
   
    Container,
    Row,
    Col
  } from "reactstrap";

export default function PositionInfo() {

    return (
      <div className="section section-team text-center">
      <Container>
        <h2 className="title">Dove trovarmi</h2>
        <div className="team">
          <Row>
            <Col md="4">
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/studio_pos.png")}
                ></img>
                {/* <h4 className="title">Studio</h4> */}
                <br/> <br/>
               <h5>
               Via Pietro Orsi, 19
                Meda (MB), 20821
              <br/>
              Tel: 339 5321446
              </h5>
               
              </div>
            </Col>
           
          </Row>
        </div>
      </Container>
    </div>
   
);}