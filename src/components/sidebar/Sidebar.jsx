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
            <i className="menu-item-icon">
              <svg xmlns="http://www.w3.org/1999/svg" viewBox="0 0 20 20">
                <g fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.72 8H15.84C15.928 8 16 8.072 16 8.16V14C16 15.1046 15.1046 16 14 16H2C0.895433 16 5.50878e-06 15.1047 0 14.0002L2.01748e-05 1.99987C2.26603e-05 0.895301 0.89544 0 2.00001 0H6.72006C7.42698 0 8.00001 0.573076 8.00001 1.28C8.00001 1.368 7.92801 1.44 7.84001 1.44H1.44001V14.56H14.56V8.16C14.56 8.072 14.632 8 14.72 8ZM6.00003 9.70968L6.03408 7.57885C6.03469 7.5414 6.04941 7.50557 6.07529 7.47849L13.5266 0.0412187C13.5552 0.014337 13.5911 0 13.6287 0C13.6663 0 13.7022 0.0125449 13.7309 0.0412187L15.9583 2.26703C16.0139 2.32258 16.0139 2.41398 15.9583 2.46953L8.50529 9.90681C8.4802 9.9319 8.44436 9.94624 8.40852 9.94803L6.29392 10H6.28675C6.12726 10 5.99824 9.86918 6.00003 9.70968ZM13.6287 1.55914L7.17202 8.00179L7.15947 8.83333L7.97843 8.81362L14.4387 2.36738L13.6287 1.55914Z"
                    fill="#FEFEFE"
                  />
                </g>
              </svg>
            </i>
            Register request
          </Menu.Item>
          <Menu.Item key="2">
            <i className="menu-item-icon">
              <svg xmlns="http://www.w3.org/1999/svg" viewBox="0 0 20 20">
                <g fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 0H12L16 4V15H8.8L9.3 14.5L9 14H15V5H11V1H6V6.8L5.9 6.7L5.7 6H5V0ZM12 1V4H15L12 1ZM9 12L7.9 12.4C7.8 12.7 7.7 13 7.5 13.2L8 14.3L7.3 15L6.3 14.5C6 14.7 5.70001 14.8 5.40001 14.9L5.4 14.9L5 16H4L3.7 14.9L3.69999 14.9C3.39999 14.8 3.1 14.7 2.8 14.5L1.7 15L1 14.3L1.5 13.3C1.3 13 1.2 12.7 1.1 12.4L0 12V11L1.1 10.7C1.2 10.4 1.3 10.1 1.5 9.8L1 8.7L1.7 8L2.7 8.5C3 8.3 3.29999 8.2 3.59999 8.1L3.6 8.1L4 7H5L5.4 8.1L5.40001 8.1C5.70001 8.2 6 8.3 6.3 8.5L7.3 8L8 8.7L7.5 9.7C7.7 10 7.8 10.3 7.9 10.6L9 11V12ZM2.5 11.5C2.5 12.6 3.4 13.5 4.5 13.5C5.6 13.5 6.5 12.6 6.5 11.5C6.5 10.4 5.6 9.5 4.5 9.5C3.4 9.5 2.5 10.4 2.5 11.5Z"
                    fill="#BEBEBE"
                  />
                </g>
              </svg>
            </i>
            Pending request
          </Menu.Item>
          <Menu.Item key="3">
            <i className="menu-item-icon">
              <svg xmlns="http://www.w3.org/1999/svg" viewBox="0 0 20 20">
                <g fill="white">
                  <path
                    d="M12.1905 9.90476H3.04762L0 12.9524V0.761905C0 0.559835 0.0802718 0.366042 0.223157 0.223157C0.366042 0.0802718 0.559835 0 0.761905 0H12.1905C12.3925 0 12.5863 0.0802718 12.7292 0.223157C12.8721 0.366042 12.9524 0.559835 12.9524 0.761905V9.14286C12.9524 9.34493 12.8721 9.53872 12.7292 9.68161C12.5863 9.82449 12.3925 9.90476 12.1905 9.90476ZM16 5.33333V16L12.9524 12.9524H4.57143C4.36936 12.9524 4.17557 12.8721 4.03268 12.7292C3.8898 12.5863 3.80952 12.3925 3.80952 12.1905V11.4286H14.4762V4.57143H15.2381C15.4402 4.57143 15.634 4.6517 15.7768 4.79459C15.9197 4.93747 16 5.13126 16 5.33333ZM4.71619 1.52381C4.05333 1.52381 3.52 1.67619 3.10857 1.97333C2.71238 2.28571 2.51429 2.72 2.5219 3.3219L2.52952 3.34476H4C4.00762 3.11619 4.07619 2.94095 4.21333 2.81905C4.35442 2.70205 4.53295 2.63984 4.71619 2.64381C4.95238 2.64381 5.15048 2.72 5.28762 2.85714C5.42476 3.0019 5.48571 3.2 5.48571 3.42857C5.48571 3.67238 5.43238 3.8781 5.31048 4.05333C5.20381 4.22857 5.04381 4.38095 4.84571 4.50286C4.45714 4.7619 4.19048 4.99048 4.04571 5.19619C3.89333 5.39429 3.80952 5.71429 3.80952 6.09524H5.33333C5.33333 5.85905 5.36381 5.66857 5.43238 5.53143C5.50095 5.39429 5.63048 5.25714 5.82095 5.13524C6.16381 4.95238 6.44571 4.73143 6.66667 4.42667C6.88762 4.1219 7.0019 3.80952 7.0019 3.42857C7.0019 2.84952 6.79619 2.38476 6.38476 2.0419C5.98095 1.69905 5.42476 1.52381 4.71619 1.52381ZM3.80952 6.85714V8.38095H5.33333V6.85714H3.80952ZM8.38095 8.38095H9.90476V6.85714H8.38095V8.38095ZM8.38095 1.52381V6.09524H9.90476V1.52381H8.38095Z"
                    fill="#BEBEBE"
                  />
                </g>
              </svg>
            </i>
            Other requests
          </Menu.Item>
          <span className="divided"></span>
          <Menu.Item key="4">
            <i className="menu-item-icon">
              <svg xmlns="http://www.w3.org/1999/svg" viewBox="0 0 20 20">
                <g fill="white">
                  <path
                    d="M10.5 2H8C8 0.896875 7.10313 0 6 0C4.89687 0 4 0.896875 4 2H1.5C0.671875 2 0 2.67188 0 3.5V14.5C0 15.3281 0.671875 16 1.5 16H10.5C11.3281 16 12 15.3281 12 14.5V3.5C12 2.67188 11.3281 2 10.5 2ZM3 13.25C2.58437 13.25 2.25 12.9156 2.25 12.5C2.25 12.0844 2.58437 11.75 3 11.75C3.41563 11.75 3.75 12.0844 3.75 12.5C3.75 12.9156 3.41563 13.25 3 13.25ZM3 10.25C2.58437 10.25 2.25 9.91562 2.25 9.5C2.25 9.08438 2.58437 8.75 3 8.75C3.41563 8.75 3.75 9.08438 3.75 9.5C3.75 9.91562 3.41563 10.25 3 10.25ZM3 7.25C2.58437 7.25 2.25 6.91563 2.25 6.5C2.25 6.08437 2.58437 5.75 3 5.75C3.41563 5.75 3.75 6.08437 3.75 6.5C3.75 6.91563 3.41563 7.25 3 7.25ZM6 1.25C6.41563 1.25 6.75 1.58438 6.75 2C6.75 2.41563 6.41563 2.75 6 2.75C5.58437 2.75 5.25 2.41563 5.25 2C5.25 1.58438 5.58437 1.25 6 1.25ZM10 12.75C10 12.8875 9.8875 13 9.75 13H5.25C5.1125 13 5 12.8875 5 12.75V12.25C5 12.1125 5.1125 12 5.25 12H9.75C9.8875 12 10 12.1125 10 12.25V12.75ZM10 9.75C10 9.8875 9.8875 10 9.75 10H5.25C5.1125 10 5 9.8875 5 9.75V9.25C5 9.1125 5.1125 9 5.25 9H9.75C9.8875 9 10 9.1125 10 9.25V9.75ZM10 6.75C10 6.8875 9.8875 7 9.75 7H5.25C5.1125 7 5 6.8875 5 6.75V6.25C5 6.1125 5.1125 6 5.25 6H9.75C9.8875 6 10 6.1125 10 6.25V6.75Z"
                    fill="#BEBEBE"
                  />
                </g>
              </svg>
            </i>
            Subscribers
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default Sidebar;
