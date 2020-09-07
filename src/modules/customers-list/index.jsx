import React, { useState } from "react";
import "./style.scss";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import ContentTitle from "../../components/reg-request/content/content-title/ContentTitle";
import SearchInput from "../../components/search-input";
import { Table, Tag } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Region",
    dataIndex: "region",
  },
  {
    title: "City/district",
    dataIndex: "city",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => (
      <>
        {status.map((status) => {
          let statusB = "status-btn";
          let statusBtn;

          switch (status) {
            case "To accept":
              statusBtn = "accept-btn";
              break;

            case "To execute":
              statusBtn = "execute-btn";
              break;

            case "Pending":
              statusBtn = "pending-btn";
              break;

            default:
          }
          return <Tag className={`${statusBtn} ${statusB}`}>{status}</Tag>;
        })}
      </>
    ),
  },
  {
    title: "Deadline",
    dataIndex: "deadline",
  },
  {
    title: "View",
    dataIndex: "view",
    render: () => {
      return (
        <button className="view-btn">
          <img src={require("../../assets/img/svgs/view.svg")} alt="view" />
        </button>
      );
    },
  },
];
const data = [
  {
    key: "1",
    id: 898889987,
    region: "Syunik",
    city: "Kapan",
    address: "Lernagottsner 13 8",
    date: "15.05.2019 22.38",
    type: "Subscribing",
    status: ["To accept"],
    deadline: ["2 min"],
  },
  {
    key: "2",
    id: 898889987,
    region: "Syunik",
    city: "Kapan",
    address: "Lernagottsner 13 8",
    date: "15.05.2019 22.38",
    type: "Subscribing",
    status: ["To accept"],
    deadline: ["53 min"],
  },
  {
    key: "3",
    id: 898889987,
    region: "Syunik",
    city: "Kapan",
    address: "Lernagottsner 13 8",
    date: "15.05.2019 22.38",
    type: "Subscribing",
    status: ["To accept"],
    deadline: ["16:00 hr"],
  },
  {
    key: "4",
    id: 898889987,
    region: "Syunik",
    city: "Kapan",
    address: "Lernagottsner 13 8",
    date: "15.05.2019 22.38",
    type: "Subscribing",
    status: ["To execute"],
    deadline: ["16:24 hr"],
  },
  {
    key: "5",
    id: 898889987,
    region: "Syunik",
    city: "Kapan",
    address: "Lernagottsner 13 8",
    date: "15.05.2019 22.38",
    type: "Subscribing",
    status: ["To execute"],
    deadline: ["48:37 hr"],
  },
  {
    key: "6",
    id: 898889987,
    region: "Syunik",
    city: "Kapan",
    address: "Lernagottsner 13 8",
    date: "15.05.2019 22.38",
    type: "Subscribing",
    status: ["Pending"],
    deadline: ["48:37 hr"],
  },
  {
    key: "6",
    id: 898889987,
    region: "Syunik",
    city: "Kapan",
    address: "Lernagottsner 13 8",
    date: "15.05.2019 22.38",
    type: "Subscribing",
    status: ["Pending"],
    deadline: ["48:37 hr"],
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    name: record.name,
  }),
};

function CustomersList() {
  const [selectionType, setSelectionType] = useState("checkbox");

  return (
    <div>
      <Header />
      <div className="customers-list-page d_flex">
        <Sidebar />
        <div className="sidebar-customers-list">
          <ContentTitle>New Subscriber</ContentTitle>
          <div className="customers-list">
            <SearchInput />
            <div className="customer-list-table">
              <Table
                rowSelection={{
                  type: selectionType,
                  ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomersList;
