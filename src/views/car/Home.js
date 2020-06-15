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
import logo1 from "../../assets/img/icon/icons8-sedan-100.png"
import logo2 from "../../assets/img/icon/icons8-sedan-100-4.png"
import logo3 from "../../assets/img/icon/icons8-hyundai-100.png"
import logo4 from "../../assets/img/icon/icons8-mercedes-benz-100.png"
import slideImg1 from "../../assets/img/cars-img/patrick-tomasso-CP1cKFIl7qc-unsplash.jpg"
import slideImg2 from "../../assets/img/cars-img/jonathan-daniels-sfqxNM2ugfc-unsplash.jpg"
import slideImg3 from "../../assets/img/cars-img/benjamin-child-7Cdw956mZ4w-unsplash.jpg"
import receiveOfferImg from "../../assets/img/cars-img/campbell-boulanger-3ZUsNJhi_Ik-unsplash.jpg"
import '../../assets/css/car_index.css'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);
export default class Home extends Component {

    responsive = {
        0: {
          items: 1,
        },
        600:{
            items:2
        },
        1024: {
          items: 3
        }
    }
    // responsive={this.responsive} dotsDisabled={true} buttonsDisabled={false}
    // slidesPerPage={3} arrows infinite dots
    // breakpoints = {
    //     {
    //         600: {
    //             slidesPerPage: 1,
    //             arrows: false,
    //             keepDirectionWhenDragging: true
    //         },
    //         950: {
    //             slidesPerPage: 2,
    //             arrows: false,
    //             keepDirectionWhenDragging: true
    //         },
    //         1024: {
    //             slidesPerPage: 3,
    //             arrows: true
    //         }
    //     }
    // }

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
                <div className="some_cars">
                    <h2 className="title_feature" data-aos="fade-down">Featured vehicles</h2>
                    <div className="cars_slide" data-aos="fade-down">
                        <Carousel slidesPerPage={3} arrows infinite 
                            breakpoints = {
                                {
                                    600: {
                                        slidesPerPage: 1,
                                        arrows: false,
                                        keepDirectionWhenDragging: true
                                    },
                                    950: {
                                        slidesPerPage: 2,
                                        arrows: false,
                                        keepDirectionWhenDragging: true
                                    },
                                    1024: {
                                        slidesPerPage: 3,
                                        arrows: true
                                    }
                                }
                            }>
                            <div className="div_cars">
                                <div className="div_img_cars">
                                    <img src={slideImg1} className="img_cars_slide" alt="" />
                                </div>
                                <div className="div_info_cars">
                                    <p className="cars_mark_name">
                                        <p className="mark_cars">Peugeot 308 </p>
                                        <p className="title_cars">1.2 PureTech S&S 130 EAT8 GT Linei</p>
                                    </p>
                                    <p className="cars_priceS">
                                        15 000$
                                    </p>
                                </div>
                                <div className="btn_slide_carP">
                                    <button className="view_details_cars">View details</button>
                                </div>
                            </div>
                            <div className="div_cars">
                                <div className="div_img_cars">
                                    <img src={slideImg2} className="img_cars_slide" alt="" />
                                </div>
                                <div className="div_info_cars">
                                    <p className="cars_mark_name">
                                        <p className="mark_cars">Peugeot 307 </p>
                                        <p className="title_cars">1.2 PureTech S&S 130 EAT8 GT Linei</p>
                                    </p>
                                    <p className="cars_priceS">
                                        15 000$
                                    </p>
                                </div>
                                <div className="btn_slide_carP">
                                    <button className="view_details_cars">View details</button>
                                </div>
                            </div>
                            <div className="div_cars">
                                <div className="div_img_cars">
                                    <img src={slideImg3} className="img_cars_slide" alt="" />
                                </div>
                                <div className="div_info_cars">
                                    <p className="cars_mark_name">
                                        <p className="mark_cars">Peugeot 306 </p>
                                        <p className="title_cars">1.2 PureTech S&S 130 EAT8 GT Linei</p>
                                    </p>
                                    <p className="cars_priceS">
                                        15 000$
                                    </p>
                                </div>
                                <div className="btn_slide_carP">
                                    <button className="view_details_cars">View details</button>
                                </div>
                            </div>
                        </Carousel>
                        
                    </div>
                    <div className="view_more_slideC">
                        <button className="btn_more_slideC">View more</button>
                    </div>
                </div>
                <div className="part_create">
                    <div className="part_text_btn">
                        <p className="part_text_c">
                            Use our Car Finder request form below and we 'll help you find the vehicle you want.
                        </p>
                        <button className="btn_c"> Search <i className="fas fa-chevron-right icon_create"></i> </button>
                    </div>
                </div>
                <div className="part_offers">
                    <div className="offers_form" data-aos="fade-up" data-aos-delay="100">
                        <h2 className="h2_offers"> RECEIVE OFFERS </h2>
                        <p className="p_offers"> Taste the holidays of the everyday close to home. </p>
                        <form className="form_offers">
                            <input type="mail" className="input_offers" placeholder="username@yahoo.fr" />
                            <button className="btn_offers">Keep me updated</button>
                        </form>
                    </div>
                    <div className="offers_img" data-aos="fade-up">
                        <img src={receiveOfferImg} className="img_offer" alt="" />
                    </div>
                </div>
                <div className="some_elements">
                    <p className="big_title_popular" data-aos="fade-up">Popular search</p>
                    <div className="cars_popular">
                        <div className="title_popular">
                            <p className="p_popular" data-aos="fade-up"> Popular marks</p>
                            <div className="line_popular"></div>
                        </div>
                        <div className="element_popular" data-aos="fade-up">
                            <div className="elements_list">
                                <img src={logo3} className="elements_icon" alt="" />
                                <a href="#" className="elements">Hyundai (5)</a>
                            </div>
                            <div className="elements_list">
                                <img src={logo4} className="elements_icon" alt="" />
                                <a href="#" className="elements">Mercedes-Benz (2)</a>
                            </div>
                        </div>
                    </div>
                    <div className="cars_popular">
                        <div className="title_popular">
                            <p className="p_popular" data-aos="fade-up"> Popular cars</p>
                            <div className="line_popular"></div>
                        </div>
                        <div className="element_popular" data-aos="fade-up">
                            <div className="elements_list">
                                <img src={logo1} className="elements_icon" alt="" />
                                <a href="#" className="elements">Sedan (19)</a>
                            </div>
                            <div className="elements_list">
                                <img src={logo2} className="elements_icon" alt="" />
                                <a href="#" className="elements">Hatchbacks (6)</a>
                            </div>
                        </div>
                    </div>
                    <div className="cars_popular">
                        <div className="title_popular">
                            <p className="p_popular" data-aos="fade-up"> Popular models</p>
                            <div className="line_popular"></div>
                        </div>
                        <div className="element_popular" data-aos="fade-up">
                            <div className="elements_list">
                                <a href="#" className="elements">Mitsubishi Lancer Sportback (1)</a>
                            </div>
                            <div className="elements_list">
                                <a href="#" className="elements">Mercedes-Benz C-Class (2)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_part">
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-5 ml-auto">
                                        <h2 className="footer-heading mb-4">Subscribe</h2>
                                        <ul className="list-unstyled">
                                            <li><a href="#">Login</a></li>
                                            <li><a href="#">Sign Up</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 ml-auto">
                                        <h2 className="footer-heading mb-4">Features</h2>
                                        <ul className="list-unstyled">
                                            <li><a href="#">Cars for sale</a></li>
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Staff</a></li>
                                            <li><a href="#">Contact & Hours </a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <h2 className="footer-heading mb-4">Follow Us</h2>
                                        <a href="#" className="pl-0 pr-3"><span className="fab fa-facebook-f"></span></a>
                                        <a href="#" className="pl-3 pr-3"><span className="fab fa-twitter"></span></a>
                                        <a href="#" className="pl-3 pr-3"><span className="fab fa-linkedin"></span></a>
                                        <a href="#" className="pl-3 pr-3"><span className="fab fa-instagram"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-5 mt-5 text-center">
                            <div className="col-md-12">
                                <div className="border-top pt-5">
                                    <p>
                                        Copyright &copy; All rights reserved | Designed by &nbsp;
                                        <a href="mailto:michel8cloe@gmail.com" target="_blank" className="text_black">michel8cloe</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
          </div>
        );
    }
}
