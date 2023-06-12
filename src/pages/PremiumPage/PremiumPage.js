import React from "react";
// import "./ViewPostPage.css";

import TopNavComponent from "../../components/TopNavComponent/TopNavComponent";
import PremiumDetailsComponent from "../../components/PremiumDetailsComponent/PremiumDetailsComponent";
import AnimCursorComponent from "../../components/AnimCursorComponent/AnimCursorComponent";

const PremiumPage = () => {
  return (
    <>
      <AnimCursorComponent />
      <TopNavComponent />
      <PremiumDetailsComponent />
    </>
  );
};

export default PremiumPage;
