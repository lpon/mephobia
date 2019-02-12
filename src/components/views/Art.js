import React, { Component } from 'react';
import ImageGalleryDisplay from '../ImageGalleryDisplay';
import artwork from '../Artwork';

class Art extends Component {

    render() {
        return (
            <div>
                <h1 className="pageHeader">For Occasional Pieces of Art That I Don't Hate</h1>
                <ImageGalleryDisplay 
                    photos={artwork} 
                    images={artwork}>
                    </ImageGalleryDisplay>
            </div>
        );
    }
}

export default Art;