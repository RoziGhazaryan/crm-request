import React from "react";
import 'antd/dist/antd.css';
import './assets/style/index.scss';
import { BrowserRouter } from 'react-router-dom';
import RegRequest from "./pages/reg-request/RegRequest";
import NewSubscriber from "./pages/new-subscriber/NewSubscriber";
import CustomerInfo from "./pages/customer-info/CustomerInfo";
import CustomersList from "./pages/customers-list/CustomersList";


function App() {
  return (
    <BrowserRouter history={window.routerHistory}>
      <div className='app'>
        <RegRequest />
        {/* <NewSubscriber /> */}
        {/* <CustomerInfo /> */}
        {/* <CustomersList /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;