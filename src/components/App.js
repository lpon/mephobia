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
              <li><Link to="/mephobia">Home</Link></li>
              <li><Link to="/mephobia/blog">Blog</Link></li>
              <li><Link to="/mephobia/art">Art</Link></li>
              <li><Link to="/mephobia/photography">Photography</Link></li>
              <li><Link to="/mephobia/music">Music</Link></li>
            </ul>
          </div>

          <Route path="/mephobia" exact={true} component={Home}/>
          <Route path="/mephobia/blog" exact={true} component={Blog}/>
          <Route path="/mephobia/art" exact={true} component={Art}/>
          <Route path="/mephobia/photography" exact={true} component={Photography}/>
          <Route path="/mephobia/music" exact={true} component={Music}/>


        </div>
      </Router>
    );
  }
}

export default App;
