import React from "react";
import "./ProfileInfoComponent.css";
import {
  ElevatedCard,
  Column,
  Row,
  Typography,
  HorizontalSpacer,
  Tag,
  Button,
} from "@cred/neopop-web/lib/components";
import { Container, Col } from "react-grid-system";
import { RiPencilLine } from "react-icons/ri";

import {
  mainColors,
  colorPalette,
  colorGuide,
  fontNameSpaces,
  getButtonConfig,
  FontVariant,
} from "@cred/neopop-web/lib/primitives";
import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 20px;
`;

const ProfileInfoComponent = () => {
  return (
    <div className="profile_outer_div">
      <ElevatedCard
        backgroundColor="#1a1a1b"
        edgeColors={{
          bottom: "#5C1532",
          right: "#851E49",
        }}
      >
        <ContentWrapper>
          <Column>
            <Row className="justify">
              <div className="profile-pic">
                <img src="https://images.unsplash.com/photo-1601219992101-9c6430278e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxmYWNlJTIwZGlnaXRhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
              </div>
              <Col className="profile-details">
                <Typography {...FontVariant.CirkaHeadingBold20} color="white">
                  Zaphod Beeblebrox
                </Typography>
                <Typography
                  {...FontVariant.BodyRegular16}
                  color={mainColors.yellow}
                >
                  Illustrator and Graphic designer
                </Typography>
                <Typography
                  {...FontVariant.BodyRegular11}
                  color={mainColors.yellow}
                >
                  Banglore, Karnataka , India
                </Typography>
                <div style={{ width: "70px" }}>
                  <Tag
                    colorConfig={{
                      background: mainColors.yellow,
                      color: "black",
                    }}
                  >
                    10 posts
                  </Tag>
                </div>
                <Typography {...FontVariant.BodyRegular10} color="#FF426F">
                  The Bored Ape Yacht Club is a collection of 10,000 unique
                  Bored Ape NFTs— unique digital collectibles living on the
                  Ethereum blockchain.
                </Typography>
              </Col>
              <div className="icons">
                <Row
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                  className="h-center v-center active-status-border"
                >
                  <div className="active-status" />
                </Row>
                <Row
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: `1px solid ${mainColors.white}`,
                  }}
                  className="h-center v-center edit-outer-div"
                >
                  <RiPencilLine className="edit-icon icon" />
                </Row>
              </div>
            </Row>
            <HorizontalSpacer n={4} />
          </Column>
        </ContentWrapper>
      </ElevatedCard>
    </div>
  );
};

export default ProfileInfoComponent;
