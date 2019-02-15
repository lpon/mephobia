import React, { Component } from 'react';
import ImageGalleryDisplay from '../ImageGalleryDisplay';
import photographs from '../Photographs';


class Photography extends Component {
    render() {
        return (
            <div>
                <h1 className="pageHeader">For Occasional Photographs</h1>
                <ImageGalleryDisplay 
                    photos={photographs} 
                    images={photographs}>
                    </ImageGalleryDisplay>
            </div>
            
        );
    }
}

export default Photography;