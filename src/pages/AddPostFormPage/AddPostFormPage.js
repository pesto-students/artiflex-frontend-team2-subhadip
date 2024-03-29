import React from "react";
import "./AddPostFormPage.css";
import { Container, Row, Col } from "react-grid-system";

import TopNavComponent from "../../components/TopNavComponent/TopNavComponent";
import AddPostFormComponent from "../../components/AddPostFormComponent/AddPostFormComponent";
import AnimCursorComponent from "../../components/AnimCursorComponent/AnimCursorComponent";

function TimeLinePage() {
  return (
    <div>
      <TopNavComponent />
      <AnimCursorComponent />
      <div className="add_post_main_div">
        <Container>
          <Row>
            <Col sm={1} md={2}></Col>
            <Col sm={12} xs={12} md={6}>
              <AddPostFormComponent />
            </Col>

            <Col sm={1} md={1}></Col>
            <Col sm={12} md={3} className="premium"></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default TimeLinePage;
