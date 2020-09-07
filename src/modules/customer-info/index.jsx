import React from "react";
import "./style.scss";
import Header from "../../components/header/Header";
import CustomerInfoTable from "./customer-info-table";
import Sidebar from "../../components/sidebar/Sidebar";

function CustomerInfo() {
  return (
    <div>
      <Header />
      <div className="customer-info d_flex">
        <Sidebar />
        <div className="customer-info-tables d_flex">
          <CustomerInfoTable />
          <CustomerInfoTable />
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
