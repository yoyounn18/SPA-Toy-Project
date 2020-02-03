import React from 'react';
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import DelayLink from 'react-delay-link';


import './Home.css';

const Home = () => {
    const addLineToOvadoz = () => {
        document.getElementById('ovadoz').classList.add('line-text');
    }

    return (
        <div className="home-section">
            <div className="home-content">
                <div className="home-namecontainer">
                    <Title name="Owen" />
                </div>
                <div className="home-namecontainer" id="ovadoz">
                    <Title name="Ovadoz" />
                </div>
            </div>
            <div className="next-page">
                    <DelayLink delay={1500} to="/about" clickAction={addLineToOvadoz} replace={false}>
                        <span>Start</span>
                    </DelayLink>
            </div>
        </div>
    );
};

export default Home;