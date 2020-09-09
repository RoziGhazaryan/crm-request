import React from "react";
import 'antd/dist/antd.css';

import "./PhoneCall.scss";
import './responsive.scss';

function PhoneCall() {

    return (
        <div className='phone-call-block d_flex a_items_center j_content_end'>
            <div className='phone-call'>
                <img src={require("../../../../assets/img/svgs/phone.svg")} alt="phone" />
            </div>
        </div>
    );
    
}

export default PhoneCall;