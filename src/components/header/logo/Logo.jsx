  
import React from "react";
import { Link } from "react-router-dom";

import "./Logo.scss";

const Logo = () => {
  return (
    <div className='logo'>
      <Link to="/logo">
        <img src={require("../../../assets/img/logo.png")} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;