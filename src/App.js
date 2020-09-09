import React from "react";
import './assets/style/index.scss';
import 'antd/dist/antd.css';

import { BrowserRouter } from 'react-router-dom';
import RegRequest from "./modules/reg-request/RegRequest";
import NewSubscriber from "./modules/new-subscriber/NewSubscriber";
import CustomerInfo from "./modules/customer-info/CustomerInfo";
import CustomersList from "./modules/customers-list/CustomersList";


function App() {
  return (
    <BrowserRouter history={window.routerHistory}>
      <div className='app'>
        {/* <RegRequest /> */}
        <NewSubscriber />
        {/* <CustomerInfo /> */}
        {/* <CustomersList /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;