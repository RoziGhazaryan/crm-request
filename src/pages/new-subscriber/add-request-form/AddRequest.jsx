import React from "react";
import 'antd/dist/antd.css';
import { Form, Input, Button, Select, Radio } from 'antd';

import "./AddRequest.scss";
import './responsive.scss';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function AddRequest() {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='form'>
      <Form name="basic" initialValues={{remember: true,}} onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <div className='form-item-list d_flex'>
          <div className='form-item-block d_flex f_wrap'>
            <Form.Item name="name" rules={[ { required: true, message: 'Please input your name!' , }, ]}>
              <Input placeholder="&nbsp;" />
              <span class="input-area-placeholder">First Name</span>
            </Form.Item>
            <div className='d_flex ant-form-item ant-form-item-block'>
              <Form.Item name="date" rules={[ { required: true, message: 'Please select date and time!' , }, ]}>
                <div className='date-block select-block'>
                  <Input placeholder="&nbsp;" type="date" />
                  <span class="input-area-placeholder">Desired date</span>
                </div>
              </Form.Item>

              <Form.Item name="date" rules={[ { required: true, message: 'Please select date and time!' , }, ]}>
                <div className='date-block select-block'>
                  <Input placeholder="&nbsp;" type="time" />
                  <span class="input-area-placeholder">Desired time</span>
                </div>
              </Form.Item>
            </div>

            <Form.Item name="surname" rules={[ { required: true, message: 'Please input your last name!' , }, ]}>
              <Input placeholder="&nbsp;" />
              <span class="input-area-placeholder">Last Name</span>
            </Form.Item>

            <Form.Item name="region" rules={[ { required: true, message: 'Please input your region!' , }, ]}>
              <Select onChange={handleChange} className='select-block'>
                <Option value="syunik">Syunik</Option>
                <Option value="tavush">Tavush</Option>
                <Option value="lori">Lori</Option>
                <Option value="ararat">Ararat</Option>
              </Select>
              <span class="input-area-placeholder">Region</span>
            </Form.Item>

            <Form.Item name="phone" rules={[ { required: true, message: 'Please input your phone number!' , }, ]}>
              <Input placeholder="&nbsp;" type="tel" />
              <span class="input-area-placeholder">Phone</span>
            </Form.Item>

            <Form.Item name="city" rules={[ { required: true, message: 'Please input your city!' , }, ]}>
              <Input placeholder="&nbsp;" />
              <span class="input-area-placeholder">City</span>
            </Form.Item>

            <Form.Item name="phone">
              <Input placeholder="&nbsp;" type="tel" />
              <span class="input-area-placeholder">Additional Phone</span>
            </Form.Item>
            
            <Form.Item name="street" rules={[ { required: true, message: 'Please input your street!' , }, ]}>
              <Select onChange={handleChange} className='select-block'>
                <Option value="Lernagortsner">Lernagortsner</Option>
                <Option value="Bagratuniats">Bagratuniats</Option>
                <Option value="Manandian">Manandian</Option>
              </Select>
              <span class="input-area-placeholder">Street</span>
            </Form.Item>

            <Form.Item name="email">
              <Input placeholder="&nbsp;" type="email" />
              <span class="input-area-placeholder">Email (Optional)</span>
            </Form.Item>

            <Form.Item>
              <Radio.Group name="radiogroup" defaultValue={1}>
                <Radio value={1}>Appartment</Radio>
                <Radio value={2}>House</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item name="street" rules={[ { required: true, message: 'Please input your street!' , }, ]}>
              <Select onChange={handleChange} className='select-block'>
                <Option value="tariff">Tariff</Option>
                <Option value="tariff">Tariff</Option>
                <Option value="tariff">Tariff</Option>
              </Select>
              <span class="input-area-placeholder">Tariff</span>
            </Form.Item>

            <Form.Item name="building" rules={[ { required: true, message: 'Please input the building!' , }, ]}>
              <Input placeholder="&nbsp;" />
              <span class="input-area-placeholder">Building</span>
            </Form.Item>

            <Form.Item name="username" rules={[ { required: true, message: 'Please input your registartion number!' , }, ]}>
              <Input placeholder="&nbsp;" type="number" />
              <span class="input-area-placeholder">Number of TVs</span>
            </Form.Item>

            <Form.Item name="appartment" rules={[ { required: true, message: 'Please input the appartment!' , }, ]}>
              <Input placeholder="&nbsp;" />
              <span class="input-area-placeholder">Appartment</span>
            </Form.Item>

            <div className='btn-primary'>
              <Button type="primary" htmlType="submit">
                Add request
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
export default AddRequest;
