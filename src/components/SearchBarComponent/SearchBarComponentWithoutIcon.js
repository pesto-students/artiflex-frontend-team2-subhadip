import React from "react";
import { SearchBar } from "@cred/neopop-web/lib/components";

const SearchInputFieldWithoutIcon = () => {
  const handleChange = (value) => {
    console.log("Search query: ", value);
  };
  const handleSubmit = () => {
    console.log("Search query submitted");
  };

  return (
    <SearchBar
      placeholder="Create Post"
      colorConfig={{backgroundColor:"#272729",border:"grey"}}
      inputColorConfig={{textColor:"white",placeholderColor:"white"}}
      handleSearchInput={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default SearchInputFieldWithoutIcon;
