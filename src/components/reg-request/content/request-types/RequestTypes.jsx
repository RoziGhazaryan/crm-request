import React from "react";
import "./style.scss";
import 'antd/dist/antd.css';
import { Button } from 'antd';

function RequestTypes() {
    
    return (
        <div className='request-types'>
            <div className='btn-primary'>
                <Button type="primary" htmlType="submit" block>
                    New Subscriber
                </Button>
            </div>
            <div className='btn-primary'>
                <Button type="primary" htmlType="submit" block>
                    Support
                </Button>
            </div>
            <div className='btn-primary'>
                <Button type="primary" htmlType="submit" block>
                    Payment
                </Button>
            </div>
            <div className='btn-primary'>
                <Button type="primary" htmlType="submit" block>
                    Other
                </Button>
            </div>
        </div>
    );
}

export default RequestTypes;