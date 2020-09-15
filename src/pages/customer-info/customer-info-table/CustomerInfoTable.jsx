import React from "react";

import "./CustomerInfoTable.scss";
import "./responsive.scss";

function CustomerInfoTable() {
  return (
    <>
      <div className="customer-info-table d_flex j_content_between">
        <table>
          <thead>
            <tr>
              <th>Customer details</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID</td>
              <td>8585858585858585</td>
            </tr>
            <tr>
              <td>ID</td>
              <td>8585858585858585</td>
            </tr>
            <tr>
              <td>ID</td>
              <td>8585858585858585</td>
            </tr>
            <tr>
              <td>ID</td>
              <td>8585858585858585</td>
            </tr>
            <tr>
              <td>ID</td>
              <td>8585858585858585</td>
            </tr>
            <tr>
              <td>ID</td>
              <td>8585858585858585</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CustomerInfoTable;
