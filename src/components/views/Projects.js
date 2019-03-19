import React, { Component } from 'react';
import '../../stylesheets/Projects.css';


class Projects extends Component {
    render() {
        return (
            <div>
                <h1 className="pageHeader">For Occasional Programming Projects, I have more they are just academic and 
                I can't post them on github but they are very cool and complex<br/>ヽ(。_°)ノ</h1>
                
                <div className="projectList">
                    <div className="projectName">WordBank (iOS Mobile App)</div>
                    <a className="projectLink" href="https://github.com/lpon/word-bank">GitHub source</a>
                    <br/>
                    <br/>
                    <div className="projectName">Fashion Recognition (Machine Learning Research Project using Python)</div>
                    <a className="projectLink" href="https://github.com/lpon/fashion-recognition">GitHub source</a>
                    <br/>
                    <br/>
                    <div className="projectName">Study Buddy (Alexa Skill)</div>
                    <a className="projectLink" href="https://github.com/lpon/study-buddy">GitHub source</a>
                    <br/>
                    <br/>
                    <div className="projectName">Mephobia (React.js Website)</div>
                    <a className="projectLink" href="https://github.com/lpon/mephobia">GitHub source</a>
                    <br/>
                    <br/>
                    <div className="projectName">Zombie Cat Conga (Unity Game)</div>
                    <a className="projectLink" href="https://github.com/lpon/zombieCatConga">GitHub source</a>
                    <br/>
                    <br/>
                    <div className="projectName">CubeDash (Unity Game)</div>
                    <a className="projectLink" href="https://github.com/lpon/CubeDash">GitHub source</a>
                </div>
            </div>
        );
    }
}

export default Projects;