import React from "react";
import { Link } from "react-router-dom";

import "./MenuBtn.scss";

const MenuBtn = () => {
  return (
    <div className='menu d_flex a_items_center'>
      <Link to="/menu">
        <div className='menu-btn'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Link>
    </div>
  );
};

export default MenuBtn;