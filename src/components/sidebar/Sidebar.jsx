import React from "react";
import "./style.scss";
import "antd/dist/antd.css";
import { Menu, Layout } from "antd";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Sider>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1" className="d_flex">
            <img src={require('../../assets/img/svgs/register.svg')} alt="register"/>
            <p>Register request</p> 
          </Menu.Item>
          <Menu.Item key="2">
            <img src={require('../../assets/img/svgs/pending.svg')} alt="pending"/>
            <p>Pending request</p> 
          </Menu.Item>
          <Menu.Item key="3">
            <img src={require('../../assets/img/svgs/other.svg')} alt="other"/>
            <p>Other requests</p> 
          </Menu.Item>
          <span className="divided"></span>
          <Menu.Item key="4">
            <img src={require('../../assets/img/svgs/subscribers.svg')} alt="subscribers"/>
            <p>Subscribers</p> 
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default Sidebar;
