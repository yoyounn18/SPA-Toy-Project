import React from 'react';
import Title from '../components/Title';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

import './About.css';



const About = () => {
    return (
        <div className="about-section">
            <div className="nav-div">
                <Header />
            </div>
            <div className="about-jumbo">
                <div className="dark-container">
                    <Title name="Who is Owen?" />
                    <Link to="/aboutfirst">
                        <div className="about-click click-font">
                            Click
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;