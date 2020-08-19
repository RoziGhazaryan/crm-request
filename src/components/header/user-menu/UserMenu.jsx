import React from "react";
import "./style.scss";
import User from "./user/User";
import MenuBtn from "./menu-btn/MenuBtn";

const UserMenu = () => {
  return (
    <div className='user-menu d_flex a_items_center'>
      <User />
      <MenuBtn />
    </div>
  );
};

export default UserMenu;