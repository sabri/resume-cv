import React from 'react';
import Sticky from 'react-sticky-el'
import { Card, CardTitle } from 'reactstrap';

const Language = () => {
    return (
        <div>
        <Sticky>
        <Card body style={{ marginBottom: "10px", border: "1px solid #848484", textAlign: "left" , width:"80%" }}>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardTitle>Special Title Treatment</CardTitle>
        </Card>
        <Card body style={{ marginBottom: "10px", border: "1px solid #848484", textAlign: "left" , width:"80%" }}>          <CardTitle>Download My Resume</CardTitle>
          <button className="btnd"><i className="fa fa-download"></i> <a style={{ color: "white" }} href="https://drive.google.com/file/d/1bzGCQ6yl1UpgzbHdmaki8PpLloKFROfk/view">Download</a></button>

        </Card>
        </Sticky>
        </div>
    );
};

export default Language;