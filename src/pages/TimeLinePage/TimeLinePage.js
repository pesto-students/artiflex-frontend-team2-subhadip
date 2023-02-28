import React from "react";
import "./TimeLinePage.css";

import TopNavComponent from "../../components/TopNavComponent/TopNavComponent";
import { Container, Row, Col } from "react-grid-system";
// import { InputField } from "@cred/neopop-web/lib/components";
import SearchInputField from "../../components/SearchBarComponent/SearchBarComponent";

const TimeLinePage = () => {
  return (
    <div>
      <TopNavComponent />
      <Container>
        <Row>
          <Col sm={4} style={{ height: "75px" }}>
            <div></div>
          </Col>
          <Col sm={4} style={{ backgroundColor: "teal", height: "35px" }}>
            One of three columns
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TimeLinePage;
