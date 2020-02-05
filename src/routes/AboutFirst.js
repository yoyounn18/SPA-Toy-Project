import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import CloudIcon from '@material-ui/icons/Cloud';

import './About.css';



const AboutFisrt = () => {
    return (
        <div className="about-section">
            <div className="nav-div">
                <Header />
            </div>
            <div className="about-jumbo">
                <div className="dark-container">
                </div>
                <div className="about-content">
                        <div className="about-picture">
                            <img src="https://images.genius.com/551ab066f9337a66035b0ba9ae53ef66.852x852x1.jpg" />
                        </div>
                        <div className="content-font main-content-font">
                            Owen a.k.a Clevermind (김현우 28)
                        </div>
                        <div className="content-font main-content-font">
                                Social
                        </div>
                        <div className="content-sns">
                            <div className="sns-content">
                                <a href="https://www.youtube.com/channel/UCQ3bdyONqWWGyRs1-qIe24A">
                                    <YouTubeIcon />
                                </a>
                            </div>
                            <div className="sns-content">
                                <a href="https://www.instagram.com/owenmyown/">
                                    <InstagramIcon />
                                </a>
                            </div>
                            <div className="sns-content">
                                <a href="https://www.facebook.com/owenmyown">
                                    <FacebookIcon />
                                </a>
                            </div>
                            <div className="sns-content">
                                <a href="https://soundcloud.com/owenmyown">
                                    <CloudIcon />
                                </a>
                            </div>
                        </div>
                        <Link to="/aboutsecond">
                        <div className="about-click click-font">
                            Next
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutFisrt;