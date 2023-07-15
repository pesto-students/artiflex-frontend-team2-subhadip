import React from "react";
// import "./ViewPostPage.css";
import { useSelector } from "react-redux";

import TopNavComponent from "../../components/TopNavComponent/TopNavComponent";
import PremiumDetailsComponent from "../../components/PremiumDetailsComponent/PremiumDetailsComponent";
import AnimCursorComponent from "../../components/AnimCursorComponent/AnimCursorComponent";

const PremiumPage = () => {
  const authState = useSelector((state) => state.auth.data);

  console.log(authState);
  return (
    <>
      <AnimCursorComponent />
      <TopNavComponent />
      <PremiumDetailsComponent />
    </>
  );
};

export default PremiumPage;
