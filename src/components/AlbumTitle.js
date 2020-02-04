import React from 'react';

import './AlbumTitle.css';

const AlbumTitle = ({ name }) => {
    return  <div className="album-title-name title-font">{ name }</div>
    
};

export default AlbumTitle;