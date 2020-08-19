import React from "react";
import "./style.scss";
import 'antd/dist/antd.css';

function PhoneCall() {

    return (
        <div className='phone-call-block d_flex a_items_center j_content_end'>
            <div className='phone-call'>
                <img src={require("../../../../assets/img/phone.png")} alt="phone" />
            </div>
        </div>
    );
    
}

export default PhoneCall;