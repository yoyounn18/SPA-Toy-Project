import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

import './About.css';
import Title from '../components/Title';

const BaseCream = () => {
    return (
        <div className="about-section">
            <div className="nav-div">
                <Header />
            </div>
            <div className="about-jumbo1">
                <div className="dark-container">
                </div>
                <div className="about-content">
                        <Title name="BASECREAM crew" />
                        <div className="member-div">
                            <div className="owen-base">
                                <div className="about-picture">
                                    <img src="https://images.genius.com/551ab066f9337a66035b0ba9ae53ef66.852x852x1.jpg" />
                                </div>
                                <div className="content-font main-content-font">
                                    Owen
                                </div>
                            </div>
                            <div className="owen-base">
                                <div className="about-picture">
                                    <img src="https://w.namu.la/s/91602e89bee1b334b74eb19aee255eb3cf40d2f4a406f6bd9779a85db7e0888a2d0c46f00ebe08ac1faae69566baa009c100a734b801db82fccf99e03d2e06fb2cdab61f934e7cc62ee94c34417b97549fea998ce18888674c0a703904c03a3cacb3c445cdf39a3c55a964a38817cdf9" />
                                </div>
                                <div className="content-font main-content-font">
                                    Oh Hyuk
                                </div>
                            </div>
                            <div className="owen-base">
                                <div className="about-picture">
                                    <img src="https://image.musinsa.com/mfile_s01/2018/11/19/d1594887b0ff8244c0416a00bc0476f0114123.jpg.musinsa.lq" />
                                </div>
                                <div className="content-font main-content-font">
                                    Kim Soo Chan
                                </div>
                            </div>
                            </div>
                            <div className="content-font main-content-font margin-top3">
                                "BASEMENT와 SCREAM의 합성어로 언더그라운드 서브컬쳐 문화를 외치다."
                            </div>
                            <div className="content-font main-content-font">
                                <a href="https://basecream.kr">
                                    Homepage
                                </a>
                            </div>
                        </div>
                </div>
            </div>
    );
};

export default BaseCream;