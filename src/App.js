import React from "react";
import './assets/style/index.scss';
import 'antd/dist/antd.css';
import RegRequest from "./modules/reg-request";
import { BrowserRouter } from 'react-router-dom';
import NewSubscriberRequest from "./modules/new-subscriber";
import CustomerInfo from "./modules/customer-info";
import CustomersList from "./modules/customers-list";

function App() {
  return (
    <BrowserRouter history={window.routerHistory}>
      <div className='app'>
        <RegRequest />
        {/* <NewSubscriberRequest /> */}
        {/* <CustomerInfo /> */}
        {/* <CustomersList /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;