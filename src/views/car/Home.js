import React, { Component } from 'react'
import AwesomeSlider from "react-awesome-slider"
import CoreStyle from "react-awesome-slider/src/styles"
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css'
import image1 from "../../assets/img/cars-img/eloy-carrasco-8TiC__MqXsc-unsplash.jpg"
import image2 from "../../assets/img/cars-img/ambitious-creative-co-rick-barrett-eUAiEZLhKG8-unsplash.jpg"
import image3 from "../../assets/img/cars-img/cam-bowers-cAbH8B-14Vo-unsplash.jpg"
import image4 from "../../assets/img/cars-img/joey-banks-YApiWyp0lqo-unsplash.jpg"
import icon1 from "../../assets/img/icon/icons8-traffic-jam-100-3.png"
import icon2 from "../../assets/img/icon/icons8-services-100.png"
import icon3 from "../../assets/img/icon/icons8-four-of-five-stars-100.png"
import logo1 from "../../assets/img/icon/icons8-lexus-100.png"
import logo2 from "../../assets/img/icon/icons8-toyota-100.png"
import logo3 from "../../assets/img/icon/icons8-nissan-100-2.png"
import logo4 from "../../assets/img/icon/icons8-honda-100.png"
import receiveOfferImg from "../../assets/img/cars-img/campbell-boulanger-3ZUsNJhi_Ik-unsplash.jpg"
import '../../assets/css/car_index.css'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css';
import current_user from '../../helpers/current_user';
import { ROOT, API_ROOT, HEADERS } from '../../helpers/constant';
import Footer from '../../components/Footer';
import {  toast } from 'react-toastify';
import ReactGA from 'react-ga';


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
    state = {
        loading: false,
        cars: [],
        email_subscription: current_user() ? current_user().email_subscription : false
    }


    componentDidMount(){
        fetch(API_ROOT + '/cars?limit=5')
        .then(resp => resp.json())
        .then(json => this.setState({cars: json.cars}))
    }
    handleSubmit = () => {
        if(current_user()){
            this.setState({loading: true})
            const options = {
                method: 'PATCH',
                headers: HEADERS,
               body: JSON.stringify({user: {email_subscription: !current_user().email_subscription} } )
    
            }
            fetch(API_ROOT + `/users/${current_user().id}`,options)
            .then(resp => resp.json())
            .then(json => {
                JSON.stringify(json.user)  && localStorage.setItem("auto_sell_user", JSON.stringify(json.user.data.attributes) )
                ReactGA.event({
                    category: `${current_user().email_subscription ? 'Subscibed to email list' : 'Unsubscibed from email list'}`,
                    action: `${current_user().name}, just ${current_user().email_subscription ? 'Subscibed to email list' : 'Unsubscibed from email list'}`
                  })

                this.setState({loading: false, email_subscription: current_user().email_subscription})
                 toast.success(current_user() && current_user().email_subscription ? 'You succefully joined our email list. Thanks for trusting us!': 'We are sorry to see you leave. Our doors will always be open', {
                    position: "top-center",
                    autoClose: 10000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    })
                }
              
            )
        }else{
            toast.warning('Please log in to proceed', {
                position: "top-center",
                limit: 3,
                autoClose: 10000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
      
    }

    render() {
        let cars = this.state.cars
        console.log(cars)
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
                                Welcome to HTM Auto
                            </h2>
                            <p className="text_slider">
                                Our mission is to provide the ultimate
                                car buying experience.
                            </p>
                            <button className="btn_rm_slider" onClick={() => window.location.href = ROOT + '/about'}>Read more</button>
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
                                We've a good relation client seller and you can 
                                call back us if you've some problems.
                            </p>
                            <button className="btn_rm_slider" onClick={() => window.location.href = ROOT + '/about'}>Contact us</button>
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
                                <button className="btn_rm_slider" onClick={() => window.location.href = ROOT + '/cars'}>Search</button>
                        </div>
                    </div>
                    <img src={image3} alt="" className="img_slide" />
                </div>
                <div className="div_slide">
                    <div className="info_by_slide">
                        <div className="contain_info">
                            <h2 className="welcome_to">
                                Find parts
                            </h2>
                            <p className="text_slider">
                            You can find some part of car that you search.
                            </p>
                            <button className="btn_rm_slider">Comming soon!</button>
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
                            About HTM  Auto
                        </h2>
                        <p className="talk_text" data-aos="fade-up">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <button className="talk_btn" data-aos="fade-up" onClick={() => window.location.href = ROOT + '/about'}>See details</button>
                    </div>
                    <div className="work_div">
                        <div className="work_part" data-aos="fade-down">
                            <p className="work_icon_part">
                                <img src={icon1} alt="" />
                            </p>
                            <div className="work_text">
                                <h2 className="title_work">Inventory</h2>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            </div>
                            <button className="work_btn" onClick={() => window.location.href = ROOT + '/cars'}>See more</button>
                        </div>
                        <div className="work_part" data-aos="fade-down" data-aos-delay="200">
                            <p className="work_icon_part">
                                <img src={icon2} alt="" />
                            </p>
                            <div className="work_text">
                                <h2 className="title_work">Services</h2>
                                incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam
                            </div>
                            <button className="work_btn" onClick={() => window.location.href = ROOT + '/about'}>See more</button>
                        </div>
                        <div className="work_part" data-aos="fade-down" data-aos-delay="400">
                            <p className="work_icon_part">
                                <img src={icon3} alt="" />
                            </p>
                            <div className="work_text">
                                <h2 className="title_work">Reviews</h2>
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            </div>
                            <button className="work_btn" onClick={() => window.location.href = ROOT + '/reviews'}>See more</button>
                        </div>
                    </div>
                </div>
                {cars.length !== 0 &&  <div className="some_cars">
                    <h2 className="title_feature" data-aos="fade-down">Featured vehicles</h2>
                    <div className="cars_slide" data-aos="fade-down">
                        <Carousel 
                          plugins= {[
                            'infinite','arrows',
                            {
                              resolve: slidesToShowPlugin,
                              options: {
                                numberOfSlides: 3,
                                keepDirectionWhenDragging: true
                              }
                            }
                          ]}
                          breakpoints = {{
                              640: {
                                plugins: [
                                  {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                      numberOfSlides: 1,
                                    }
                                  }
                                ]
                              },
                              900: {
                                plugins: [
                                  {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                      numberOfSlides: 2,
                                    }
                                  }
                                ]
                              },
                              1024: {
                                plugins: [
                                  {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                      numberOfSlides: 3,
                                    }
                                  }
                                ]
                              }
                                }}
                          >
                            {(cars && cars.length !== 0 )&& cars.map(e=> <div key={e.data.attributes.id} className="div_cars">
                                                                
                                <div className="div_img_cars">
                                    <img src={e.data.attributes.images[0] && e.data.attributes.images[0].url} className="img_cars_slide" alt="" />
                                </div>
                                <div className="div_info_cars">
                                    <div className="cars_mark_name">
                                        <p className="mark_cars">{e.data.attributes.make} {e.data.attributes.model} </p>
                                        <p className="title_cars">{e.data.attributes.year} {e.data.attributes.make} {e.data.attributes.model}</p>
                                    </div>
                                    <p className="cars_priceS">
                                        ${e.data.attributes.price}
                                    </p>
                                </div>
                                <div className="btn_slide_carP">
                                    <button className="view_details_cars" onClick={() => window.location.href = `cars/${e.data.attributes.id}/show`}>View details</button>
                                </div>
                              </div>)

                            }
                      
                        </Carousel>
                    </div>
                    <div className="view_more_slideC">
                        <button className="btn_more_slideC" onClick={() => window.location.href = ROOT + '/cars'}>View more</button>
                    </div>
                </div> }
               
                <div className="part_create">
                    <div className="part_text_btn">
                        <p className="part_text_c">
                            Use our Car Finder request form below and we 'll help you find the vehicle you want.
                        </p>
                        <button className="btn_c" onClick={() => window.location.href = ROOT + '/cars'}> Search <i className="fas fa-chevron-right icon_create"></i> </button>
                    </div>
                </div>
                <div className="part_offers">
                    <div className="offers_form" data-aos="fade-up" data-aos-delay="100">
                        <h2 className="h2_offers"> RECEIVE OFFERS </h2>
                        <p className="p_offers"> Don't miss out any update from us! </p>
                        <div className="form_offers">
                           <button className="btn_offers" onClick={() =>  this.handleSubmit()} >{ this.state.email_subscription ? 'Unsubcribe' : 'Keep me updated'} </button> 
                        </div>
                    </div>
                    <div className="offers_img" data-aos="fade-up">
                        <img src={receiveOfferImg} className="img_offer" alt="" />
                    </div>
                </div>
                <div className="some_elements">
                    <p className="big_title_popular" data-aos="fade-up">Popular search</p>
                    <div className="cars_popular">
                        <div className="title_popular">
                            <p className="p_popular" data-aos="fade-up"> Popular make</p>
                            <div className="line_popular"></div>
                        </div>
                        <div className="element_popular" data-aos="fade-up">
                            <div className="elements_list">
                                <img src={logo1} className="elements_icon" alt="" />
                                <a href="/cars?make=Lexus" className="elements">Lexus</a>
                            </div>
                            <div className="elements_list">
                                <img src={logo2} className="elements_icon" alt="" />
                                <a href="/cars?make=Toyota" className="elements">Toyota</a>
                            </div>
                            <div className="elements_list">
                                <img src={logo3} className="elements_icon" alt="" />
                                <a href="/cars?make=Nissan" className="elements">Nissan</a>
                            </div>
                            <div className="elements_list">
                                <img src={logo4} className="elements_icon" alt="" />
                                <a href="/cars?make=Honda" className="elements">Honda</a>
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
                                <a href="/cars?model=Lexus SC 430" className="elements">Lexus SC 430</a>
                            </div>
                            <div className="elements_list">
                                <a href="/cars?model=Toyota Camry" className="elements">Toyota Camry</a>
                            </div>
                            <div className="elements_list">
                                <a href="/cars?model=Nissan Sentra" className="elements">Nissan Sentra</a>
                            </div>
                            <div className="elements_list">
                                <a href="/cars?model=Honda Civic" className="elements">Honda Civic</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         <Footer/>
          </div>
        );
    }
}
