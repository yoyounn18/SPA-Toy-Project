import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Album from './routes/Album';
import Video from './routes/Video';
import Concert from './routes/Concert';
import AboutFisrt from './routes/AboutFirst';
import AboutSecond from './routes/AboutSecond';
import BaseCream from './routes/BaseCream';
import AlbumSecond from './routes/AlbumSecond';
import AlbumFirst from './routes/AlbumFirst';
import ConcertFirst from './routes/ConcertFirst';
import VideoFirst from './routes/VideoFirst';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/about" component={ About } />
          <Route path="/album" component={ Album } />
          <Route path="/concert" component={ Concert} />
          <Route path="/video" component={ Video } />
          <Route path="/aboutfirst" component= {AboutFisrt} />
          <Route path="/aboutsecond" component= {AboutSecond} />
          <Route path="/basecream" component= {BaseCream} />
          <Route path="/albumfisrt" component= {AlbumFirst} />
          <Route path="/albumsecond" component= {AlbumSecond} />
          <Route path="/concertfirst" component= {ConcertFirst} />
          <Route path="/videofirst" component= {VideoFirst} />
        </Switch>                                                                     
      </div>
    </Router>
  );
};

export default App;