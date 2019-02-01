import React, { Component } from 'react';
import ImageGalleryDisplay from '../ImageGalleryDisplay';
import artwork0 from "../../assets/artwork/Anakin.jpg";
import artwork1 from "../../assets/artwork/AnnaFischer.jpg";
import artwork2 from "../../assets/artwork/Deadpool.jpg";
import artwork3 from "../../assets/artwork/Joker.jpg";
import artwork4 from "../../assets/artwork/LIghtbulb.jpg";
import artwork5 from "../../assets/artwork/Rorschach.JPG";

const artwork = [
    {src: artwork0, caption: "Anakin.jpg", width: 3641, height: 2568},
    {src: artwork1, caption: "AnnaFischer.jpg", width: 2679, height: 3456},
    {src: artwork2, caption: "Deadpool.jpg", width: 1023, height: 1362},
    {src: artwork3, caption: "Joker.jpg", width: 500, height: 672},
    {src: artwork4, caption: "LIghtbulb.jpg", width: 4157, height: 2771},
    {src: artwork5, caption: "Rorschach.JPG", width: 3456, height: 5184},
];

class Art extends Component {

    render() {
        return (
            <ImageGalleryDisplay photos={artwork} images={artwork}></ImageGalleryDisplay>
        );
    }
}

export default Art;