import React from 'react';

import './ConcertFirst.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ConcertFirst = () => {
    return (
        <div className="concert-first-section">
            <Header />
            <div className="concert-first-container">
                <img src="https://cdnticket.melon.co.kr/resource/image/upload/product/2020/01/20200107120056c78536d0-525f-4830-8c86-78a236612fba.jpg/melon/quality/90/optimize" />
                <a href="https://www.youtube.com/channel/UCko1k258OSms8NqBTQd1EBQ/videos" />
            </div>
            <Footer />
        </div>
    );
};

export default ConcertFirst;