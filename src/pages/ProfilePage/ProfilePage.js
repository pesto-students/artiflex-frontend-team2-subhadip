// import React from "react";
import "./ProfilePage.css";
import React, { useCallback } from "react";

// import { Button } from "@cred/neopop-web/lib/components";
// import { store } from "../../redux/store";

import TopNavComponent from "../../components/TopNavComponent/TopNavComponent";
import AnimCursorComponent from "../../components/AnimCursorComponent/AnimCursorComponent";
import ProfileInfoComponent from "../../components/ProfileInfoComponent/ProfileinfoComponent";
import PremiumCardComponent from "../../components/PremiumComponent/PremiumComponent";
import RecentPostCardComponent from "../../components/RecentPostComponent/RecentPostComponent";
import { Container, Row, Col } from "react-grid-system";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPostBasedOnUser } from "../../redux/post/postSlice";

import PostsListComponent from "../../components/PostsListComponent/PostsListComponent";

const ProfilePage = () => {
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth.data.user._id);

  const [allPosts, setAllPosts] = React.useState([]);

  const allPostsBasedOnUser = useCallback(
    async (payload = { user_id: "" }) =>
      dispatch(getPostBasedOnUser(payload)).unwrap(),
    []
  );

  const loadPostBasedOnUser = async () => {
    try {
      const payload = { user_id: authState };

      const res = await allPostsBasedOnUser(payload);
      console.dir(res);

      // stopLoading();
      setAllPosts(res);
    } catch (error) {
      // stopLoading();
    }
  };

  React.useEffect(() => {
    loadPostBasedOnUser();
  }, []);

  // console.log(allPosts);

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
            <PostsListComponent allPostsArr={allPosts} />
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
