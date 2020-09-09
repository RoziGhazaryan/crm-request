import React from "react";

import "./LinkBtn.scss";

function Link() {
  return (
    <>
      <div className='static-btn link-btn d_flex j_content_center a_items_center'>
        <span className='file-icon'><img src={require('../../assets/img/svgs/file.svg')} alt="file" /></span>
        <p>Link</p>
      </div>
    </>
  );
}

export default Link;
