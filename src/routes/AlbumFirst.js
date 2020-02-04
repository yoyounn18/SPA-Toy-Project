import React from 'react';
import { Link } from 'react-router-dom';

import './AlbumFirst.css';
import './Album.css';
import AlbumTitle from '../components/AlbumTitle';
import AlbumContent from '../components/AlbumContent';
import Header from '../components/Header';

const AlbumFirst = () => {
    return (
        <div className="album-section">
        <Header />
            <div className="poem-main">
                <div className="album-content">  
                </div>
                <div className="album-content">
                    <AlbumTitle name="P.O.E.M" />
                    <AlbumContent name="Reasons - Owen" />
                    <AlbumContent name="Puzzle(feat. Paloalto, Okasian) - Owen" />
                    <AlbumContent name="2017 - Owen" />
                    <AlbumContent name="mmm(feat. nafla) - Owen" />
                    <AlbumContent name="작업 (feat. Loopy, PH-1) - Owen" />
                    <AlbumContent name="Hip Hop - Owen (recommand)" />
                    <AlbumContent name="연예인 - Owen" />
                    <AlbumContent name="M.O.N.E.Y. - Owen" />
                    <AlbumContent name="긍정(feat. ELO, DPR L.I.V.E) - Owen" />
                    <AlbumContent name="11 in morning - Owen (recommand)" />

                    <div className="play-link-div album-title-font">
                        <a href="https://www.youtube.com/watch?v=BM4I-zNrl0A&list=PLjgCHXp4grFkT3sOoQxeicRJt-gBKbkCE">
                            Play Link
                        </a>
                    </div>
                    <div className="play-link-div album-title-font margin-top-10">
                        <Link to="/albumsecond">
                            Next
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlbumFirst;