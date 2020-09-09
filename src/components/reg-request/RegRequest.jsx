import React from "react";
import 'antd/dist/antd.css';
import Sidebar from "../sidebar/Sidebar";
import ContentRegRequest from "./content/Content";

import "./RegRequest.scss";
import './responsive.scss';

function RegRequestC() {
    return (
        <div className='request d_flex'>
            <Sidebar />
            <ContentRegRequest />
        </div>
    );
}

export default RegRequestC;