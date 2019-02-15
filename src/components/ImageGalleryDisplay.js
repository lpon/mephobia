import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';


class ImageGalleryDisplay extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentImage: 0,
        };

        this.openLightbox = this.openLightbox.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.goToPrevious = this.goToPrevious.bind(this);
        this.goToNext = this.goToNext.bind(this);
    }
    
    openLightbox(event, image) { 
        this.setState({
            currentImage: image.index,
            lightboxIsOpen: true,
        });
    }

    closeLightbox() { 
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }

    goToPrevious() { 
        // var previousImageIndex = this.state.currentImage - 1;

        // if (previousImageIndex === -1) { 
        //     previousImageIndex = images.length - 1;
        // }

        // this.setState({
        //     currentImage: previousImageIndex
        // });

        this.setState({
            currentImage: this.state.currentImage - 1
        });
    }

    goToNext() {
        // var nextImageIndex = this.state.currentImage + 1;

        // if (nextImageIndex === images.length) { 
        //     nextImageIndex = 0;
        // }

        // this.setState({
        //     currentImage: nextImageIndex
        // });
    
        this.setState({
            currentImage: this.state.currentImage + 1
        });
    }

    render() {
        return (
            <div>
                <Gallery 
                photos={this.props.images}
                onClick={this.openLightbox}
                />

                <Lightbox 
                images={this.props.images}
                onClose={this.closeLightbox}
                onClickPrev={this.goToPrevious}
                onClickNext={this.goToNext}
                currentImage={this.state.currentImage}
                isOpen={this.state.lightboxIsOpen}
                />            
            </div>
        );
    }
}

export default ImageGalleryDisplay;