import React from "react";
import { Row, Col } from "react-grid-system";
import "./RecentPostComponent.css";
// import PrimaryButtonComp from "../PrimaryButtonComponent/PrimaryButtonComponent";
import { HorizontalDivider } from "@cred/neopop-web/lib/components";
import { colorPalette } from "@cred/neopop-web/lib/primitives";

import {
  ElevatedCard,
  Typography,
  Button,
} from "@cred/neopop-web/lib/components";

import { mainColors, fontNameSpaces } from "@cred/neopop-web/lib/primitives";

import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 20px;
`;

const RecentPostCardComponent = () => {
  return (
    <ElevatedCard
      className="recent-post-outer-div"
      borderColor="white"
      backgroundColor="#fffae5"
      edgeColors={{
        bottom: colorPalette.success[200],
        right: colorPalette.success[200],
      }}
    >
      <ContentWrapper className="recent-post-main-div">
        <Typography
          style={{ marginBottom: "20px" }}
          className="recent_post"
          {...fontNameSpaces.tc12b}
          color={colorPalette.poliPurple[600]}
          // fontSize={25}
        >
          RECENT POSTS
        </Typography>
        <div>
          <Row>
            <Col style={{ maxWidth: "30%" }}>
              {/* <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="image-style" alt="postmedia" /> */}
              <img
                src="https://images.unsplash.com/photo-1590673846749-e2fb8f655df8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                className="image-style-recent-post"
                alt="postmedia"
              />
            </Col>
            <Col>
              <Typography
                style={{ marginBottom: "20px" }}
                className="recent_post"
                {...fontNameSpaces.tc12b}
                color={colorPalette.popBlack[200]}
                // fontSize={25}
              >
                Memento mori
              </Typography>
              <Typography
                color="#F08D32"
                fontSize={10}
                fontType="caps"
                fontWeight={700}
              >
                1.1k points - 141 comments - 1h
              </Typography>
            </Col>
          </Row>
          <HorizontalDivider color="#343536" style={{ marginBlock: "20px" }} />
        </div>
        <div>
          <Row>
            <Col style={{ maxWidth: "30%" }}>
              {/* <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="image-style" alt="postmedia" /> */}
              <img
                src="https://images.unsplash.com/photo-1566363384123-360c5f6bc369?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                className="image-style-recent-post"
                alt="postmedia"
              />
            </Col>
            <Col>
              <Typography
                style={{ marginBottom: "20px" }}
                className="recent_post"
                {...fontNameSpaces.tc12b}
                color={colorPalette.popBlack[200]}

                // fontSize={25}
              >
                Memento mori
              </Typography>
              <Typography
                color="#F08D32"
                fontSize={10}
                fontType="caps"
                fontWeight={700}
              >
                1.1k points - 141 comments - 1h
              </Typography>
            </Col>
          </Row>
          <HorizontalDivider color="#343536" style={{ marginBlock: "20px" }} />
        </div>
      </ContentWrapper>
    </ElevatedCard>
  );
};

export default RecentPostCardComponent;
