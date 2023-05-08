import React, { useCallback } from "react";

import { RiHeartAddLine, RiDiscussLine, RiShareLine } from "react-icons/ri";
import PrimaryButtonComponent from ".././PrimaryButtonComponent/PrimaryButtonComponent";
import SecondaryButtonComp from "../SecondaryButton/SecondaryButton";

import { ref, listAll, getDownloadURL } from "firebase/storage";

import { storage } from "../../firebase";

import { getAllPosts } from "../../redux/post/postSlice";

import { useNavigate } from "react-router-dom";

import {
  ElevatedCard,
  Column,
  Row,
  Typography,
  HorizontalSpacer,
} from "@cred/neopop-web/lib/components";
import {
  mainColors,
  colorPalette,
  fontNameSpaces,
} from "@cred/neopop-web/lib/primitives";
import styled from "styled-components";

import "./PostsListComponent.css";

import { useDispatch } from "react-redux";
import Loader from "../LoaderComponent/LoaderComponent";

const ContentWrapper = styled.div`
  padding: 20px;
`;

const PostsListComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);

  // const [imageList, setImageList] = React.useState([]);

  // const imageListRef = ref(storage, "images/");

  const [allPosts, setAllPosts] = React.useState([]);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

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
    loadAllPosts();
  }, []);

  console.log(allPosts);

  // const enableRight = (event) => {
  //   if (event.button == 2) {
  //     alert("Right-click disabled");
  //     event.preventDefault();
  //   }
  // };

  return (
    <>
      {/* if length is There is present */}
      {allPosts.length &&
        allPosts.map((item) => {
          return (
            <ElevatedCard
              backgroundColor="#FFFAE5"
              edgeColors={{
                bottom: "#67FF88",
                right: "#67FF88",
              }}
              style={{ marginBottom: "20px" }}
            >
              <ContentWrapper>
                <Column>
                  <Row className="v-justify">
                    <div>
                      <Row>
                        <RiHeartAddLine className="like-icon" />
                        <Typography
                          {...fontNameSpaces.th16b}
                          color={colorPalette.pinkPong[500]}
                          overflow="ellipsis"
                          style={{ margin: "auto", marginLeft: "5px" }}
                        >
                          {item.likes}
                        </Typography>
                        <HorizontalSpacer n={3} />
                        <Typography
                          {...fontNameSpaces.tc12b}
                          color={mainColors.black}
                          style={{ margin: "auto", marginLeft: "30px" }}
                        >
                          {item.title}
                        </Typography>
                      </Row>
                    </div>
                    <Row
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                      className="h-center v-center active-status-border"
                    >
                      <div className="active-status" />
                    </Row>
                  </Row>
                  <HorizontalSpacer n={5} />
                  <div>
                    {item.post_type === "images" ? (
                      <>
                        <Loader hidden={isLoading} />

                        <img
                          src={item.post_url}
                          // oncontextmenu="alert('Right-click disabled'); return false;"
                          className="image-style"
                          alt="postmedia"
                          // onContextMenu={enableRight}
                        />
                      </>
                    ) : item.post_type === "text" ? (
                      <>
                        <Loader hidden={isLoading} />

                        <Typography
                          className="description"
                          {...fontNameSpaces.tc12b}
                          color={mainColors.black}
                        >
                          {item.description}
                        </Typography>
                      </>
                    ) : (
                      "nothing"
                    )}
                  </div>
                  <HorizontalSpacer n={6} />
                  <Row className="inside-card-footer">
                    <div className="comment-outer-div">
                      <RiDiscussLine className="comment-icon" />
                      <Typography
                        color={mainColors.black}
                        style={{ margin: "auto" }}
                      >
                        {item.comments}Comments
                      </Typography>
                    </div>

                    <div className="share-icon-outer-div">
                      <RiShareLine className="share-icon" />
                      <Typography
                        color={mainColors.black}
                        style={{ margin: "auto" }}
                      >
                        Share
                      </Typography>
                    </div>

                    <div className="button-action">
                      <SecondaryButtonComp
                        size="medium"
                        text="View"
                        onClick={() =>
                          navigate(`/post/${item._id}`, { replace: true })
                        }
                      />
                      <PrimaryButtonComponent size="medium" text="Buy Now" />
                    </div>
                  </Row>
                </Column>
              </ContentWrapper>
            </ElevatedCard>
          );
        })}
    </>
  );
};

export default PostsListComponent;
