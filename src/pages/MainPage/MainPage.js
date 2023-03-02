import { Typography, HorizontalDivider } from "@cred/neopop-web/lib/components";
import {
  FontVariant,
  colorPalette,
  fontNameSpaces,
} from "@cred/neopop-web/lib/primitives";
import { ElevatedCard, Button } from "@cred/neopop-web/lib/components";
import { Container, Col, Row } from "react-grid-system";
import PrimaryButtonComp from "../../components/PrimaryButtonComponent/PrimaryButtonComponent";
import PrimaryButtonLight from "../../components/PrimaryButtonLight/PrimaryButtonLight";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import styled from "styled-components";
import { MdSecurity, MdPayment, MdOutlineVerified } from "react-icons/md";

import React from "react";
import "./MainPage.css";
import SecondaryButtonLight from "../../components/SecondryButtonLight/SecondryButtonLight";

export const MainPage = () => {
  return (
    <>
      <div className="main_page_top">
        <navbar className="navbar_section">
          <div className="logo"></div>

          <div className="nav_menu">
            <a href="#">
              <Typography {...fontNameSpaces.tc12b} color="white">
                Artist
              </Typography>
            </a>
            <a href="#">
              <Typography {...fontNameSpaces.tc12b} color="white">
                Exhibition
              </Typography>
            </a>
            <a href="#">
              <Typography {...fontNameSpaces.tc12b} color="white">
                Market
              </Typography>
            </a>
          </div>

          <div className="right_section">
            <div>
              <PrimaryButtonLight text="Register" size="medium" />
            </div>
            <div>
              <PrimaryButtonLight text="Login" size="medium" />
            </div>
          </div>
        </navbar>
        <div className="hero_main">
          <div className="hero_section">
            <Typography
              {...fontNameSpaces.tc12b}
              color="white"
              fontSize={100}
              fontWeight={800}
              fontType="Heading"
            >
              ARTIFLEX
            </Typography>

            <div className="artiflex_motive">
              <Typography
                {...fontNameSpaces.tc12b}
                color="white"
                fontSize={30}
                fontWeight={700}
                fontType="SemiBold"
              >
                CREATE BUY & SELL
              </Typography>
            </div>

            <div className="artiflex_intro">
              <Typography {...fontNameSpaces.tc12b} color="white">
                Introducing the ultimate platform for artists- where creativity
                meets commerce. With our platform you can showcase and sell your
                art to global audience with ease.
              </Typography>
            </div>
            <div className="center_button">
              <SecondaryButtonLight text="Connect Wallet" size="medium" />
              <SecondaryButtonLight text="Post Your Art" size="medium" />
            </div>
          </div>

          <div className="outer_section">
            <div className="hero_section_back"></div>
            <div className="hero_head">
              <Typography {...fontNameSpaces.tc12b} color="Black">
                The Hunt
              </Typography>
            </div>
            <div className="img_section"></div>

            <div className="demo_button">
              <PrimaryButtonComp text="PRICE" size="medium" />
              <PrimaryButtonComp text="2 TOKEN" size="medium" />
            </div>

            {/* <div className="bid_button">
              <SecondaryButton text=" Bid Now " size="big" 
              />
            </div> */}
          </div>
        </div>
      </div>

      <div className="space"></div>

      <div className="main_page_bottom">
        <div className="security_card">
          <Typography {...fontNameSpaces.tc12b} color="black">
            <MdSecurity /> Strong Security
          </Typography>
        </div>
        <div className="secure_payment">
          <Typography {...fontNameSpaces.tc12b} color="black">
            <MdPayment />
            Secure Payment
          </Typography>
        </div>
        <div className="market_verified">
          <Typography {...fontNameSpaces.tc12b} color="black">
            <MdOutlineVerified />
            Market Verified
          </Typography>
        </div>
      </div>
    </>
  );
};

export default MainPage;
