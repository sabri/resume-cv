import React, { Component } from 'react'
import "../App.css";
import Sticky from "react-sticky-el"
import { FaRegEnvelope, FaPhone, FaFacebook, FaGithub, FaLinkedin, FaCalendarAlt, FaInstagram } from 'react-icons/fa'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
export default class ISCard extends Component {
  render() {
    return (
      <div style={{padding: "none" }} >
<Sticky>
        <Card style={{ marginBottom: "10px", border: "1px solid #848484" ,width:"80%"}}>
          <CardImg top width="100%" height="250px" src="s.jpg" alt="Sabri" />
          <CardBody style={{ fontWeight: "400", color: "black" }}>
            <CardTitle> Baazaoui Mohamed Sabri</CardTitle>
            <CardSubtitle>Software engeniering student</CardSubtitle>
            <CardText>Polytech Centrale IT </CardText>
            <CardText style={{ textAlign: "center" }}><FaFacebook />&nbsp;&nbsp;<FaGithub />&nbsp;&nbsp;<FaLinkedin />&nbsp;&nbsp;<FaInstagram /></CardText>

          </CardBody>
        </Card>
        <Card body style={{ marginBottom: "10px", textAlign: "left", border: "1px solid #848484",width:"80%"}}>
          <CardTitle> <a href="mailto:baazaouisabri@gmail.com?Subject=Hello%20again" target="_top"><FaRegEnvelope />&nbsp;&nbsp;Baazaouisabri@gmail.com</a></CardTitle>
          <CardTitle> <FaPhone />&nbsp;&nbsp;+216-21956837</CardTitle>
          <CardTitle> <FaRegEnvelope />&nbsp;&nbsp;Rue ali darghouth tunis</CardTitle>
          <CardTitle> <img src="t.png" alt='tunisia' />&nbsp;&nbsp;Tunisia</CardTitle>
          <CardTitle> <FaCalendarAlt />&nbsp;&nbsp;30/01/1990</CardTitle>

        </Card>
        </Sticky>
     
      </div>
     
    )
  }
}
