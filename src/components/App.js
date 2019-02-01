import React, { Component } from 'react';

import Home from './views/Home';
import Art from './views/Art';
import Blog from './views/Blog';
import Projects from './views/Projects';
import Music from './views/Music';
import Photography from './views/Photography';

import helloWorld from '../assets/helloworld.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/App.css';

import { Nav } from 'react-bootstrap';
import { 
  BrowserRouter as Router, 
  Route, 
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <div className='logo'>
                    <br/>
                    <img src={helloWorld}></img>
                    <br/>
                </div>

                <Nav 
                justify variant="tabs">
                    <Nav.Item><Nav.Link href="/mephobia">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/mephobia/blog">Blog</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/mephobia/art">Art</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/mephobia/photography">Photography</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/mephobia/projects">Projects</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/mephobia/music">Music</Nav.Link></Nav.Item>
                </Nav>

                <Route path="/mephobia" exact={true} component={Home}/>
                <Route path="/mephobia/blog" exact={true} component={Blog}/>
                <Route path="/mephobia/art" exact={true} component={Art}/>
                <Route path="/mephobia/photography" exact={true} component={Photography}/>
                <Route path="/mephobia/projects" exact={true} component={Projects}/>
                <Route path="/mephobia/music" exact={true} component={Music}/>
            </div>
        </Router>
    );
  }
}

export default App;
