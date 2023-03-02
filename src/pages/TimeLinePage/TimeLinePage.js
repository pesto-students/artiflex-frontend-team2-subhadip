import React from "react";
import "./TimeLinePage.css";
import { Container, Row, Col } from "react-grid-system";

import TopNavComponent from "../../components/TopNavComponent/TopNavComponent";
import CreatePostComponent from "../../components/CreatePostComponen/CreatePostComponent";
import SecondaryButtonComp from "../../components/SecondaryButton/SecondaryButton";

function TimeLinePage() {
  return (
    <div>
      <TopNavComponent />
      <div className="time_line_main_div">
        <Container>
          <Row>
            <Col sm={12} xs={12} md={8}>
              <CreatePostComponent />

              <Row
                className="filter_post_outer_div"
                style={{ backgroundColor: "#1a1a1b", height: "60px" }}
              >
                <Col xs={2} md={2}>
                  <div className="all_button">
                    <SecondaryButtonComp size="medium" text="All" />
                  </div>
                </Col>
                <Col xs={2} md={2}>
                  <div className="art_button">
                    <SecondaryButtonComp size="medium" text="Art" />
                  </div>
                </Col>
                <Col xs={2} md={2}>
                  <div className="ads_button">
                    <SecondaryButtonComp size="medium" text="Ads" />
                  </div>
                </Col>
                <Col xs={2} md={2}>
                  <div className="others_button">
                    <SecondaryButtonComp size="medium" text="Others" />
                  </div>
                </Col>
              </Row>
            </Col>

            <Col sm={1}></Col>
            <Col sm={3} style={{ backgroundColor: "teal", height: "200px" }}>
              One of three columns
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default TimeLinePage;
