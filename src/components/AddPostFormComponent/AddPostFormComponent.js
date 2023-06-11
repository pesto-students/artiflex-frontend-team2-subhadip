import { Row, Col } from "react-grid-system";
// import SecondaryButtonComp from "../../components/SecondaryButton/SecondaryButton";
import "./AddPostFormComponent.css";

import { colorPalette } from "@cred/neopop-web/lib/primitives";
import { HorizontalDivider } from "@cred/neopop-web/lib/components";
// import SearchInputFieldWithoutIcon from "../SearchBarComponent/SearchBarComponentWithoutIcon";
import InputComponent from "../InputComponent/InputComponent";
import React, { useCallback, useEffect } from "react";

import { Typography } from "@cred/neopop-web/lib/components";
import PrimaryButtonComponent from "../PrimaryButtonComponent/PrimaryButtonComponent";
import { storage } from "../../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

import { ToastContainer } from "@cred/neopop-web/lib/components";
import { showToast } from "@cred/neopop-web/lib/components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPost, createPostForImage } from "../../redux/post/postSlice";
import { useDropzone } from "react-dropzone";
import Loader from "../LoaderComponent/LoaderComponent";

const AddPostFormComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState(false);

  const [currentSection, setCurrentSection] = React.useState("post");

  const [imageUpload, setImageUpload] = React.useState(null);

  const [PostFormData, SetPostFormdata] = React.useState({});

  const [PostFormDataImage, SetPostFormdataImage] = React.useState({});

  const [files, setFiles] = React.useState([]);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setFiles([
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ]);
      console.log(acceptedFiles);
      settingImageToUpload({ target: { files: acceptedFiles } }); // call the function here
    },
  });

  const images = files.map((file) => (
    <img
      key={file.name}
      src={file.preview}
      alt="image"
      style={{ width: "200px", height: "200px" }}
    />
  ));

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

  console.log(PostFormDataImage);
  console.log(PostFormData);

  function settingImageToUpload(event) {
    setImageUpload(event.target.files[0]);
  }

  const uploadImage = async () => {
    try {
      if (imageUpload === null) {
        showToast("Please choose an image to Upload", {
          type: "error",
          autoCloseTime: "5000",
        });
      }
      const file_name = `images/${imageUpload.name}`;

      const imageRef = ref(storage, file_name);

      const snapshot = await uploadBytes(imageRef, imageUpload);
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log("Download URL", downloadURL);
      return downloadURL;
    } catch (error) {
      console.log(error);
    }
  };

  //function to toggle between the sections
  function toggleFormSection(section) {
    setCurrentSection(section);
  }

  const userPost = useCallback(
    async (payload = { title: "", description: "", post_type: "" }) =>
      dispatch(createPost(payload)).unwrap(),
    []
  );

  const userPostImage = useCallback(
    async (
      payload = {
        title: "",
        description: "",
        post_url: "",
        post_type: "",
        // for_sell: "",
        // post_price: "",
      }
    ) => dispatch(createPostForImage(payload)).unwrap(),
    []
  );

  //api call to the backend
  const handleCreatePost = async (type) => {
    if (type == "post") {
      try {
        startLoading(); // start the loader
        const payload = {
          title: PostFormData.title,
          description: PostFormData.description,
          post_type: "text",
          tags: "remove it later",
        };

        const res = await userPost(payload);
        stopLoading();
        showToast("Post added Successfully", {
          type: "success",
          autoCloseTime: 2000,
        });
        setTimeout(() => {
          navigate("/timeline", { replace: true });
        }, 2000); // delay navigation by 2 seconds (same as autoCloseTime)
      } catch (error) {
        stopLoading();
        showToast("There was an error uploading the post", {
          type: "error  ",
          autoCloseTime: 5000,
        });
      }
    } else {
      try {
        startLoading(); // start the loader
        const downloadURL = await uploadImage();
        const payload = {
          title: PostFormDataImage.imagetitle,
          description: PostFormDataImage.imagedescription,
          post_url: downloadURL,
          post_type: type,
          tags: "sup",
          // for_sell: PostFormDataImage.imagePostPrice,
          // post_price: PostFormDataImage.imageSellPrice,
        };
        const res = await userPostImage(payload);
        stopLoading();
        showToast("Post added Successfully", {
          type: "success",
          autoCloseTime: 2000,
        });
        setTimeout(() => {
          navigate("/timeline", { replace: true }); //redirect to his own profile page
        }, 2000); // delay navigation by 2 seconds (same as autoCloseTime)
      } catch (error) {
        stopLoading();
        showToast("There was an error uploading the post", {
          type: "error  ",
          autoCloseTime: 5000,
        });
      }
    }
  };

  // console.log(PostFormData);
  // console.log(PostFormDataImage);

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
        <PrimaryButtonComponent
          size="small"
          text="Post"
          onClick={() => toggleFormSection("post")}
        />
        <PrimaryButtonComponent
          size="small"
          text="Image"
          onClick={() => toggleFormSection("images")}
        />
      </Col>

      {currentSection === "post" && (
        <>
          <Col sm={12} xs={12} md={12} className="title-field">
            <Loader hidden={isLoading} />
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
          <Loader hidden={isLoading} />
          <Typography color="grey">Title</Typography>
          <InputComponent
            type="text"
            maxLength={50}
            id="imagetitle"
            inputMode="text"
            onChange={handleChangeImage}
            name="imagetitle"
          />
          <Typography color="grey">Description</Typography>
          <textarea
            id="imagedescription"
            name="imagedescription"
            rows="4"
            maxLength={300}
            onChange={handleChangeImage}
          ></textarea>

          <div className="dropArea" {...getRootProps()}>
            <input {...getInputProps()} />
            <p className="text">Drag and drop here or click here</p>
            <div className="preview">{images}</div>
          </div>

          <Typography color="grey">Post Price</Typography>
          <InputComponent
            type="number"
            id="imagePostPrice"
            inputMode="number"
            onChange={handleChangeImage}
            name="imagePostPrice"
          />

          <Typography color="grey">Sell Price</Typography>
          <InputComponent
            type="number"
            id="imageSellPrice"
            inputMode="number"
            onChange={handleChangeImage}
            name="imageSellPrice"
          />
        </Col>
      )}

      <Col className="form-footer">
        <PrimaryButtonComponent
          size="medium"
          text="Cancel"
          onClick={() => navigate("/timeline", { replace: true })}
        />

        <PrimaryButtonComponent
          size="medium"
          text="Post"
          onClick={() => handleCreatePost(currentSection)}
        />
      </Col>
    </Row>
  );
};

export default AddPostFormComponent;
