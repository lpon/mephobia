import React, { Component } from 'react';
import '../stylesheets/App.css';
import Art from './views/Art';
import Blog from './views/Blog';
import Home from './views/Home';
import Music from './views/Music';
import Photography from './views/Photography';

import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch, 
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <h1>WELCOME TO MEPHOBIA</h1>
        
          <div className="container">
            <ul> 
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/art">Art</Link></li>
              <li><Link to="/photography">Photography</Link></li>
              <li><Link to="/music">Music</Link></li>
            </ul>
          </div>

          <Route path="/home" component={Home}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/art" component={Art}/>
          <Route path="/photography" component={Photography}/>
          <Route path="/music" component={Music}/>


        </div>
      </Router>
    );
  }
}

export default App;
