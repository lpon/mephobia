import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const images = [
    {src: "../../assets/images/FSUMMER-Miami-2017-11-13.png"},
    {src: "../../assets/images/HOLYbeon-Taiwan-20171114.png"},
    {src: "../../assets/images/OCEANSUITEA-Miami-20171113.png"},
    {src: "../../assets/images/POOL-Miami-20171113.png"},
    {src: "../../assets/images/SMOKESTREET-Taiwan-20170828.png"},
    {src: "../../assets/images/SOCKTALI-Miami-20171113.png"},
    {src: "../../assets/images/SilhouetteneonLIA.png"},
    {src: "../../assets/images/agakhanreflection-TO-20160901.jpg"},
    {src: "../../assets/images/alleywayDriving-Taiwan-20170718.jpg"},
    {src: "../../assets/images/alleywayStroller-Taiwan-20170718.jpg"},
    {src: "../../assets/images/bikeLIght-Taiwan-20170812.png"},
    {src: "../../assets/images/bikerBladeRunner-Taiwan-20170722.png"},
    {src: "../../assets/images/boycoloring-Marthasvineyard-20130526.jpg"},
    {src: "../../assets/images/boynotcoloring-Marthasvineyard-20130526.jpg"},
    {src: "../../assets/images/busStopWhoa-Taiwan-20170802.png"},
    {src: "../../assets/images/cuttingminitekkamakiforliabday-SF-20130918.jpg"},
    {src: "../../assets/images/dreamyopenblind-Miami-20170917.png"},
    {src: "../../assets/images/dystoPIASIGN-Taiwan-20170828.png"},
    {src: "../../assets/images/elderlymanBusTOAp-Taiwan-20170805.png"},
    {src: "../../assets/images/emily-Taiwan-20170720.jpg"},
    {src: "../../assets/images/fabneondistillery-TO-20170712.jpg"},
    {src: "../../assets/images/fairystream-NiagaraOnTheLake-20140508.jpg"},
    {src: "../../assets/images/flyingcrumpy-TO-20140302.jpg"},
    {src: "../../assets/images/girlHeartLooking-Taiwan-20170828.png"},
    {src: "../../assets/images/glitchCityBus-Taiwan-20170718.jpg"},
    {src: "../../assets/images/glowingGLitch-Taiwan-20170828.png"},
    {src: "../../assets/images/greenGurg-Taiwan-20170720.jpg"},
    {src: "../../assets/images/gridandbird-Boston-20130526.jpg"},
    {src: "../../assets/images/iceland1-20140721.jpg"},
    {src: "../../assets/images/iceland2-20140721.jpg"},
    {src: "../../assets/images/iceland3-20140721.jpg"},
    {src: "../../assets/images/iceland4-20140721.jpg"},
    {src: "../../assets/images/iceland5-20140721.jpg"},
    {src: "../../assets/images/iceland6-20140721.jpg"},
    {src: "../../assets/images/inteoTHeVoid-Taiwan-20170828.png"},
    {src: "../../assets/images/jellyfishalien-Boston-20130526.jpg"},
    {src: "../../assets/images/jesso-LA-20130719.jpg"},
    {src: "../../assets/images/kindAsianBikerinSuit-Taiwan-20170720.jpg"},
    {src: "../../assets/images/kowfooiesavatargarden-SF-20130818.jpg"},
    {src: "../../assets/images/laceandpinkbackoflia-Boston-20130522.jpg"},
    {src: "../../assets/images/liaGRUNGE-Taiwan-20170723.png"},
    {src: "../../assets/images/liaNeonDemon-Taiwan-20170720.jpg"},
    {src: "../../assets/images/lookincoolLIAAAAAAA-Taiwan-20170802.png"},
    {src: "../../assets/images/lookingDownTheStreet-Taiwan-20170802.png"},
    {src: "../../assets/images/mcmichaelswithdadders-Markham-20140528.jpg"},
    {src: "../../assets/images/miniandgiantsushiforliabday-SF-2013.JPG"},
    {src: "../../assets/images/minisushiforliabday-SF-20130918.JPG"},
    {src: "../../assets/images/minisushiforliabday2-SF-2013JPG.JPG"},
    {src: "../../assets/images/minitekkamakiforliabday-SF-20130918.jpg"},
    {src: "../../assets/images/neondrinkLia.png"},
    {src: "../../assets/images/nightStreetGlowy-Taiwan-20170730.png"},
    {src: "../../assets/images/oldCoupleCitySITRE-Taiwan-20170720.jpg"},
    {src: "../../assets/images/oldCoupleCitySITREv2-Taiwan-20170728.png"},
    {src: "../../assets/images/pinkBlueMRT-20170723.png"},
    {src: "../../assets/images/pixelatedOUtTHeWindow-Taiwan-20170726.png"},
    {src: "../../assets/images/planeview-boston-20130802.jpg"},
    {src: "../../assets/images/planewing-boston-20130802.jpg"},
    {src: "../../assets/images/popart-Boston-20130522.jpg"},
    {src: "../../assets/images/purpleSunsetRooftop-Taiwan-20170723.png"},
    {src: "../../assets/images/rainbowOONIA-Taiwan-20170722.jpg"},
    {src: "../../assets/images/rainybus-MarthasVineyard-20130526.jpg"},
    {src: "../../assets/images/ratATTACK-Taiwan-20170730.png"},
    {src: "../../assets/images/skaters-LA-20130707.jpg"},
    {src: "../../assets/images/soMuchColorShiLin??-Taiwan-20170726.png"},
    {src: "../../assets/images/soulNeonFAb.png"},
    {src: "../../assets/images/sterileGurg-Taiwan-20170812.png"},
    {src: "../../assets/images/strangeLanders-Taiwan-20170716.jpg"},
    {src: "../../assets/images/sunnysidepaviliionmetalreflection-TO-20140311.jpg"},
    {src: "../../assets/images/sunnysidepavillionsukenbridge-TO-20140311.jpg"},
    {src: "../../assets/images/sunnysidepavilliontreereflections-TO-20140311.jpg"},
    {src: "../../assets/images/sunnysidepavillionwinniethepooh-TO-20140311.jpg"},
    {src: "../../assets/images/sunsetBIKEIKE-Taiwan-20170828.png"},
    {src: "../../assets/images/taxiCabViews-Taiwan-20170715.jpg"},
    {src: "../../assets/images/tealNEONsigns-Taiwan-20170828.png"},
    {src: "../../assets/images/thatFeelingWhenYouWakeUpInADystopicWorld-Taiwan-20170718.jpg"},
    {src: "../../assets/images/twilightZONe-Taiwan-20170828.png"},
    {src: "../../assets/images/walkingtoRedHouse-Taiwan-20170725.png"},
    {src: "../../assets/images/weirdPinkBlueMountainBuilding-Taiwan-20170718.jpg"},
    {src: "../../assets/images/workeragakhan-TO-20160901.jpg"},
    {src: "../../assets/images/yellowHEART-Taiwan-20170828.png"},
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