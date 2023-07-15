import React, { useCallback } from "react";

import { RiHeartAddLine, RiDiscussLine, RiShareLine } from "react-icons/ri";
import PrimaryButtonComponent from ".././PrimaryButtonComponent/PrimaryButtonComponent";
import SecondaryButtonComp from "../SecondaryButton/SecondaryButton";

// import { ref, listAll, getDownloadURL } from "firebase/storage";

// import { storage } from "../../firebase";
import { useSelector } from "react-redux";

// import { getAllPosts } from "../../redux/post/postSlice";

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

// import { useDispatch } from "react-redux";
import Loader from "../LoaderComponent/LoaderComponent";

const ContentWrapper = styled.div`
  padding: 20px;
`;

const PostsListComponent = ({ allPostsArr }) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth.data.user._id);

  return (
    <>
      {/* if length is There is present */}
      {allPostsArr.length &&
        allPostsArr.map((item) => {
          return (
            <ElevatedCard
              backgroundColor="#FFFAE5"
              edgeColors={{
                bottom: "#eefc57",
                right: "yellow",
              }}
              style={{ marginBottom: "20px" }}
            >
              <ContentWrapper className="post-card">
                <Column>
                  <Row className="v-justify">
                    <div>
                      <Row>
                        <RiHeartAddLine className="like-icon icon" />
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
                      <RiDiscussLine className="comment-icon icon" />
                      <Typography
                        color={mainColors.black}
                        style={{ margin: "auto" }}
                      >
                        {item.comments}Comments
                      </Typography>
                    </div>

                    <div className="share-icon-outer-div">
                      <RiShareLine className="share-icon icon" />
                      <Typography
                        color={mainColors.black}
                        style={{ margin: "auto" }}
                      >
                        Share
                      </Typography>
                    </div>

                    {item.post_type === "images" ? (
                      <div className="button-action">
                        <SecondaryButtonComp
                          size="medium"
                          text="View"
                          onClick={() =>
                            navigate(`/post/${item._id}`, { replace: true })
                          }
                        />

                        {item.user_id._id != authState && (
                          <PrimaryButtonComponent
                            size="medium"
                            text="Buy Now"
                          />
                        )}
                      </div>
                    ) : (
                      ""
                    )}
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
