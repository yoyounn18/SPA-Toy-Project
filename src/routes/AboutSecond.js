import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

import './About.css';



const AboutSecond = () => {
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
                            <Link to='/basecream'>
                                Crew : BASECREAM
                            </Link>
                        </div>
                        <div className="content-font main-content-font">
                            <a href="https://www.mkitrain.com/">
                                Lable : MKIT RAIN
                            </a>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSecond;