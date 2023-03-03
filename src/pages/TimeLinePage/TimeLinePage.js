import React from "react";
import "./TimeLinePage.css";
import { Container, Row, Col } from "react-grid-system";

import TopNavComponent from "../../components/TopNavComponent/TopNavComponent";
import CreatePostComponent from "../../components/CreatePostComponen/CreatePostComponent";
import FilterPostComponent from "../../components/FilterPostComponent/FilterPostComponent";
import Card from "../../components/PremiumComponent/PremiumComponent";

function TimeLinePage() {
  return (
    <div>
      <TopNavComponent />
      <div className="time_line_main_div">
        <Container>
          <Row>
            <Col sm={12} xs={12} md={8}>
              <CreatePostComponent />
              <FilterPostComponent />
            </Col>

            <Col sm={1} md={1}></Col>
            <Col sm={12} md={3} className="premium">
              <Card />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default TimeLinePage;
