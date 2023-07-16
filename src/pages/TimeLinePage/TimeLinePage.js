import React, { useCallback } from "react";
import "./TimeLinePage.css";
import { Container, Row, Col } from "react-grid-system";
import { Button } from "@cred/neopop-web/lib/components";

import TopNavComponent from "../../components/TopNavComponent/TopNavComponent";
import CreatePostComponent from "../../components/CreatePostComponent/CreatePostComponent";
import FilterPostComponent from "../../components/FilterPostComponent/FilterPostComponent";
import PremiumCardComponent from "../../components/PremiumComponent/PremiumComponent";
import PostsListComponent from "../../components/PostsListComponent/PostsListComponent";
import RecentPostCardComponent from "../../components/RecentPostComponent/RecentPostComponent";
import AnimCursorComponent from "../../components/AnimCursorComponent/AnimCursorComponent";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllPosts } from "../../redux/post/postSlice";
import { useSelector } from "react-redux";

function TimeLinePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authState = useSelector((state) => state.auth.data);

  localStorage.setItem("token", authState.token);
  var token = localStorage.getItem("token");

  const [isLoading, setIsLoading] = React.useState(false);

  const [allPosts, setAllPosts] = React.useState([]);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  // const authState = useSelector((state) => state.auth.data);

  // console.log(authState);

  const usersAllPosts = useCallback(
    async (payload = {}) => dispatch(getAllPosts(payload)).unwrap(),
    []
  );

  const loadAllPosts = async () => {
    startLoading(); // start the loader
    try {
      const payload = {};
      const res = await usersAllPosts(payload);
      stopLoading();
      setAllPosts(res);
    } catch (error) {
      stopLoading();
    }
  };

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/", { replace: true });
    } else {
      loadAllPosts();
    }
  }, []);

  return (
    <div>
      {/* <TopNavComponent /> */}
      <TopNavComponent />
      <AnimCursorComponent />
      <div id="down"></div>
      <div className="time_line_main_div">
        <Container>
          <Row>
            <Col sm={1} md={2}></Col>
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
            <Col sm={1} md={2}></Col>
            <Col sm={12} xs={12} md={6} className="post-list-container">
              <PostsListComponent allPostsArr={allPosts} />
            </Col>
            <Col sm={1} md={1}></Col>
            <Col sm={12} md={3} className="recentpost">
              <div style={{ marginTop: "20px" }}>
                <RecentPostCardComponent />
              </div>
              <a href="#down">
                <div className="to-top-button">
                  <Button
                    variant="secondary"
                    kind="elevated"
                    size="small"
                    // style={{ position: "fixed" }}
                    // fullWidth="true"
                    colorConfig={{
                      backgroundColor: "#f0622c",
                      edgeColors: { right: "yellow", bottom: "yellow" },
                      borderColor: "black",
                      color: "black",
                    }}
                  >
                    Back to Top
                  </Button>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default TimeLinePage;
