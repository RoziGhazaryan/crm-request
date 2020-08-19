import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

const User = () => {
  return (
    <div className='user'>
      <ul className="d_flex a_items_center">
        <li className='d_flex a_items_center'>
          <NavLink to="/messages">
            <svg xmlns="http://www.w3.org/1999/svg" viewBox="0 0 20 20">
              <g fill="white">
                <path
                  d="M18 0H2C0.897 0 0 0.907573 0 2.02357V14.165C0 15.281 0.897 16.1886 2 16.1886H5V20L11.277 16.1886H18C19.103 16.1886 20 15.281 20 14.165V2.02357C20 0.907573 19.103 0 18 0ZM18 14.165H10.723L7 16.4243V14.165H2V2.02357H18V14.165Z" />
              </g>
            </svg>
          </NavLink>
        </li>
        <li className='notifications d_flex a_items_center'>
          <NavLink to="/notifications" quantity='5'>
            <svg xmlns="http://www.w3.org/1999/svg" viewBox="0 0 18 24">
              <g fill="white">
                <path
                  d="M17.654 16.9823C16.8778 16.0092 15.4253 14.5453 15.4253 9.75C15.4253 6.10781 13.2364 3.19219 10.2849 2.47688V1.5C10.2849 0.671719 9.70955 0 9 0C8.29045 0 7.71509 0.671719 7.71509 1.5V2.47688C4.76358 3.19219 2.57466 6.10781 2.57466 9.75C2.57466 14.5453 1.12221 16.0092 0.345964 16.9823C0.104894 17.2847 -0.00198114 17.6461 2.77789e-05 18C0.00444741 18.7687 0.521544 19.5 1.28976 19.5H16.7102C17.4785 19.5 17.996 18.7687 18 18C18.002 17.6461 17.8951 17.2842 17.654 16.9823ZM2.71328 17.25C3.56587 15.9389 4.498 13.7658 4.50242 9.77719C4.50242 9.76781 4.50001 9.75937 4.50001 9.75C4.50001 6.85031 6.51456 4.5 9 4.5C11.4854 4.5 13.5 6.85031 13.5 9.75C13.5 9.75937 13.4976 9.76781 13.4976 9.77719C13.502 13.7662 14.4341 15.9394 15.2867 17.25H2.71328ZM9 24C10.4191 24 11.5702 22.657 11.5702 21H6.42978C6.42978 22.657 7.5809 24 9 24Z"
                  fill="white" />
              </g>
            </svg>
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