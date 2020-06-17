
import React, { Component } from 'react'
import {ROOT,HEADERS, API_ROOT} from '../../helpers/constant';
import CalendarModal from './CalendarModal'
import '../../assets/css/car_show.css'
import Gallery from 'react-grid-gallery'
import GalleryRange from "react-photo-gallery"
import Lightbox from 'react-images'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import icon_show1 from '../../assets/img/icon/icons8-gas-station-100-8.png'
import icon_show2 from '../../assets/img/icon/icons8-engine-500-5.png'
import icon_show3 from '../../assets/img/icon/icons8-mpg-500-2.png'
import icon_show4 from '../../assets/img/icon/icons8-substation-500.png'
import icon_show5 from '../../assets/img/icon/icons8-pen-drive-500.png'
import slideImg1 from "../../assets/img/cars-img/patrick-tomasso-CP1cKFIl7qc-unsplash.jpg"
import slideImg2 from "../../assets/img/cars-img/jonathan-daniels-sfqxNM2ugfc-unsplash.jpg"
import slideImg3 from "../../assets/img/cars-img/benjamin-child-7Cdw956mZ4w-unsplash.jpg"
import slideImg4 from "../../assets/img/cars-img/serge-kutuzov-1K9-TbJWs2U-unsplash.jpg"
import Carousel, {
    Dots
} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css'
import current_user from '../../helpers/current_user';
export default class CarShow extends Component {
    componentDidMount(){
        // find the id of the car
        window.addEventListener('scroll', this.handleScroll, true)
        const id = window.location.pathname.match(/\d/g).join('')
        if(id){
            fetch(API_ROOT + `/cars/${id}`)
            .then(resp => resp.json())
            .then(json => this.setState({car: json.car.data.attributes, features: json.car.data.attributes.features}))
        }
      
        // 
    }
    state={
        car: {},
        openModal: false,
        Position:"absolute",
        Top: "95%",
    }
    // attributes :images,:model, :make, :price, :mpg, :mileage, :style,:maximum_seats,:engine, :transmission, :fuel, :driveTrain, :condition, :exteriorColor, :interiorColor, :interiorFabric, :stock, :vin, :description,:status, :year
    display_features = features =>  features.map(e => <li key={e.title}>{e.title}</li>)
    display_images = images => images.map(e => <div key={e.url} className="showImage_bloc"><img src={e.url} className="showImage_img" /></div>)
    handleScroll = () => {
        var pageHeight = this.refs.myContainers
        var infoHeight = this.refs.myContainer
        var scrollHeight = window.scrollY;
            // console.log(scrollHeight, pageHeight.clientHeight)
        if (scrollHeight > (pageHeight.clientHeight+100) && scrollHeight < (infoHeight.clientHeight+600)) {
            console.log(scrollHeight, pageHeight.clientHeight)
            this.setState({
                Position: "fixed",
                Top: "0%",
            })
        } else {
            this.setState({
                Position: "absolute",
                Top: "95%"
            })

        }
        
    }
    close_modal = () => {
        this.setState({
            openModal: false
        })
    }
    render() {
        let car = this.state.car.status &&  this.state.car
        let modal = this.state.openModal ? <CalendarModal /> : null
        let images = car && car.images.map(e => ({original: e.url, thumbnail: e.url}) )

        return (
            <div>
                <div>{modal && modal}</div>
                <div className="show_images" ref="myContainers">
                {/*<ImageGallery 
                                            items={images} 
                                            showThumbnails
                                            showIndex
                                            thumbnailPosition="right"
                                            showFullscreenButton
                                            showBullets
                                            showPlayButton={false}
                    />
                   car && this.display_images(car.images) <Gallery
                        images={images}
                        showLightboxThumbnails={true}
                        enableLightbox={true}
                        enableImageSelection={false}
                    />*/}
                    {images && 
                        <ImageGallery 
                            items={images} 
                            showThumbnails={true}
                            showIndex={false}
                            thumbnailPosition="bottom"
                            showFullscreenButton
                            showBullets={false}
                            showPlayButton={false}
                            showNav={true}
                    />
                    }
                </div>
                <div className="under_img">
                    <div className="show_infos" ref="myContainer">
                        <h3 className="name_show">Peugeot 5008</h3>
                        <p className="surname_show">Twingo II 1.2 LEV 16v 75 eco2 Walkman Limited Edition</p>
                        <p className="year_mile">2017, 20, 895 Km </p>
                        <p className="general_info">General Information</p>
                        <div className="show_details">
                            <p className="p_nameElement">Description : </p>
                            <p className="p_Element">{car && car.description}</p>
                        </div>
                        <div className="show_details">
                            <p className="p_nameElement">Status : </p>
                            <p className="p_Element">{car && car.status} </p>
                        </div>
                        <div className="show_details">
                            <p className="p_nameElement">Body Type : </p>
                            <p className="p_Element">{car && car.style}</p>
                        </div>
                        <div className="show_details">
                            <p className="p_nameElement">Interior : </p>
                            <p className="p_Element">{car && car.interiorColor }</p>
                        </div>
                        <div className="show_details">
                            <p className="p_nameElement">Exterior : </p>
                            <p className="p_Element">{car && car.exteriorColor}</p>
                        </div>
                        <div className="show_details">
                            <p className="p_nameElement">VIN : </p>
                            <p className="p_Element">{car && car.vin }</p>
                        </div>
                        <p className="general_info">Performance</p>
                        <div className="show_details">
                            <p className="p_nameElement">
                                <img src={icon_show2} className="icon_show" alt =""/>
                                Engine : 
                            </p>
                            <p className="p_Element">{car && car.engine}</p>
                        </div>
                        <div className="show_details">
                            <p className="p_nameElement">
                                <img src={icon_show4} className="icon_show" alt =""/>
                                Transmission : 
                            </p>
                            <p className="p_Element">{car && car.transmission}</p>
                        </div>
                        <div className="show_details">
                            <p className="p_nameElement">
                                <img src={icon_show5} className="icon_show" alt =""/>
                                Drive Train : 
                            </p>
                            <p className="p_Element">{car && car.driveTrain}</p>
                        </div>
                        <div className="show_details">
                            <p className="p_nameElement">
                                <img src={icon_show1} className="icon_show" alt =""/>
                                Fuel Type : 
                            </p>
                            <p className="p_Element">{car && car.fuel}</p>
                        </div>
                        <div className="show_details">
                            <p className="p_nameElement">
                                <img src={icon_show3} className="icon_show" alt =""/>
                                MPG : 
                            </p>
                            <p className="p_Element">{car && car.mpg}</p>
                        </div>
                        <p className="general_info">Features</p>
                        <div className="show_details">
                            <ul>
                                {car && this.display_features(car.features)}
                            </ul>
                        </div>
                        <div className="schedule_bloc">
                            <p className="p_Schedule">Schedule a test drive </p>
                            <button onClick={() => this.setState({openModal: true})} className="btn_schedule">
                                <i className="far fa-calendar-check icon_calendar"></i> Calendar
                            </button>
                        </div>
                        <div className="bloc_edit">
                            <button className="btn_edit">Edit <i className="fa fa-edit"></i> </button>
                        </div>
                    </div>
                    <div className="part_name_show" style={{position: ""+this.state.Position+"", 
                        top:""+this.state.Top+"", }}>
                        <h2 className="price_car_show"> $ 20000</h2>
                        <p className="number_seller">Number of seller : </p>
                        <p className="contact_hilaire"> +1 (817) 937-3306</p>
                        <button className="contact_us">
                            <i className="far fa-envelope"></i> Contact us 
                        </button>
                    </div>
                </div>                    
                <div className="any_question">
                    <h3 className="question_h3">Any Questions ? </h3>
                    <p className="host_name">Name: Hilaire Kadjo</p>
                    <p className="host_mail">Email: <a className="link_host" href='mailto:hilaire.auto.sell@gmail.com' target="_blank">hilaire.auto.sell@gmail.com</a> </p>
                    <p className="host_number">Phone: <a className="link_host" href='tel: +1 (817) 937-3306' target="_blank">+1 (817) 937-3306</a></p>
                </div>
                <div className="similar_cars">
                    <p className="p_similar">Similar car</p>
                    <div className="bloc_similar">
                        <Carousel slidesPerPage={4} arrows infinite 
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
                                        slidesPerPage: 4,
                                        arrows: true
                                    }
                                }
                            }>
                            <div className="div_similar_cars">
                                <div className="div_similar_img_cars">
                                    <img src={slideImg1} className="img_cars_slide" alt="" />
                                </div>
                                <div className="div_info_cars">
                                    <p className="cars_mark_name">
                                        <p className="mark_similar_cars">Peugeot 308 </p>
                                        <p className="title_similar_cars">1.2 PureTech S&S 130 EAT8 GT Linei</p>
                                    </p>
                                    <p className="cars_similar_priceS">
                                        15 000$
                                    </p>
                                </div>
                                <div className="btn_slide_carP">
                                    <button className="view_similar_details_cars">View details</button>
                                </div>
                            </div>
                            <div className="div_similar_cars">
                                <div className="div_similar_img_cars">
                                    <img src={slideImg2} className="img_cars_slide" alt="" />
                                </div>
                                <div className="div_info_cars">
                                    <p className="cars_mark_name">
                                        <p className="mark_similar_cars">Peugeot 307 </p>
                                        <p className="title_similar_cars">1.2 PureTech S&S 130 EAT8 GT Linei</p>
                                    </p>
                                    <p className="cars_similar_priceS">
                                        15 000$
                                    </p>
                                </div>
                                <div className="btn_slide_carP">
                                    <button className="view_similar_details_cars">View details</button>
                                </div>
                            </div>
                            <div className="div_similar_cars">
                                <div className="div_similar_img_cars">
                                    <img src={slideImg3} className="img_cars_slide" alt="" />
                                </div>
                                <div className="div_info_cars">
                                    <p className="cars_mark_name">
                                        <p className="mark_similar_cars">Peugeot 306 </p>
                                        <p className="title_similar_cars">1.2 PureTech S&S 130 EAT8 GT Linei</p>
                                    </p>
                                    <p className="cars_similar_priceS">
                                        15 000$
                                    </p>
                                </div>
                                <div className="btn_slide_carP">
                                    <button className="view_similar_details_cars">View details</button>
                                </div>
                            </div>
                            <div className="div_similar_cars">
                                <div className="div_similar_img_cars">
                                    <img src={slideImg4} className="img_cars_slide" alt="" />
                                </div>
                                <div className="div_info_cars">
                                    <p className="cars_mark_name">
                                        <p className="mark_similar_cars">Peugeot 306 </p>
                                        <p className="title_similar_cars">1.2 PureTech S&S 130 EAT8 GT Linei</p>
                                    </p>
                                    <p className="cars_similar_priceS">
                                        15 000$
                                    </p>
                                </div>
                                <div className="btn_slide_carP">
                                    <button className="view_similar_details_cars">View details</button>
                                </div>
                            </div>
                        </Carousel>
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
                                            {!current_user() ? <React.Fragment>
                                                <li><a href="/login">Login</a></li>
                                                <li><a href="/signup">Sign Up</a></li>
                                            </React.Fragment> :

                                            <li><a href='#'>You are signed in as {current_user().email}</a></li>
                                            }
                                        </ul>
                                    </div>
                                    <div className="col-md-4 ml-auto">
                                        <h2 className="footer-heading mb-4">Features</h2>
                                        <ul className="list-unstyled">
                                            <li><a href="/cars">Cars for sale</a></li>
                                            <li><a href="/about">About us</a></li>
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
        )
    }
}
