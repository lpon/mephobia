import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import '../stylesheets/Album.css';


class Album extends Component {
    render() {
        const songs = this.props.trackList;
        const tracks = []

        console.log(songs);

        songs.forEach(song => {
            // console.log(songs[i]);
            tracks.push(<h2 className="song">{song.title}  by  {song.artist}</h2>);
            // tracks.push(<h2 className="artist">{songs[i].artist}</h2>);
            tracks.push(<ReactAudioPlayer className="audioPlayer" src={song.src} controls/>);
            tracks.push(<br/>);
            tracks.push(<br/>);
        });

        // console.log(tracks)

        // for (var song in songs) {
        //     console.log(song);
        //     // tracks.push(<ReactAudioPlayer src={songs.src} constrols/>)
        // }

        return (
            <div className="container">
                <br/>
                <h1 className="albumTitle">{this.props.title}</h1>
                <br/>
                <img className="coverArt" src={this.props.coverArt} alt="Beautiful Cover Art"></img>
                <br/>
                <br/>
                {tracks}
                <br/>
            </div>
        );
    }

}

export default Album;