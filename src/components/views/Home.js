import React, { Component } from 'react';
import homepageImage from '../../assets/homepage.png';


class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="pageHeader">〜(￣▽￣〜)ヾ(*д*)ﾉ゛(〜￣▽￣)〜</h1>
                <img src={homepageImage}></img>
            </div>
        );
    }
}

export default Home;