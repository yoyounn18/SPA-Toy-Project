import React from 'react';
import Title from '../components/Title';
import { Link } from 'react-router-dom';

import './Album.css';
import './About.css';
import Header from '../components/Header';

const Album = () => {
    return (
        
        <div className="album-section">
            <Header />
            <div className="album-main">
                <div className="dark-container">
                    <Title name="Album"></Title>
                    <Link to="/albumfirst">
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