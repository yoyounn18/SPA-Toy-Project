import React from 'react';

import './AlbumContent.css';

const AlbumContent = ({ name }) => {
    return <div className="album-content-song title-font"> { name } </div>
  
};

export default AlbumContent;