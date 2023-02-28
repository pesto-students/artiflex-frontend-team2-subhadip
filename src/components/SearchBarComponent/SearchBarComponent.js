import React from "react";
import { SearchBar } from "@cred/neopop-web/lib/components";
import { colorGuide } from "@cred/neopop-web/lib/primitives";

const SearchInputField = () => {
  const handleChange = (value) => {
    console.log("Search query: ", value);
  };
  const handleSubmit = () => {
    console.log("Search query submitted");
  };

  return (
    <SearchBar
      iconUrl="https://cdn-icons-png.flaticon.com/512/482/482631.png"
      placeholder="search query here"
      colorConfig={colorGuide.lightComponents.searchBar}
      inputColorConfig={colorGuide.lightComponents.inputFields}
      handleSearchInput={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default SearchInputField;
