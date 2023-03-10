import React from "react";
import { SearchBar } from "@cred/neopop-web/lib/components";

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
      placeholder="Search query here"
      colorConfig={{backgroundColor:"#272729",border:"grey"}}
      inputColorConfig={{textColor:"white",placeholderColor:"white"}}
      handleSearchInput={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default SearchInputField;
