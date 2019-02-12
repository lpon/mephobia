import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import '../stylesheets/Album.css';


class Album extends Component {
    render() {
        const songs = this.props.trackList;
        const tracks = []

        console.log(songs);

        for (var i = 0; i < songs.length; i++) {
            console.log(songs[i].src);
            var newSong = songs[i].src;
            tracks.push(<h2 className="song">{songs[i].title}  by  {songs[i].artist}</h2>);
            // tracks.push(<h2 className="artist">{songs[i].artist}</h2>);
            tracks.push(<ReactAudioPlayer className="audioPlayer" src={songs[i].src} controls/>);
            tracks.push(<br/>);
            tracks.push(<br/>);
        }

        console.log(tracks)

        // for (const song in songs) {
        //     console.log(song);
        //     // tracks.push(<ReactAudioPlayer src={songs.src} constrols/>)
        // }

        return (
            <div className="container">
                <br/>
                <h1 className="albumTitle">{this.props.title}</h1>
                <br/>
                <img className="coverArt" src={this.props.coverArt}></img>
                <br/>
                <br/>
                {tracks}
                <br/>
            </div>
        );
    }

}

export default Album;