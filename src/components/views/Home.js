import React, { Component } from 'react';
import homepageImage from '../../assets/homepage.png';


class Home extends Component {
    render() {
        return (
            <div>
                <br/>
                <img src={homepageImage}></img>
            </div>
        );
    }
}

export default Home;