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
                        <svg xmlns="http://www.w3.org/1999/svg" viewBox="0 0 60 60">
                            <g filter="url(#filter0_d)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M30 48C41.0457 48 50 39.0457 50 28C50 16.9543 41.0457 8 30 8C18.9543 8 10 16.9543 10 28C10 39.0457 18.9543 48 30 48ZM38.0022 28.0016C38.003 28.773 37.8704 29.5392 37.6098 30.2695L36.4088 29.125C36.487 28.7609 36.5268 28.3868 36.5268 28.0016V26.5955C36.5268 26.4091 36.6045 26.2303 36.7429 26.0984C36.8812 25.9666 37.0689 25.8925 37.2645 25.8925C37.4602 25.8925 37.6478 25.9666 37.7862 26.0984C37.9245 26.2303 38.0022 26.4091 38.0022 26.5955V28.0016ZM30.9008 33.62C31.9669 33.5725 32.9995 33.2504 33.8887 32.688L34.9481 33.6989C33.8948 34.4268 32.6574 34.8747 31.3627 34.9967V37.8439H35.7891C35.9847 37.8439 36.1724 37.918 36.3107 38.0499C36.4491 38.1817 36.5268 38.3605 36.5268 38.547C36.5268 38.7334 36.4491 38.9122 36.3107 39.0441C36.1724 39.1759 35.9847 39.25 35.7891 39.25H25.4609C25.2653 39.25 25.0776 39.1759 24.9393 39.0441C24.8009 38.9122 24.7232 38.7334 24.7232 38.547C24.7232 38.3605 24.8009 38.1817 24.9393 38.0499C25.0776 37.918 25.2653 37.8439 25.4609 37.8439H29.8873V34.9967C28.0676 34.8224 26.3807 34.0102 25.1539 32.7177C23.927 31.4251 23.2477 29.7444 23.2478 28.0016V26.5955C23.2478 26.4091 23.3255 26.2303 23.4638 26.0984C23.6022 25.9666 23.7898 25.8925 23.9855 25.8925C24.1811 25.8925 24.3688 25.9666 24.5071 26.0984C24.6455 26.2303 24.7232 26.4091 24.7232 26.5955V28.0016C24.7231 29.0186 25.0125 30.0166 25.5604 30.8894C26.1083 31.7622 26.8943 32.477 27.8347 32.9579C28.7751 33.4387 29.8348 33.6676 30.9008 33.62ZM35.0513 20.9713V27.8315L26.4318 19.6173C26.7679 18.6697 27.4466 17.8667 28.3465 17.3518C29.2465 16.8368 30.3092 16.6435 31.3449 16.8062C32.3807 16.9689 33.322 17.4771 34.0009 18.24C34.6798 19.0029 35.0521 19.971 35.0513 20.9713ZM32.8175 31.6658L26.1987 25.3582V25.3596V28.0016C26.1987 28.7401 26.4022 29.4656 26.7888 30.1057C27.1754 30.7457 27.7315 31.2779 28.4016 31.6488C29.0717 32.0198 29.8322 32.2166 30.6072 32.2196C31.3821 32.2225 32.1443 32.0316 32.8175 31.6658ZM21.25 18.657L38.9554 35.5296V35.5282L40 34.5341L22.2946 17.6615L21.25 18.657Z"
                                    fill="#656565" />
                                    <filter id="filter0_d" x="0
                                    " y="0" width="60" height="60"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                        <feOffset dy="2" />
                                        <feGaussianBlur stdDeviation="5" />
                                        <feColorMatrix type="matrix"
                                            values="0 0 0 0 0.9 0 0 0 0 0.432 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow"
                                            result="shape" />
                                    </filter>
                            </g>
                        </svg>
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