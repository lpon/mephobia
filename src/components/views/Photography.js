import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const images = [
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/FSUMMER-Miami-2017-11-13.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/HOLYbeon-Taiwan-20171114.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/OCEANSUITEA-Miami-20171113.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/POOL-Miami-20171113.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/SMOKESTREET-Taiwan-20170828.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/SOCKTALI-Miami-20171113.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/SilhouetteneonLIA.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/agakhanreflection-TO-20160901.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/alleywayDriving-Taiwan-20170718.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/alleywayStroller-Taiwan-20170718.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/bikeLIght-Taiwan-20170812.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/bikerBladeRunner-Taiwan-20170722.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/boycoloring-Marthasvineyard-20130526.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/boynotcoloring-Marthasvineyard-20130526.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/busStopWhoa-Taiwan-20170802.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/cuttingminitekkamakiforliabday-SF-20130918.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/dreamyopenblind-Miami-20170917.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/dystoPIASIGN-Taiwan-20170828.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/elderlymanBusTOAp-Taiwan-20170805.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/emily-Taiwan-20170720.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/fabneondistillery-TO-20170712.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/fairystream-NiagaraOnTheLake-20140508.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/flyingcrumpy-TO-20140302.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/girlHeartLooking-Taiwan-20170828.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/glitchCityBus-Taiwan-20170718.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/glowingGLitch-Taiwan-20170828.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/greenGurg-Taiwan-20170720.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/gridandbird-Boston-20130526.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/iceland1-20140721.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/iceland2-20140721.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/iceland3-20140721.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/iceland4-20140721.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/iceland5-20140721.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/iceland6-20140721.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/inteoTHeVoid-Taiwan-20170828.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/jellyfishalien-Boston-20130526.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/jesso-LA-20130719.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/kindAsianBikerinSuit-Taiwan-20170720.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/kowfooiesavatargarden-SF-20130818.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/laceandpinkbackoflia-Boston-20130522.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/liaGRUNGE-Taiwan-20170723.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/liaNeonDemon-Taiwan-20170720.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/lookincoolLIAAAAAAA-Taiwan-20170802.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/lookingDownTheStreet-Taiwan-20170802.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/mcmichaelswithdadders-Markham-20140528.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/miniandgiantsushiforliabday-SF-2013.JPG"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/minisushiforliabday-SF-20130918.JPG"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/minisushiforliabday2-SF-2013JPG.JPG"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/minitekkamakiforliabday-SF-20130918.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/neondrinkLia.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/nightStreetGlowy-Taiwan-20170730.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/oldCoupleCitySITRE-Taiwan-20170720.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/oldCoupleCitySITREv2-Taiwan-20170728.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/pinkBlueMRT-20170723.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/pixelatedOUtTHeWindow-Taiwan-20170726.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/planeview-boston-20130802.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/planewing-boston-20130802.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/popart-Boston-20130522.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/purpleSunsetRooftop-Taiwan-20170723.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/rainbowOONIA-Taiwan-20170722.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/rainybus-MarthasVineyard-20130526.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/ratATTACK-Taiwan-20170730.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/skaters-LA-20130707.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/soMuchColorShiLin??-Taiwan-20170726.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/soulNeonFAb.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/sterileGurg-Taiwan-20170812.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/strangeLanders-Taiwan-20170716.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/sunnysidepaviliionmetalreflection-TO-20140311.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/sunnysidepavillionsukenbridge-TO-20140311.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/sunnysidepavilliontreereflections-TO-20140311.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/sunnysidepavillionwinniethepooh-TO-20140311.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/sunsetBIKEIKE-Taiwan-20170828.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/taxiCabViews-Taiwan-20170715.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/tealNEONsigns-Taiwan-20170828.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/thatFeelingWhenYouWakeUpInADystopicWorld-Taiwan-20170718.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/twilightZONe-Taiwan-20170828.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/walkingtoRedHouse-Taiwan-20170725.png"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/weirdPinkBlueMountainBuilding-Taiwan-20170718.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/workeragakhan-TO-20160901.jpg"},
    {src: "https://github.com/lpon/mephobia/blob/master/src/assets/images/yellowHEART-Taiwan-20170828.png"},
];

class Photography extends Component {
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
    
    openLightbox(image) { 
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
                <h1>Photography</h1>
                
                <Gallery 
                photos={images}
                onClick={this.openLightbox}
                />

                <Lightbox 
                images={images}
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

export default Photography;