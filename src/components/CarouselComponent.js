import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class CarouselComponent extends Component {
    display_images = () => this.props.images.map(e =>
         <div className="showImage_bloc" key={e.url} >
            <img className="showImage_img" src={e.url} alt='' />
         </div>
         )
    render() {
                // swipeable={true}
                // dynamicHeight={true}
                //  thumbWidth={100}
                //  thumbHeight={100}

        return (
            <Carousel showArrows={false} showIndicators={false} showThumbs={false} showStatus={false}>
                {this.display_images()}
            </Carousel>

        )
    }
}
