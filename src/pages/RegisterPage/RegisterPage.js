import { Typography, HorizontalDivider } from "@cred/neopop-web/lib/components";
import {
  FontVariant,
  colorPalette,
  fontNameSpaces,
} from "@cred/neopop-web/lib/primitives";
import styled from "styled-components";
import { ElevatedCard, Button } from "@cred/neopop-web/lib/components";

// import { Container, Col, Row } from "react-grid-system";
import "./RegisterPage.css";
import PrimaryButtonComponent from "../../components/PrimaryButtonComponent/PrimaryButtonComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ContentWrapper = styled.div`
  padding: 30px;
`;

const RegisterPage = () => {
  const navigate = useNavigate();

  const [registerFormdata, setregisterFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneno: "",
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

  const Register = () => {
    axios
      .post("http://localhost:8080/auth/signup", {
        first_name: registerFormdata.firstname,
        last_name: registerFormdata.lastname,
        email: registerFormdata.email,
        mobile_no: registerFormdata.phoneno,
        password: registerFormdata.password,
      })
      .then((res) => {
        console.log(res);
        navigate("/loginpage", { replace: true });
      })
      .catch((error) => {
        // console.error(error);
      });
  };

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
                {/* <PrimaryButtonComp
                  text="Login with google"
                  size="medium"
                  color="black"
                  borderColor="black"
                />
                <HorizontalDivider color={colorPalette.popBlack[100]} /> */}
                <form className="input_form_fields">
                  <InputComponent
                    label="First Name"
                    type="text"
                    maxLength={20}
                    id="firstname"
                    inputMode="text"
                    // onChange={(e) => setName(e.target.value)}
                    onChange={handleChange}
                    name="firstname"
                  />

                  <InputComponent
                    label="Last Name"
                    type="text"
                    maxLength={20}
                    id="lastname"
                    inputMode="text"
                    // onChange={(e) => setName(e.target.value)}
                    onChange={handleChange}
                    name="lastname"
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

                  {/* <InputComponent
                    label="Aadhar no"
                    type="text"
                    maxLength={12}
                    id="aadharno"
                    inputMode="numeric"
                    // onChange={(e) => setAadar(e.target.value)}
                    onChange={handleChange}
                    name="aadharno"
                  /> */}

                  <InputComponent
                    label="Phone number"
                    type="text"
                    maxLength={10}
                    id="phoneno"
                    inputMode="numeric"
                    // onChange={(e) => setAadar(e.target.value)}
                    onChange={handleChange}
                    name="phoneno"
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
                <PrimaryButtonComponent
                  text="Register"
                  size="medium"
                  color="black"
                  borderColor="black"
                  onClick={Register}
                />
              </ContentWrapper>
            </ElevatedCard>
          </div>
          <div>
            <Typography {...fontNameSpaces.tc12b} color="white">
              Already have an account
              <Button
                kind="link"
                color="white"
                onClick={() => navigate("/loginpage", { replace: true })}
                style={{ marginInline: "8px" }}
              >
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
