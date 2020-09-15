import React from "react";
import { Input } from "antd";
import Close from "../close-icon/CloseIcon";

import "./SearchInput.scss";
import "./responsive.scss";

const { Search } = Input;

function SearchInput() {
  return (
    <div className="search-input">
      <Search
        placeholder="Search for other subscriber"
        onSearch={(value) => console.log(value)}
        style={{ width: 200 }}
      />
      <Close />
    </div>
  );
}

export default SearchInput;
