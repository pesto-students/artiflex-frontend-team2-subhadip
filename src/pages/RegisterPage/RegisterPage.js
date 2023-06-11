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
import React, { useCallback } from "react";
import { ToastContainer } from "@cred/neopop-web/lib/components";
import { showToast } from "@cred/neopop-web/lib/components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authSlice";
import AnimCursorComponent from "../../components/AnimCursorComponent/AnimCursorComponent";

const ContentWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  // const Register = () => {
  //   axios
  //     .post("http://localhost:8080/auth/signup", {
  //       first_name: registerFormdata.firstname,
  //       last_name: registerFormdata.lastname,
  //       email: registerFormdata.email,
  //       mobile_no: registerFormdata.phoneno,
  //       password: registerFormdata.password,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       navigate("/login", { replace: true });
  //     })
  //     .catch((error) => {
  //       // console.error(error);
  //     });
  // };

  const userRegister = useCallback(
    async (
      payload = {
        first_name: "",
        last_name: "",
        email: "",
        mobile_no: "",
        password: "",
      }
    ) => dispatch(register(payload)).unwrap(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleRegister = async () => {
    try {
      const payload = {
        first_name: registerFormdata.firstname,
        last_name: registerFormdata.lastname,
        email: registerFormdata.email,
        mobile_no: registerFormdata.phoneno,
        password: registerFormdata.password,
      };

      const res = await userRegister(payload);
      console.log(res);
      showToast("Register Successful", {
        type: "success",
        autoCloseTime: 2000,
      });
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 2000); // delay navigation by 2 seconds (same as autoCloseTime)
    } catch (error) {
      showToast(
        "The login credentials provided are invalid. Please try again with the correct email and password combination.",
        {
          type: "error  ",
          autoCloseTime: "5000",
        }
      );
    }
  };

  return (
    <div className="register_page">
      <div className="form_section_outer_div">
        <div className="logo"></div>
        <section className="form_section">
          <AnimCursorComponent />
          <ElevatedCard
            className="form"
            backgroundColor="#fff0e5"
            edgeColors={{
              bottom: "yellow",
              right: "yellow",
            }}
            style={{
              width: "50%",
            }}
          >
            <ContentWrapper>
              <Typography {...fontNameSpaces.tc12b} color="black">
                Welcome
              </Typography>
              <HorizontalDivider color={colorPalette.popBlack[100]} />

              {/* <PrimaryButtonComp
                  text="Login with google"
                  size="medium"
                  color="black"
                  borderColor="black"
                />
              <HorizontalDivider color={colorPalette.popBlack[100]} /> */}
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
              <ActionWrapper>
                <PrimaryButtonComponent
                  text="Register"
                  size="medium"
                  color="black"
                  borderColor="black"
                  onClick={handleRegister}
                />
              </ActionWrapper>
            </ContentWrapper>
          </ElevatedCard>
          {/* </div> */}
          <div>
            <Typography {...fontNameSpaces.tc12b} color="white">
              Already have an account
              <Button
                kind="link"
                color="white"
                onClick={() => navigate("/login", { replace: true })}
                style={{ marginInline: "8px" }}
              >
                Login
              </Button>
            </Typography>
          </div>
        </section>
        <ToastContainer />
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
