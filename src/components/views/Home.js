import React, { Component } from 'react';
import bedroom from '../../assets/homepage.png';
import bffPicture from '../../assets/soniaandlia_fallstreak.jpg';
import '../../stylesheets/Home.css';


class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="homepageHeader">My Virtual Bedroom</h1>
                <img className="homepageImage" src={bedroom} alt="Virtual Bedroom"></img>
                <h1 className="homepageHeader">Me and My Real NOT Virtual BFF, Sonia</h1>
                <img className="homepageImage" src={bffPicture} alt="Me and My Bff, Sonia"></img>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Home;