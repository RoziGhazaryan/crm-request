import React from "react";
import "./style.scss";
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Link } from "react-router-dom";

function Call() {   
    return (
        <div className='call'>
            <div className='call-block'>
                <div className='call-title'>
                    <h5>
                        <i>Incoming call from:</i>
                        093989900    
                    </h5>
                </div>
                <div className='call-id-attach d_flex j_content_between'>
                    <p>ID: unknown</p>
                    <span>Attach subscriber</span>
                </div>
                <div className='divider'></div>
                <div className='call-title call-duration d_flex a_items_end j_content_between'>
                    <h5>
                        <i>Call duration:</i>
                        00.01.03
                    </h5>
                    <span className='microphone'>
                       <img src={require("../../assets/img/svgs/microphone.svg")} alt="microphone"/>
                    </span>
                </div>
                <div className='divider'></div>
                <div className='history-comment'>
                    <Link to='/caller-history' className='call-details d_flex'>
                        <img src={require("../../assets/img/arrow-left.png")} alt="arrow" />
                        <span>Show caller’s history</span>
                    </Link>
                    <Link to='/caller-history' className='call-details d_flex'>
                        <img src={require("../../assets/img/comment.png")} alt="comment" />
                        <span>Add a comment</span>
                    </Link>
                </div>
                <div className='end-transfer d_flex j_content_between'>
                    <Button type="primary" htmlType="submit" className='end-call'>
                        End Call
                    </Button>
                    <Button type="primary" htmlType="submit" className='transfer-call'>
                        Transfer Call
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Call;