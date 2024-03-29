import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./TopNavComponent.css";
import { Typography } from "@cred/neopop-web/lib/components";
import { useNavigate } from "react-router-dom";

import SearchInputField from "../../components/SearchBarComponent/SearchBarComponent";
import {
  RiQuestionAnswerLine,
  RiNotification4Line,
  RiWallet2Line,
  RiShoppingBagLine,
  RiUserLine,
} from "react-icons/ri";

const TopNavComponent = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="topnav_outer_div">
      <Row>
        <Col xs={4} md={3}>
          <div
            className="logo"
            onClick={() => navigate("/timeline", { replace: true })}
          ></div>
        </Col>
        <Col xs={3} md={5.5} className="search_bar">
          <SearchInputField />
        </Col>
        <Col xs={0.5} md={0.5} className="chat">
          <RiQuestionAnswerLine
            style={{ fill: "white", fontSize: "25px", margin: "auto" }}
          />
        </Col>
        <Col xs={0.5} md={0.5} className="notification">
          <RiNotification4Line
            style={{ fill: "white", fontSize: "25px", margin: "auto" }}
          />
        </Col>
        <Col xs={0.5} md={0.5} className="wallet">
          <RiWallet2Line
            style={{ fill: "white", fontSize: "25px", margin: "auto" }}
          />
        </Col>
        <Col xs={0.5} md={0.5} className="kart">
          <RiShoppingBagLine
            style={{ fill: "white", fontSize: "25px", margin: "auto" }}
          />
        </Col>

        <Col
          xs={1.5}
          md={1.5}
          className="profile"
          onClick={() => navigate("/profile", { replace: true })}
        >
          <RiUserLine
            style={{ fill: "white", fontSize: "25px", margin: "auto" }}
          />
          <Typography
            color="white"
            // fontSize={30}
            fontWeight={500}
            // className="title_name"
          >
            Exo Sapien
          </Typography>
        </Col>
      </Row>
    </Container>
  );
};

export default TopNavComponent;
