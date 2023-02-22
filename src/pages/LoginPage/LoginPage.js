import { Typography, HorizontalDivider } from "@cred/neopop-web/lib/components";
import {
  FontVariant,
  colorPalette,
  fontNameSpaces,
} from "@cred/neopop-web/lib/primitives";
import styled from "styled-components";
import { ElevatedCard, Button } from "@cred/neopop-web/lib/components";

import { Container, Col, Row } from "react-grid-system";
import "./LoginPage.css";
import PrimaryButtonComp from "../../components/PrimaryButtonComponent/PrimaryButtonComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import DarkButtonComp from "../../components/DarkButtonComponent/DarkButtonComponent";
import React from "react";

const ContentWrapper = styled.div`
  padding: 30px;
`;

const LoginPage = () => {
  const [LoginFormdata, setloginFormData] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setloginFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.id]: event.target.value,
      };
    });
  }

  console.log(LoginFormdata);

  return (
    <div className="login_page">
      <div className="form_section_outer_div">
        <div className="logo"></div>
        <section className="form_section">
          <div>
            <ElevatedCard
              className="form"
              backgroundColor="#fff0e5"
              edgeColors={{
                bottom: "yellow",
                right: "yellow",
              }}
              style={{
                width: "100%",
              }}
            >
              <ContentWrapper
                className="content_wrapper"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "30px",
                  border: "1px solid black",
                }}
              >
                <Typography {...fontNameSpaces.tc12b} color="black">
                  Welcome
                </Typography>
                <PrimaryButtonComp text="Login with google" size="medium" />
                <HorizontalDivider color={colorPalette.popBlack[100]} />

                <form className="input_form_fields">
                  <InputComponent
                    label="Email"
                    type="email"
                    maxLength={30}
                    id="email"
                    inputMode="email"
                    onChange={handleChange}
                    name="email"
                  />

                  <InputComponent
                    label="Password"
                    type="password"
                    maxLength={20}
                    id="password"
                    inputMode="password"
                    onChange={handleChange}
                    name="password"
                  />
                </form>

                <PrimaryButtonComp text="Login" size="small" />
              </ContentWrapper>
            </ElevatedCard>
          </div>
          <div className="login_button">
            <Typography {...fontNameSpaces.tc12b} color="white">
              Dont have an account
              <DarkButtonComp size="small" text="Sign in" />
            </Typography>
          </div>
        </section>
      </div>

      <section className="image_section">
        <Typography
          color="white"
          style={{ width: "70%", textAlign: "center" }}
          fontSize={40}
          fontWeight={700}
        >
          Discovery,Sell & Create Digital Content
        </Typography>
      </section>
    </div>
  );
};

export default LoginPage;
