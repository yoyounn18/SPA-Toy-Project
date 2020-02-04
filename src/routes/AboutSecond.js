import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import CloudIcon from '@material-ui/icons/Cloud';

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
                            <img src="https://lh3.googleusercontent.com/proxy/X58djC4kzkLbKBWwIcUy85_OzEXnwqof2S8raBtB2nytfubsWzeDE99TyoXQC7XIA3q124iuIqHEGECG-0JY742LqAfwlNsvGZLs6YPiZAnBL0DrUA9swHBWM5kloeF6GoLk1EzVVyPh71vLRCJzn8a1DyaIiOS6" />
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