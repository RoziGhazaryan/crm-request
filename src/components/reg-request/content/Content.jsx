import React from "react";
import 'antd/dist/antd.css';
import ContentTitle from "./content-title/ContentTitle";
import RequestTypes from "./request-types/RequestTypes";
import Call from "../../call/Call";
import PhoneCall from "./phone-call-block/PhoneCall";

import "./Content.scss";
import './responsive.scss';

function ContentRegRequest() {
    return (
        <div className='content'>
            <ContentTitle />
            <div className='request-types-call d_flex j_content_between'>
                <RequestTypes />
                <Call />
            </div>
            <PhoneCall />
        </div>
    );
}

export default ContentRegRequest;