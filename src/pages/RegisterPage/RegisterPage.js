import { Typography, HorizontalDivider } from "@cred/neopop-web/lib/components";
import {
  FontVariant,
  colorPalette,
  fontNameSpaces,
} from "@cred/neopop-web/lib/primitives";
import styled from "styled-components";
import { ElevatedCard, Button } from "@cred/neopop-web/lib/components";

import { Container, Col, Row } from "react-grid-system";
import "./RegisterPage.css";
import PrimaryButtonComp from "../../components/PrimaryButtonComponent/PrimaryButtonComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import React from "react";

const ContentWrapper = styled.div`
  padding: 30px;
`;

const RegisterPage = () => {
  const [registerFormdata, setregisterFormData] = React.useState({
    name: "",
    email: "",
    aadhar_no: "",
    password: "",
  });

  function handleChange(event) {
    setregisterFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.id]: event.target.value,
      };
    });
  }

  console.log(registerFormdata);

  return (
    <div className="register_page">
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
                  gap: "20px",
                  border: "1px solid black",
                }}
              >
                <Typography {...fontNameSpaces.tc12b} color="black">
                  Welcome
                </Typography>
                <PrimaryButtonComp
                  text="Login with google"
                  size="medium"
                  color="black"
                  borderColor="black"
                />
                <HorizontalDivider color={colorPalette.popBlack[100]} />
                <form className="input_form_fields">
                  <InputComponent
                    label="Name"
                    type="text"
                    maxLength={20}
                    id="name"
                    inputMode="text"
                    // onChange={(e) => setName(e.target.value)}
                    onChange={handleChange}
                    name="name"
                  />

                  <InputComponent
                    label="Email"
                    type="email"
                    maxLength={30}
                    id="email"
                    inputMode="email"
                    // onChange={(e) => setEmail(e.target.value)}
                    onChange={handleChange}
                    name="email"
                  />

                  <InputComponent
                    label="Aadhar no"
                    type="text"
                    maxLength={12}
                    id="aadhar_no"
                    inputMode="numeric"
                    // onChange={(e) => setAadar(e.target.value)}
                    onChange={handleChange}
                    name="aadharno"
                  />

                  <InputComponent
                    label="Password"
                    type="password"
                    maxLength={20}
                    id="password"
                    inputMode="password"
                    // onChange={(e) => setPassword(e.target.value)}
                    onChange={handleChange}
                    name="password"
                  />
                </form>
                <PrimaryButtonComp
                  text="Register"
                  size="small"
                  color="black"
                  borderColor="black"
                />
              </ContentWrapper>
            </ElevatedCard>
          </div>
          <div>
            <Typography {...fontNameSpaces.tc12b} color="white">
              Already have an account
              <Button kind="link" color="white" style={{ marginInline: "8px" }}>
                Login
              </Button>
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

export default RegisterPage;
