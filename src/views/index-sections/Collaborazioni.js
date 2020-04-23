import React from "react";
// import { Link } from "react-router-dom";
// reactstrap components
import {  Container, Row } from "reactstrap";

// core components

export default function Collaborazioni() {
  return (
    <>
      <div className="section section-examples" data-background-color="black">
        <div className="space-50"></div>
        <Container className="text-center">
         <h3 className="title">Collaborazioni</h3>
          <Row>
            
            {/* <div className="col">
              <a href="http://centromindfulnessmilano.com/myportfolio/simone-spina/" target="_blank" rel="noopener noreferrer" >
              <h3 className="title">Simone Spina</h3>
              </a>
            </div> */}
          </Row>
        </Container>
      </div>
    </>
  );
}

