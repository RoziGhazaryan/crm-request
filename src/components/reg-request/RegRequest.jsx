import React from "react";
import "./style.scss";
import 'antd/dist/antd.css';
import Sidebar from "../sidebar/Sidebar";
import ContentRegRequest from "./content/Content";


function RegRequestC() {
    return (
        <div className='request d_flex'>
            <Sidebar />
            <ContentRegRequest />
        </div>
    );
}

export default RegRequestC;