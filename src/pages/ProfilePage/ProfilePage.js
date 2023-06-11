import React from "react";
import "./ProfilePage.css";
import { Button } from "@cred/neopop-web/lib/components";

import TopNavComponent from "../../components/TopNavComponent/TopNavComponent";
import AnimCursorComponent from "../../components/AnimCursorComponent/AnimCursorComponent";
import ProfileInfoComponent from "../../components/ProfileInfoComponent/ProfileinfoComponent";
import PremiumCardComponent from "../../components/PremiumComponent/PremiumComponent";
import RecentPostCardComponent from "../../components/RecentPostComponent/RecentPostComponent";
import { Container, Row, Col } from "react-grid-system";
// import PostsListComponent from "../../components/PostsListComponent/PostsListComponent";

const ProfilePage = () => {
  return (
    <>
      <AnimCursorComponent />
      <TopNavComponent />
      <Container className="section1">
        <Row>
          <Col sm={1} md={2}></Col>
          <Col sm={12} xs={12} md={6} className="profile-info-section">
            <ProfileInfoComponent />
          </Col>
          <Col sm={1} md={1}></Col>
          <Col sm={10} md={3} className="premium">
            {/* <PremiumCardComponent /> */}
            <RecentPostCardComponent />
          </Col>
        </Row>
        <Row>
          <Col sm={1} md={2}></Col>
          <Col sm={12} xs={12} md={6} className="post-list-container">
            {/* <PostsListComponent /> */}
          </Col>
          <Col sm={1} md={1}></Col>
          <Col sm={12} md={3} className="recentpost">
            <div style={{ marginTop: "20px" }}>
              {/* <RecentPostCardComponent /> */}
              <PremiumCardComponent />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfilePage;
