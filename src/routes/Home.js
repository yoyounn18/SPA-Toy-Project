import React from 'react';
import Title from '../components/Title';
import HomePicture from '../components/HomePicture';

import './Home.css';

const Home = () => {
    return (
        <div className="home-section">
            <div className="home-content">
                <div className="home-namecontainer">
                    <Title name="Owen" />
                </div>
                <div className="home-namecontainer">
                    <Title name="Ovadoz" />
                </div>
            </div>
        </div>
    );
};

export default Home;