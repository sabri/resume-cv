import React from 'react';
import "../App.css";
import {Card} from 'reactstrap'
const Training = () => {
    return (
        <div className="card">

            <h4 style={{textAlign:"center",marginTop:"30px"}}>My Education </h4>
            <Card style={{marginBottom:"15px"}}>
            <div className="train">
                <p className="education">IT engeniering </p>
                <p style={{textAlign:"left",paddingLeft:"10px", margin:"0px"}}><b>Institute :</b> Polytech Centrale IT </p>
                <p style={{textAlign:"left",paddingLeft:"10px", margin:"0px"}}><b>Session :</b> 2018-2019 </p>

            </div>
            </Card>
            <Card style={{marginBottom:"15px"}}>
            <div className="train">
                <p className="education">Research Master degree in Intelligent Systems in Imaging and Artificial Vision </p>
                <p style={{textAlign:"left",paddingLeft:"10px", margin:"0px"}}><b>Institute :</b> Higher Institute of IT Aryanah </p>
                <p style={{textAlign:"left",paddingLeft:"10px", margin:"0px"}}><b>Session :</b> 2012-2015 </p>

            </div>
            </Card>
            <Card style={{marginBottom:"15px"}}>
            <div className="train">
                <p className="education"> Bachlor degree in computer sciences </p>
                <p style={{textAlign:"left",paddingLeft:"10px", margin:"0px"}}><b>Institute :</b> High institute of IT and management kairouan </p>
                <p style={{textAlign:"left",paddingLeft:"10px", margin:"0px"}}><b>Session :</b> 2009-2012 </p>

            </div>
            </Card>
            <Card style={{marginBottom:"15px"}}>
            <div className="train">
                <p className="education"> Baccalaureat diploma in IT section</p>
                <p style={{textAlign:"left",paddingLeft:"10px", margin:"0px"}}><b>Institute :</b> Secondary high school cherarda </p>
                <p style={{textAlign:"left",paddingLeft:"10px", margin:"0px"}}><b>Session :</b> 2009 </p>

            </div>
            </Card>
            <h4 style={{textAlign:"center",marginTop:"30px"}}>My Experiences </h4>
            <Card style={{marginBottom:"15px"}}>
            <div className="train">
                <p className="education"> Final study Internship of Research master thesis in IT</p>
                <p style={{textAlign:"left",paddingLeft:"10px", margin:"0px",fontSize:"14px"}}><b>Descreption :</b> Supervised object detection (segmentation) with prior’s knowledge
Based on CRF model and graph cuts</p>
                <p style={{textAlign:"left",paddingLeft:"10px", margin:"0px"}}><b>Labo:</b>  RIADI-SIIVA ISI ariana </p>
                <p style={{textAlign:"left",paddingLeft:"10px", margin:"0px"}}><b>Session :</b> Jan 2014. – June 2015 </p>

            </div>
            </Card>
            <Card style={{marginBottom:"15px"}}>
            <div className="train">
                <p className="education"> Final study internship of Bachelor degree in computer sciences</p>
                <p style={{textAlign:"left",paddingLeft:"10px", margin:"0px"}}><b>Institute :</b> Secondary high school cherarda </p>
                <p style={{textAlign:"left",paddingLeft:"10px", margin:"0px"}}><b>Session :</b> 2009 </p>

            </div>
            </Card>
        </div>
    );
};

export default Training;