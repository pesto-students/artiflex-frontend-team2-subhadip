import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./TopNavComponent.css";
import SearchInputField from "../../components/SearchBarComponent/SearchBarComponent";
import {
  RiQuestionAnswerLine,
  RiNotification4Line,
  RiWallet2Line,
  RiShoppingBagLine,
  RiUserLine,
} from "react-icons/ri";

const TopNavComponent = () => {
  return (
    <Container fluid className="topnav_outer_div">
      <Row>
        <Col xs={4} md={2}>
          <div className="logo"></div>
        </Col>
        <Col xs={3} md={7.5} className="search_bar">
          <SearchInputField />
        </Col>
        <Col xs={1} md={0.5} className="chat">
          <RiQuestionAnswerLine
            style={{ fill: "white", fontSize: "25px", margin: "auto" }}
          />
        </Col>
        <Col xs={1} md={0.5} className="notification">
          <RiNotification4Line
            style={{ fill: "white", fontSize: "25px", margin: "auto" }}
          />
        </Col>
        <Col xs={1} md={0.5} className="wallet">
          <RiWallet2Line
            style={{ fill: "white", fontSize: "25px", margin: "auto" }}
          />
        </Col>
        <Col xs={1} md={0.5} className="kart">
          <RiShoppingBagLine
            style={{ fill: "white", fontSize: "25px", margin: "auto" }}
          />
        </Col>
        <Col xs={1} md={0.5} className="profile">
          <RiUserLine
            style={{ fill: "white", fontSize: "25px", margin: "auto" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TopNavComponent;
