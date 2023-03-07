import React from "react";
import "./TimeLinePage.css";
import { Container, Row, Col } from "react-grid-system";

import TopNavComponent from "../../components/TopNavComponent/TopNavComponent";
import CreatePostComponent from "../../components/CreatePostComponent/CreatePostComponent";
import FilterPostComponent from "../../components/FilterPostComponent/FilterPostComponent";
import PremiumCardComponent from "../../components/PremiumComponent/PremiumComponent";
import PostsListComponent from "../../components/PostsListComponent/PostsListComponent";
import RecentPostCardComponent from "../../components/RecentPostComponent/RecentPostComponent";

function TimeLinePage() {
  return (
    <div>
      <TopNavComponent />
      <div className="time_line_main_div">
        <Container>
          <Row>
            <Col sm={12} xs={12} md={6}>
              <CreatePostComponent />
              <FilterPostComponent />
            </Col>

            <Col sm={1} md={1}></Col>
            <Col sm={12} md={3} className="premium">
              <PremiumCardComponent />
            </Col>
          </Row>
          <Row>
            <Col sm={12} xs={12} md={6} className="post-list-container">
              <PostsListComponent />
            </Col>
            <Col sm={1} md={1}></Col>
            <Col sm={12} md={3} className="premium">
              <div style={{marginTop:"20px"}}>
                <RecentPostCardComponent />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default TimeLinePage;
