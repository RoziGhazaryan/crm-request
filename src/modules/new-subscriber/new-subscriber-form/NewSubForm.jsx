import React from "react";
import "./style.scss";
import 'antd/dist/antd.css';
import { Upload, message, Form, Input, Button, Select, Radio } from 'antd';

const { Option } = Select;

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

function handleChange(value) {
  console.log(`selected ${value}`);
}

function NewSubForm() {

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
                <Option value="lucy">Lucy</Option>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
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
                <Option value="Lernagortsner">Lernagortsner</Option>
                <Option value="Bagratuniats">Bagratuniats</Option>
                <Option value="Manandian">Manandian</Option>
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
export default NewSubForm;
