import React, { Component } from 'react'
import AwesomeSlider from "react-awesome-slider"
import CoreStyle from "react-awesome-slider/src/styles"
import AwesomeSliderStyles from "react-awesome-slider/src/styled/scale-out-animation/index"
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css'
import image1 from "../../assets/img/cars-img/eloy-carrasco-8TiC__MqXsc-unsplash.jpg"
import image2 from "../../assets/img/cars-img/ambitious-creative-co-rick-barrett-eUAiEZLhKG8-unsplash.jpg"
import image3 from "../../assets/img/cars-img/cam-bowers-cAbH8B-14Vo-unsplash.jpg"
import image4 from "../../assets/img/cars-img/joey-banks-YApiWyp0lqo-unsplash.jpg"
import icon1 from "../../assets/img/icon/icons8-traffic-jam-100-3.png"
import icon2 from "../../assets/img/icon/icons8-services-100.png"
import icon3 from "../../assets/img/icon/icons8-four-of-five-stars-100.png"
import '../../assets/css/car_index.css'
const AutoplaySlider = withAutoplay(AwesomeSlider);
export default class CarIndex extends Component {
    render() {
        return (
          <div>
            <div className="slide_part">
                {/*<div className="info_slide">
                BUILT ON VALUE & SERVICE - CAR FOR IN DALLAS, TEXAS
                </div>
                */}
                <AutoplaySlider cssModule={[CoreStyle]} fillParent={false} play={true}
                cancelOnInteraction={false} interval={8000}>
                <div className="div_slide">
                    <div className="info_by_slide">
                        <div className="contain_info">
                            <h2 className="welcome_to">
                                Welcome to Car for sale
                            </h2>
                            <p className="text_slider">
                                Our mission is to provide the ultimate
                                car buying experience.
                            </p>
                            <button className="btn_rm_slider">Read more</button>
                        </div>
                    </div>
                    <img src={image1} alt="" className="img_slide" />
                </div>
                <div className="div_slide">
                    <div className="info_by_slide">
                        <div className="contain_info">
                            <h2 className="welcome_to">
                                A better experience
                            </h2>
                            <p className="text_slider">
                                We've a good relation client seller and you can <br/>
                                call back us if you've some problems.
                            </p>
                            <button className="btn_rm_slider">Contact us</button>
                        </div>
                    </div>
                    <img src={image2} alt="" className="img_slide" />
                </div>
                <div className="div_slide">
                    <div className="info_by_slide">
                        <div className="contain_info">
                            <h2 className="welcome_to">
                                Vehicles in good condition
                            </h2>
                            <p className="text_slider">
                                We've a large choice of vehicles which is <br/>
                                like new, find yours.
                            </p>
                                <button className="btn_rm_slider">Search</button>
                        </div>
                    </div>
                    <img src={image3} alt="" className="img_slide" />
                </div>
                <div className="div_slide">
                    <div className="info_by_slide">
                        <div className="contain_info">
                            <h2 className="welcome_to">
                                Find a part
                            </h2>
                            <p className="text_slider">
                            You can find some part of car that you search.
                            </p>
                            <button className="btn_rm_slider">Find a part</button>
                        </div>
                    </div>
                    <img src={image4} alt="" className="img_slide" />
                </div>
                </AutoplaySlider>
            </div>
            <div className="home_contain">
                <div className="our_works">
                    <div className="lets_talk">
                        <h2 className="talk_title" data-aos="fade-up">
                            Let's talk about us
                        </h2>
                        <p className="talk_text" data-aos="fade-up">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <button className="talk_btn" data-aos="fade-up">See details</button>
                    </div>
                    <div className="work_div">
                        <div className="work_part" data-aos="fade-left">
                            <p className="work_icon_part">
                                <img src={icon1} alt="" />
                            </p>
                            <p className="work_text">
                                <h2 className="title_work">Inventory</h2>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            </p>
                            <button className="work_btn">See more</button>
                        </div>
                        <div className="work_part" data-aos="fade-left" data-aos-delay="200">
                            <p className="work_icon_part">
                                <img src={icon2} alt="" />
                            </p>
                            <p className="work_text">
                                <h2 className="title_work">Services</h2>
                                incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam
                            </p>
                            <button className="work_btn">See more</button>
                        </div>
                        <div className="work_part" data-aos="fade-left" data-aos-delay="400">
                            <p className="work_icon_part">
                                <img src={icon3} alt="" />
                            </p>
                            <p className="work_text">
                                <h2 className="title_work">Reviews</h2>
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            </p>
                            <button className="work_btn">See more</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}
