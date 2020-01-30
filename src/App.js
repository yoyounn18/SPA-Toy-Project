import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Album from './routes/Album';
import Video from './routes/Video';
import Concert from './routes/Concert';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home }/>
          <Route path="/about" component={About} />
          <Route path="/album" component={Album} />
          <Route path="/concert" component={Concert} />
          <Route path="/video" component={Video} />
        </Switch>                                                                     " component={About}/>
      </div>
    </Router>
  );
};

export default App;