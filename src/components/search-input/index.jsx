import React from "react";
import "./style.scss";
import { Input } from "antd";
import Close from "../../components/close-icon";
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
