import React from "react";
import Iframe from 'react-iframe'
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
          <Col className="ml-auto  text-center mr-auto" md="8">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.324071402355!2d9.158814415559013!3d45.66439417910381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bd640645c7c9%3A0x887f76e64cce44d0!2sVia%20Pietro%20Orsi%2C%2019%2C%2020821%20Meda%20MB!5e0!3m2!1sen!2sit!4v1589626159591!5m2!1sen!2sit" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
          <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.324071402355!2d9.158814415559013!3d45.66439417910381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bd640645c7c9%3A0x887f76e64cce44d0!2sVia%20Pietro%20Orsi%2C%2019%2C%2020821%20Meda%20MB!5e0!3m2!1sen!2sit!4v1589626159591!5m2!1sen!2sit"
        width="100%"
        height="450px"
        frameborder="0" 
         allowfullscreen="" aria-hidden="false" tabindex="0"
         styles={{border:0}}
       />
            </Col>
           
          </Row>
        </div>
      </Container>
    </div>
   
);}