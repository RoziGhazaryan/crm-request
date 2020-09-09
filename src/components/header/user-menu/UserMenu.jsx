import React from "react";
import User from "./user/User";
import MenuBtn from "./menu-btn/MenuBtn";

import "./UserMenu.scss";
import './responsive.scss';

const UserMenu = () => {
  return (
    <div className='user-menu d_flex a_items_center'>
      <User />
      <MenuBtn />
    </div>
  );
};

export default UserMenu;