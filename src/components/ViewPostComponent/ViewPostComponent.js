import "./ViewPostComponent.css";
import "react-tooltip/dist/react-tooltip.css";
import { useParams } from "react-router-dom";
import { showToast } from "@cred/neopop-web/lib/components";

import { Container, Row, Col } from "react-grid-system";
import { Typography } from "@cred/neopop-web/lib/components";
import { FontVariant } from "@cred/neopop-web/lib/primitives";
import { RiHeart2Line, RiShareLine } from "react-icons/ri";
import PrimaryButtonComponent from "../../components/PrimaryButtonComponent/PrimaryButtonComponent";
import {
  ElevatedCard,
  HorizontalDivider,
} from "@cred/neopop-web/lib/components";

import { Tooltip as ReactTooltip } from "react-tooltip";
import { useDispatch } from "react-redux";

import { getOnePosts } from "../../redux/post/postSlice";
import React, { useCallback } from "react";

const ViewPostComponent = () => {
  const dispatch = useDispatch();

  const { post_id } = useParams("post_id");

  const [postDetails, setPostDetails] = React.useState([]);

  console.log(postDetails);

  const viewPost = useCallback(
    async (payload = { id: "" }) => dispatch(getOnePosts(payload)).unwrap(),
    []
  );

  const loadPost = async () => {
    try {
      // startLoading(); // start the loader
      const payload = {
        id: post_id,
      };
      const res = await viewPost(payload);
      const arr = [];
      arr.push(res);
      setPostDetails(arr);
    } catch (error) {
      // stopLoading();
      showToast("There was an error", {
        type: "error  ",
        autoCloseTime: 5000,
      });
    }
  };

  React.useEffect(() => {
    loadPost();
  }, [1]);

  return (
    <>
      {postDetails.length &&
        postDetails.map((item) => {
          return (
            <div className="view_post_outer_div">
              <ElevatedCard
                backgroundColor="#fff0e5"
                edgeColors={{
                  bottom: "#eefc57",
                  right: "yellow",
                }}
                style={{
                  width: "80%",
                }}
              >
                <Container style={{ margin: 0 }} className="view_post_main_div">
                  <Row>
                    <Col sm={7}>
                      <div className="image-outer-div">
                        <img
                          src={item.post_url}
                          alt="image"
                          className="image-style"
                        ></img>
                      </div>
                    </Col>

                    <Col sm={5} className="details">
                      <div className="title">
                        <Typography
                          color="#660F56"
                          // fontSize={30}
                          fontWeight={500}
                          className="title_name"
                          {...FontVariant.CapsBold10}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          color="#660F56"
                          fontSize={14}
                          fontType="body"
                          fontWeight={400}
                        >
                          Owned by{" "}
                          <a href="https://www.google.com">
                            {item.creater_id.first_name}
                          </a>
                        </Typography>
                        <div className="options">
                          <div className="like-outer-div">
                            <RiHeart2Line className="like" />
                            <Typography
                              className="count"
                              color="#660F56"
                              fontSize={14}
                              fontType="body"
                              fontWeight={400}
                            >
                              {item.like} likes
                            </Typography>
                          </div>
                          <div className="share-icon-outer-div">
                            <a
                              className="my-anchor-element"
                              data-tooltip-content="Copy link"
                            >
                              <RiShareLine
                                className="share-icon"
                                style={{
                                  fill: "#660f56",
                                  fontSize: "30px",
                                  marginTop: "30px",
                                }}
                              />
                            </a>
                            <ReactTooltip
                              type="info"
                              anchorSelect=".my-anchor-element"
                              place="left"
                            />
                            <Typography
                              className="count"
                              color="#660F56"
                              fontSize={14}
                              fontType="body"
                              fontWeight={400}
                            >
                              Share
                            </Typography>
                          </div>
                        </div>
                      </div>

                      <div>
                        <HorizontalDivider color="#8A8A8A" />
                        <Typography
                          color="#660F56"
                          fontSize={16}
                          fontType="body"
                          fontWeight={400}
                        >
                          Current price
                        </Typography>
                        <Typography
                          color="#660F56"
                          // fontSize={30}
                          fontWeight={500}
                          className="price"
                          {...FontVariant.CapsBold10}
                        >
                          {item.post_price} Tokens
                        </Typography>
                        <div className="buttons">
                          <PrimaryButtonComponent
                            size="medium"
                            text="Buy Now"
                          />
                          <PrimaryButtonComponent
                            size="medium"
                            text="Make offer"
                          />
                        </div>
                        <HorizontalDivider color="#8A8A8A" />
                      </div>
                      <div className="description-outer-div">
                        <Typography
                          color="#660F56"
                          className="description-heading "
                          fontWeight={500}
                        >
                          Description
                        </Typography>
                        <Typography
                          color="#660F56"
                          fontSize={16}
                          fontType="body"
                          fontWeight={400}
                        >
                          {item.description}
                        </Typography>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </ElevatedCard>
            </div>
          );
        })}
    </>
  );
};

export default ViewPostComponent;
