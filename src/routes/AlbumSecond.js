import React from 'react';
import { Link } from 'react-router-dom';

import './AlbumFirst.css';
import './Album.css';
import AlbumTitle from '../components/AlbumTitle';
import AlbumContent from '../components/AlbumContent';
import Header from '../components/Header';

const AlbumSecond = () => {
    return (
        <div className="album-section">
            <Header />
            <div className="poem2-main">
                <div className="album-content">
                    
                </div>
                <div className="album-content1">
                    <AlbumTitle name="P.O.E.M 2" />
                    <AlbumContent name="형 - Owen" />
                    <AlbumContent name="호밀밭의 파수꾼 - Owen" />
                    <AlbumContent name="Diamonds - Owen (recommand)" />
                    <AlbumContent name="foolish heart - Owen (recommand)" />
                    <AlbumContent name="이름 - Owen" />
                    <AlbumContent name="pretty Jane - Owen" />
                    <AlbumContent name="what the fun - Owen" />
                    <AlbumContent name="away(feat. nafla) - Owen" />
                    <AlbumContent name="Holy - Owen" />
                    <AlbumContent name="flex(feat. Young West) - Owen" />
                    <AlbumContent name="possesion - Owen" />
                    <AlbumContent name="thoughts - Owen" />
                    <AlbumContent name="문제(feat. Simba Zawadi) - Owen" />

                    <div className="play-link-div title-font margin-top-10">
                        <a href="https://www.youtube.com/watch?v=UAlmDktGtzM&list=PLFQRWJMxJeG5P8xCGtpVE6b6oAW1qb62Y">
                            Play Link
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlbumSecond;