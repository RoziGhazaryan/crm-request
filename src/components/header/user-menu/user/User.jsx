import React from "react";
import { NavLink } from "react-router-dom";

import "./User.scss";

const User = () => {
  return (
    <div className='user'>
      <ul className="d_flex a_items_center">
        <li className='d_flex a_items_center'>
          <NavLink to="/messages">
            <img src={require('../../../../assets/img/svgs/chat.svg')} alt="chat"/>
          </NavLink>
        </li>
        <li className='notifications d_flex a_items_center'>
          <NavLink to="/notifications" quantity='5'>
            <img src={require('../../../../assets/img/svgs/bell.svg')} alt="bell"/>
          </NavLink>
        </li>
        <li className='user-avatar'>
          <NavLink to="/user" className='d_flex'>
            <img src={require("../../../../assets/img/avatar.png")} alt="avatar" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default User;