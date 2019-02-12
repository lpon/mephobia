import React, { Component } from 'react';
import Album from "../Album";
import NeonPlanet from "../../assets/music/neonplanet_cover.jpg"
import track1 from "../../assets/music/032617.mp3";
import track2 from "../../assets/music/neonplanet.mp3";
import AAA from "../../assets/images/pinkBlueMRT-20170723.png";

const neonPlanetTrackList = [
    {title: "032617", artist: "f0xn47", src: track1}, 
    {title: "Neon Planet", artist: "f0xn47", src: track2}
];

class Music extends Component {
    render() {
        return (
            <div>
                <h1 className="pageHeader">For Occasional Musical Offerings; I have more but they are vocal/piano and don't fit with the vibe</h1>
                <Album coverArt={NeonPlanet} title="Neon Planet" trackList={neonPlanetTrackList}/>
                <br/>
                <Album coverArt={AAA} title="I'm not a real album" trackList={neonPlanetTrackList}/>
            </div>
        );
    }
}

export default Music;