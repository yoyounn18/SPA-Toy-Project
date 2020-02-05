import React from 'react';
import Title from '../components/Title';
import { Link } from 'react-router-dom';

import './Album.css';
import './About.css';
import Header from '../components/Header';

const Concert = () => {
    return (
        
        <div className="album-section">
            <Header />
            <div className="concert-main">
                <div className="dark-container">
                    <Title name="Concert"></Title>
                    <Link to="/concertfirst">
                        <div className="about-click click-font">
                            Click
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Concert;