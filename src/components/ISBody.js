import React, { Component } from 'react'
import {Container,Row,Col} from "reactstrap";
import Training from './Training';
import ISCard from './ISCard';
import Language from './Language'
export default class ISBody extends Component {
  render() {
    return (
   <div style={{marginLeft:"40px"}}>
 
        <Row>
          <Col xs="3" ><ISCard/></Col>
          <Col xs="auto" ><Training/></Col>
          <Col xs="3" ><Language/></Col>
        </Row>
  
        </div>
    )
  }
}
