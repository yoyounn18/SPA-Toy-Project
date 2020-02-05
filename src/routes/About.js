import React from 'react';
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import "react-tiger-transition/styles/main.min.css";


import './Album.css';
import './About.css';
import Header from '../components/Header';

const Album = () => {
    return (
        
        <div className="album-section">
            <Header />
            <div className="about-main">
                <div className="dark-container">
                    <Title name="Introduce"></Title>
                    <Link to="/aboutfirst" transition="glide-right">
                        <div className="about-click click-font">
                            Click
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Album;