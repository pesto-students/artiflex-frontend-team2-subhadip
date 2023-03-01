import React from "react";
import "./TimeLinePage.css";
import { Container, Row, Col } from "react-grid-system";


import TopNavComponent from "../../components/TopNavComponent/TopNavComponent";
import CreatePostComponent from "../../components/CreatePostComponen/CreatePostComponent";



function TimeLinePage() {
  return (
    <div>
      <TopNavComponent />

      <Container>
        <Row>
          <Col sm={12} xs={12} md={8}>


            <CreatePostComponent />
            <CreatePostComponent />

            
            



          </Col>
          <Col sm={1}>

          </Col>
          <Col sm={3} style={{ backgroundColor: "teal", height: "500px" }}>
            One of three columns
          </Col>
        </Row>
      </Container>



    </div>
  );
}

export default TimeLinePage;
