import React from "react";
import 'antd/dist/antd.css';
import Logo from "./logo/Logo";
import UserMenu from "./user-menu/UserMenu";

import "./Header.scss";
import './responsive.scss';

const Header = () => {
    return (
      <>
        <header className="d_flex a_items_center j_content_between">
          <Logo />
          <UserMenu />
        </header>
      </>
    );
  };
  
export default Header;