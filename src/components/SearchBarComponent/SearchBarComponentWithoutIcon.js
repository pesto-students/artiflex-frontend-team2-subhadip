import React from "react";
import { SearchBar } from "@cred/neopop-web/lib/components";
import { useNavigate } from "react-router-dom";

const SearchInputFieldWithoutIcon = (props) => {
  const navigate = useNavigate();

  const onclick = () => {
    navigate("/addpostformpage", { replace: true });
  };

  const handleSubmit = () => {
    console.log("Search query submitted");
  };

  return (
    <SearchBar
      placeholder={props.title}
      // placeholder="Create Post"
      colorConfig={{ backgroundColor: "#272729", border: "grey" }}
      inputColorConfig={{ textColor: "white", placeholderColor: "white" }}
      handleSearchInput={onclick}
      onSubmit={handleSubmit}
    />
  );
};

export default SearchInputFieldWithoutIcon;
