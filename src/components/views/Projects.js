import React, { Component } from 'react';
import '../../stylesheets/Projects.css';

class Projects extends Component {
    render() {
        return (
            <div>
                <h1 className="pageHeader">For Occasional Programming Projects, I have more they are just academic and I can't post them on github but they are very cool and complex ヽ(。_°)ノ</h1>
                <div className="projectList">
                    <li className="projectName">WordBank (iOS Mobile App)</li>
                    <a className="projectLink" href="https://github.com/lpon/word-bank">GitHub source</a>

                    <li className="projectName">Fashion Recognition (Machine Learning Research Project using Python)</li>
                    <a className="projectLink" href="https://github.com/lpon/fashion-recognition">GitHub source</a>
                
                    <li className="projectName">Study Buddy (Alexa Skill)</li>
                    <a className="projectLink" href="https://github.com/lpon/study-buddy">GitHub source</a>

                    <li className="projectName">Mephobia (ReactJS Web Application)</li>
                    <a className="projectLink" href="https://github.com/lpon/mephobia">GitHub source</a>
                </div>
            </div>
        );
    }
}

export default Projects;