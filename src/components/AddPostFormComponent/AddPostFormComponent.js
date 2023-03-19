import { Row, Col } from "react-grid-system";
// import SecondaryButtonComp from "../../components/SecondaryButton/SecondaryButton";
import "./AddPostFormComponent.css";
import { colorPalette } from "@cred/neopop-web/lib/primitives";
import { HorizontalDivider } from "@cred/neopop-web/lib/components";
// import SearchInputFieldWithoutIcon from "../SearchBarComponent/SearchBarComponentWithoutIcon";
import InputComponent from "../InputComponent/InputComponent";
import React from "react";

import { Typography } from "@cred/neopop-web/lib/components";
import PrimaryButtonComponent from "../PrimaryButtonComponent/PrimaryButtonComponent";

const AddPostFormComponent = () => {
  const [PostFormData, SetPostFormdata] = React.useState({
    title: "",
    description: "",
  });
  function handleChange(event) {
    SetPostFormdata((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.id]: event.target.value,
      };
    });
  }

  console.log(PostFormData);

  return (
    <Row
      className="add_post_form_outer_div"
      style={{ backgroundColor: "#1a1a1b" }}
    >
      <Typography
        className="title"
        color="white"
        fontSize={25}
        style={{ marginLeft: "2%" }}
      >
        Create a Post
      </Typography>
      <HorizontalDivider
        color={colorPalette.popBlack[100]}
        style={{ width: "95%", margin: "auto" }}
      />
      <Col sm={12} xs={12} md={12} className="title-field">
        {/* <SearchInputFieldWithoutIcon title="Title" onChange={handleChange} /> */}
        <Typography
          //   className="title"
          color="grey"
          //   fontSize={25}
        >
          Title
        </Typography>
        <InputComponent
          //   label="Title"
          type="text"
          maxLength={50}
          id="title"
          inputMode="text"
          onChange={handleChange}
          name="title"
          style={{ backgroundColor: "grey" }}
        />
      </Col>
      <Col sm={12} xs={12} md={12} className="text-area">
        <label for="description" id="description-title">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="5"
          cols="33"
          style={{ color: "white" }}
          onChange={handleChange}
        ></textarea>
      </Col>
      <HorizontalDivider
        color={colorPalette.popBlack[100]}
        style={{ width: "95%", margin: "auto" }}
      />
      <Col style={{ marginBlock: "15px", textAlign: "end" }}>
        <PrimaryButtonComponent size="medium" text="Post" />
      </Col>
    </Row>
  );
};

export default AddPostFormComponent;
