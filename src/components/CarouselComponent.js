import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



export default class CarouselComponent extends Component {
    display_images = () => this.props.images.map(e => <div key={e.url} ><img style={{height: 450, width: 800}} src={e.url}  /></div>)
    render() {

        return (
            <Carousel 
                style={{height: 1000}}
                swipeable={true}
                dynamicHeight={true}

                 thumbWidth={100}
                 thumbHeight={100}
            >
                {this.display_images()}
            </Carousel>

        )
    }
}
