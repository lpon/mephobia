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

import { Nav, Navbar } from 'react-bootstrap';
// import { 
//   BrowserRouter as Router, 
//   Route, 
// } from 'react-router-dom';


class App extends Component {
    
    constructor(props) { 
        super(props);

        this.pagenameToComponent = {
            "Home": [<Home></Home>],
            "Projects": [<Projects></Projects>],
            "Photography": [<Photography></Photography>],
            "Art": [<Art></Art>],
            "Music": [<Music></Music>], 
            "Blog": [<Blog></Blog>]
        };

        this.state = {
            currentPage: "Home",
        }
        
        this.setCurrentPage = this.setCurrentPage.bind(this);
        this.setPageToHome = this.setPageToHome.bind(this); 
        this.setPageToProjects = this.setPageToProjects.bind(this);
        this.setPageToPhotography = this.setPageToPhotography.bind(this);
        this.setPageToArt = this.setPageToArt.bind(this);
        this.setPageToMusic = this.setPageToMusic.bind(this);
        this.setPageToBlog = this.setPageToBlog.bind(this);
    }
    
    setCurrentPage(page) { 
        console.log(page);
        this.setState({
            currentPage: page
        });
    }
    
    setPageToHome() { 
        this.setCurrentPage("Home");
    }
    
    setPageToProjects() { 
        this.setCurrentPage("Projects");
    }
    
    setPageToPhotography() { 
        this.setCurrentPage("Photography");
    }
    
    setPageToArt() { 
        this.setCurrentPage("Art");
    }
    
    setPageToMusic() { 
        this.setCurrentPage("Music");
    }
    
    setPageToBlog() { 
        this.setCurrentPage("Blog");
    }
    
    renderComponentForCurrentPage() { 
        return this.pagenameToComponent[this.state.currentPage];

    }

    render() {
        var pageForRender = this.renderComponentForCurrentPage();

        return (
            <div className="App">
                <div className='logo'>
                <br/>
                    <img src={helloWorld} alt="Hellow World"></img>
                </div>


                <Nav 
                className="customNav"
                justify variant="tabs" 
                defaultActiveKey="/mephobia">
                    <Nav.Item>
                        <Nav.Link className="customLink" href="/mephobia" onSelect={this.setPageToHome}>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="customLink" eventKey="projects" onSelect={this.setPageToProjects}>Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="customLink" eventKey="photography" onSelect={this.setPageToPhotography}>Photography</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="customLink" eventKey="art" onSelect={this.setPageToArt}>Art</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="customLink" eventKey="music" onSelect={this.setPageToMusic}>Music</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="customLink" eventKey="blog" onSelect={this.setPageToBlog}>Blog</Nav.Link>
                    </Nav.Item>
                </Nav>

                {pageForRender}

                {/* <Router>
                    <div>
                        <Nav
                        justify variant="tabs" className="customNav">
                            <Nav.Item><Nav.Link className="customLink" href="/mephobia">Home</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link className="customLink" href="/mephobia/projects">Projects</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link className="customLink" href="/mephobia/photography">Photography</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link className="customLink" href="/mephobia/art">Art</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link className="customLink" href="/mephobia/music">Music</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link className="customLink" href="/mephobia/blog">Blog</Nav.Link></Nav.Item>
                        </Nav>

                        <Route path="/mephobia/" exact={true} component={Home}/>
                        <Route path="/mephobia/blog/" exact={true} component={Blog}/>
                        <Route path="/mephobia/art/" exact={true} component={Art}/>
                        <Route path="/mephobia/photography/" exact={true} component={Photography}/>
                        <Route path="/mephobia/projects/" exact={true} component={Projects}/>
                        <Route path="/mephobia/music/" exact={true} component={Music}/>        
                    </div>
                </Router> */}
                
                <Navbar className="copyrightFooter" fixed="bottom">Copyright © Lia Pon 2019. All rights reserved.</Navbar>
            </div>
        );
    }
}

export default App;
