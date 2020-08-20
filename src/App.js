import React from "react";
import './assets/style/index.scss';
import 'antd/dist/antd.css';
import RegRequest from "./modules/reg-request";
import { BrowserRouter } from 'react-router-dom';
import NewSubscriber from "./modules/new-subscriber";

function App() {
  return ( 
    <BrowserRouter history={window.routerHistory}>
      <div className ='app'>
        {/* <RegRequest /> */}
        <NewSubscriber />
      </div>
    </BrowserRouter>
  );
}

export default App;