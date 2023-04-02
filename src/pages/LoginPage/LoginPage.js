import { Typography, HorizontalDivider } from "@cred/neopop-web/lib/components";
import { colorPalette, fontNameSpaces } from "@cred/neopop-web/lib/primitives";
import styled from "styled-components";
import { ElevatedCard } from "@cred/neopop-web/lib/components";

import PrimaryButtonComponent from "../../components/PrimaryButtonComponent/PrimaryButtonComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import DarkButtonComponent from "../../components/DarkButtonComponent/DarkButtonComponent";
import React, { useCallback } from "react";

import { useNavigate } from "react-router-dom";
import { ToastContainer } from "@cred/neopop-web/lib/components";
import { showToast } from "@cred/neopop-web/lib/components";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authSlice";

import "./LoginPage.css";

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

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  /**
   * Redux action for login api
   * @date 02/04/2023 - 17:06:51
   *
   * @type {Promise<object>}
   */
  const userLogin = useCallback(
    async (payload = { email: "", password: "" }) =>
      dispatch(login(payload)).unwrap(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  /**
   * Handle the form data change
   * @date 02/04/2023 - 17:05:56
   *
   * @param {*} event
   */
  const handleChange = (event) => {
    setLoginFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.id]: event.target.value,
      };
    });
  };

  /**
   * Login handler function for login button click
   * @date 02/04/2023 - 17:09:01
   *
   * @async
   * @returns {void}
   */
  const handleLogin = async () => {
    try {
      const payload = {
        email: loginFormData.email,
        password: loginFormData.password,
      };
      const res = await userLogin(payload);
      console.log(res);
      localStorage.set("accessToken", res.token);
      showToast("Login Successful", {
        type: "success",
        autoCloseTime: "2000",
      });
      navigate("/timeline", { replace: true });
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

  /**
   * Navigate to register page
   * @date 02/04/2023 - 17:08:31
   */
  const navigateToRegister = () => {
    navigate("/register", { replace: true });
  };

  return (
    <div className="login_page">
      <div className="form_section_outer_div">
        <div className="logo"></div>
        <section className="form_section">
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
              {/* <PrimaryButtonComponent text="Login with google" size="medium" /> */}
              <HorizontalDivider color={colorPalette.popBlack[100]} />

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
              <ActionWrapper>
                <PrimaryButtonComponent
                  text="Login"
                  size="small"
                  color="black"
                  borderColor="black"
                  onClick={handleLogin}
                />
              </ActionWrapper>
            </ContentWrapper>
          </ElevatedCard>

          <div>
            <Typography {...fontNameSpaces.tc12b} color="white">
              Dont have an account
              <DarkButtonComponent
                size="small"
                text="Sign in"
                onClick={navigateToRegister}
              />
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
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
