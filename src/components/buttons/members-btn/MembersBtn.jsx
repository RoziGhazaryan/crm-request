import React from "react";
import { Select } from "antd";

import "./MembersBtn.scss";

const { Option } = Select;

function Members() {
  return (
    <>
      <div className='static-btn members-btn d_flex j_content_center a_items_center'>
      <Select defaultValue="Members" style={{ width: 104 }} className='static-btn members-btn'>
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

export default Members;
