import React from "react";
import "./style.scss";
import 'antd/dist/antd.css';
import Logo from "./logo/Logo";
import UserMenu from "./user-menu/UserMenu";

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