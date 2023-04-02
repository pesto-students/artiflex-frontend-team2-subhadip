import { Row, Col } from "react-grid-system";
// import SecondaryButtonComp from "../../components/SecondaryButton/SecondaryButton";
import "./AddPostFormComponent.css";

import { colorPalette } from "@cred/neopop-web/lib/primitives";
import { HorizontalDivider } from "@cred/neopop-web/lib/components";
// import SearchInputFieldWithoutIcon from "../SearchBarComponent/SearchBarComponentWithoutIcon";
import InputComponent from "../InputComponent/InputComponent";
import React, { useEffect } from "react";

import { Typography } from "@cred/neopop-web/lib/components";
import PrimaryButtonComponent from "../PrimaryButtonComponent/PrimaryButtonComponent";
import { storage } from "../../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";
import { ToastContainer } from "@cred/neopop-web/lib/components";
import { showToast } from "@cred/neopop-web/lib/components";
import { useNavigate } from "react-router-dom";

const AddPostFormComponent = () => {
  const navigate = useNavigate();

  const [currentSection, setCurrentSection] = React.useState("post");

  const [imageUpload, setImageUpload] = React.useState(null);

  const [PostFormData, SetPostFormdata] = React.useState({});

  const [PostFormDataImage, SetPostFormdataImage] = React.useState({});

  function handleChange(event) {
    SetPostFormdata((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.id]: event.target.value,
      };
    });
  }

  function handleChangeImage(event) {
    SetPostFormdataImage((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.id]: event.target.value,
      };
    });
  }

  const uploadImage = () => {
    if (imageUpload === null) {
      showToast("Please choose an image to Upload", {
        type: "error",
        autoCloseTime: "5000",
      });
    }
    const file_name = `images/${imageUpload.name + v4()}`;

    const imageRef = ref(storage, file_name);

    SetPostFormdataImage((prevFormData) => {
      return {
        ...prevFormData,
        url: file_name,
      };
    });

    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded");
    });
  };

  //function to toggle between the sections
  function toggleFormSection(section) {
    setCurrentSection(section);
  }

  //api call function
  async function createPost(type) {
    try {
      if (type === "textpost") {
        await axios.post("http://localhost:8080/auth/createpost", {
          title: PostFormData.email,
          description: PostFormData.password,
          post_url: "",
          post_type: type,
          tags: "",
        });
        showToast("Sample toast message", {
          type: "success",
          autoCloseTime: "5000",
        });
        navigate("/timelinepage", { replace: true });
      } else {
        await axios.post("http://localhost:8080/auth/createpost", {
          title: PostFormData.imagetitle,
          post_url: PostFormData.url,
          post_type: type,
        });
        showToast("Sample toast message", {
          type: "success",
          autoCloseTime: "5000",
        });
        navigate("/timelinepage", { replace: true });
      }
    } catch (error) {
      console.log(error);
      showToast("There was an error in posting.", {
        type: "error",
        autoCloseTime: "5000",
      });
    }
  }

  console.log(PostFormData);
  console.log(PostFormDataImage);

  return (
    <Row className="add_post_form_outer_div">
      <Typography className="title" color="white" fontSize={25}>
        Create a Post
      </Typography>
      <HorizontalDivider
        color={colorPalette.popBlack[100]}
        style={{ width: "95%", margin: "auto" }}
      />
      <ToastContainer />
      <Col sm={12} xs={12} md={12} className="sections">
        <label>
          <input
            type="radio"
            name="option"
            value="post"
            onClick={() => toggleFormSection("post")}
          />
          Post
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="images"
            onClick={() => toggleFormSection("images")}
          />
          Images
        </label>
      </Col>

      {currentSection === "post" && (
        <>
          <Col sm={12} xs={12} md={12} className="title-field">
            <Typography color="grey">Title</Typography>
            <InputComponent
              className="texttitle"
              type="text"
              maxLength={50}
              id="title"
              inputMode="text"
              onChange={handleChange}
              name="title"
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
              onChange={handleChange}
            ></textarea>
          </Col>
          <HorizontalDivider
            color={colorPalette.popBlack[100]}
            style={{ width: "95%", margin: "auto" }}
          />
        </>
      )}

      {currentSection === "images" && (
        <Col sm={12} xs={12} md={12} className="image">
          <Typography color="grey">Title</Typography>
          <InputComponent
            type="text"
            maxLength={50}
            id="imagetitle"
            inputMode="text"
            onChange={handleChangeImage}
            name="imagetitle"
          />

          <input
            className="choosefile"
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <button onClick={uploadImage}>Upload image</button>
        </Col>
      )}

      <Col className="form-footer">
        <PrimaryButtonComponent
          size="medium"
          text="Post"
          onClick={createPost}
        />
      </Col>
    </Row>
  );
};

export default AddPostFormComponent;
