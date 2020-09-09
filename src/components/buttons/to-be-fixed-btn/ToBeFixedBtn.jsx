import React from "react";
import { Select } from "antd";

import "./ToBeFixedBtn.scss";

const { Option } = Select;

function ToBeFixed() {
  return (
    <>
      <div className='static-btn to-be-fixed-btn d_flex j_content_center a_items_center'>
        <Select defaultValue="To be fixed" style={{ width: 104 }} className='static-btn to-be-fixed-btn'>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
    </>
  );
}

export default ToBeFixed;
