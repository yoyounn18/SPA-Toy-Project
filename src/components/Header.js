import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
            <NavLink to="/about" className="item" activeClassName="active">Introduce</NavLink>
            <NavLink to="/album" className="item" activeClassName="active">Album</NavLink>
            <NavLink to="/concert" className="item" activeClassName="active">Concert</NavLink>
            <NavLink to="/video" className="item" activeClassName="active">Video</NavLink>
        </div>
    );
};

export default Header;