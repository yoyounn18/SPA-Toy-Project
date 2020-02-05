import React from 'react';

import './VideoFirst.css';
import Header from '../components/Header';
import ReactPlayer from 'react-player';
import AlbumTitle from '../components/AlbumTitle';
import Footer from '../components/Footer';

const VideoFirst = () => {
    return (
        <div className="video-first-section">
            <Header />
            <div className="video-first-container">
                <AlbumTitle name="Dingo Killing Verse" />
                <div className="video-first-content">
                    <ReactPlayer url="https://www.youtube.com/watch?v=d6KcPeGfufs" />
                </div>
                <AlbumTitle name="GO HIGH Remix" />
                <div className="video-first-content">
                    <ReactPlayer url="https://www.youtube.com/watch?v=_W0QOmVc86g" />
                </div>
                <AlbumTitle name="EUNG FREESTYLE (응 프리스타일)" />
                <div className="video-first-content">
                    <ReactPlayer url="https://www.youtube.com/watch?v=QljRe99OMCU" />
                </div>
                <AlbumTitle name="Glendale - DF LIVE" />
                <div className="video-first-content">
                    <ReactPlayer url="https://www.youtube.com/watch?v=Ug7ENWGT6xU" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default VideoFirst;