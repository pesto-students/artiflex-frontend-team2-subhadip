import React, { useState, useEffect } from "react";
import { HorizontalDivider } from "@cred/neopop-web/lib/components";
import Footer from "../../components/FooterComponent/FooterComponent";
import "./LandingPage.css";
import { Button } from "@cred/neopop-web/lib/components";
import { Typography } from "@cred/neopop-web/lib/components";
import ellipse from "../../assets/Ellipse 1.png";
import flashcard from "../../assets/Group 3.png";
import brandimage from "../../assets/blue.png";
import digitalart from "../../assets/Digital Artworks.svg";
import Photography from "../../assets/Photography.svg";
import andmore from "../../assets/And More....svg";
import Videos from "../../assets/Videos.svg";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import AnimCursorComponent from "../../components/AnimCursorComponent/AnimCursorComponent";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  const navigateToLogin = () => {
    navigate("/login", { replace: true });
  };

  const navigateToRegister = () => {
    navigate("/register", { replace: true });
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isSticky ? "sticky" : ""}>
        <div className="logo"></div>
        <div className="buttons">
          <Button
            variant="primary"
            showArrow
            elevationDirection="top-right"
            colorConfig={{
              backgroundColor: "#FFFFFF40",
              borderColor: "white",
            }}
            onClick={navigateToLogin}
          >
            Log in
          </Button>
          <Button
            variant="primary"
            showArrow
            elevationDirection="top-right"
            colorConfig={{
              backgroundColor: "#FFFFFF40",
              edgeColors: { right: "#111827", bottom: "#111827" },
              borderColor: "white",
              color: "white",
            }}
            onClick={navigateToRegister}
          >
            Sign up
          </Button>
        </div>
      </header>
      <HorizontalDivider color="#8A8A8A" />
      <AnimCursorComponent />
      <div className="outer-div">
        <main>
          <div className="artiflex" onDragStart={handleDragStart}>
            <img src={brandimage} style={{ width: "100%" }} alt="Brand"></img>
          </div>
          <div className="label">
            <Typography
              color="#FFFF00"
              fontSize={20}
              fontType="caps"
              fontWeight={700}
              style={{ letterSpacing: "10px" }}
            >
              CREATE
            </Typography>
            <Typography
              color="#FFFF00"
              fontSize={20}
              fontType="caps"
              fontWeight={700}
              style={{ letterSpacing: "10px" }}
            >
              BUY
            </Typography>
            <Typography
              color="#FFFF00"
              fontSize={20}
              fontType="caps"
              fontWeight={700}
              style={{ letterSpacing: "10px" }}
            >
              SELL
            </Typography>
          </div>
          <div>
            <Typography
              color="#FFFAE5"
              fontSize={16}
              fontType="body"
              fontWeight={500}
              lineClamp={2}
              overflow="ellipsis"
              style={{
                textAlign: "center",
                wordWrap: "break-word",
                maxWidth: "100%",
              }}
            >
              Experience a dynamic marketplace and vibrant social hub in one
              place, where creators can buy, sell, and collaborate to bring
              their artistic visions to life.
            </Typography>
          </div>
          <div className="main-buttons">
            <SecondaryButton size="large" text="Connect Wallet" />
            <SecondaryButton size="large" text="Post your art" />
          </div>
        </main>
        <aside className="banner-image" onDragStart={handleDragStart}>
          <img className="ellipse" src={ellipse} alt="Ellipse" />
          <img className="flashcard" src={flashcard} alt="Card" />
        </aside>
      </div>
      <img src={digitalart} style={{ width: "100%" }}></img>
      <img src={Photography} style={{ width: "100%" }}></img>
      <img src={Videos} style={{ width: "100%" }}></img>
      <img src={andmore} style={{ width: "100%" }}></img>
      <HorizontalDivider color="#8A8A8A" />
      <Footer />
    </>
  );
};

export default LandingPage;
