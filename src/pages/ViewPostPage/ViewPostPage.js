import React from "react";
import "./ViewPostPage.css";

import TopNavComponent from "../../components/TopNavComponent/TopNavComponent";
import ViewPostComponent from "../../components/ViewPostComponent/ViewPostComponent";
import AnimCursorComponent from "../../components/AnimCursorComponent/AnimCursorComponent";

const ViewPostPage = () => {
  return (
    <>
      <AnimCursorComponent />
      <TopNavComponent />
      <ViewPostComponent />
    </>
  );
};

export default ViewPostPage;
