  
import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

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