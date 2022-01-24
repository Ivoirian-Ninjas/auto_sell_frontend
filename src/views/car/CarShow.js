import React, { Component } from 'react'
import {HEADERS, API_ROOT} from '../../helpers/constant';
import CalendarModal from './CalendarModal'
import '../../assets/css/car_show.css'
import icon_show1 from '../../assets/img/icon/icons8-gas-station-100-8.png'
import icon_show2 from '../../assets/img/icon/icons8-engine-500-5.png'
import icon_show3 from '../../assets/img/icon/icons8-mpg-500-2.png'
import icon_show4 from '../../assets/img/icon/icons8-substation-500.png'
import icon_show5 from '../../assets/img/icon/icons8-pen-drive-500.png'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css'
import current_user from '../../helpers/current_user';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import CarouselComponent from '../../components/CarouselComponent'
import CarouselModal from '../../components/CarouselModal'
import HeartCheckbox from 'react-heart-checkbox';
import { toast } from 'react-toastify';
import ReactGA from 'react-ga';


export default class CarShow extends Component {
    componentDidMount(){
        // find the id of the car
        this.setState({loading: true})
        window.addEventListener('scroll', this.handleScroll, true)
        const id = window.location.pathname.match(/\d/g).join('')
        if(id){
            fetch(API_ROOT + `/cars/${id}`)
            .then(resp => resp.json())
            .then(json => this.setState({car: json.car.data.attributes,similars: json.similars, features: json.car.data.attributes.features, loading: false, checked: current_user() &&  !!current_user().cars.find(e => `${e.id}` ===`${json.car.data.attributes.id}` ) } ))
        }
      
    }
    
    state={
        car: {},
        openModal: false,
        Position:"absolute",
        similars: [],
        Top: "95%",
        loading: false,
        modalShow: false,
        checked: false
       
    }
    // attributes :images,:model, :make, :price, :mpg, :mileage, :style,:maximum_seats,:engine, :transmission, :fuel, :driveTrain, :condition, :exteriorColor, :interiorColor, :interiorFabric, :stock, :vin, :description,:status, :year
    display_features = features =>  features.map(e => <li key={e.title}>{e.title}</li>)
    //display_images = images => images.map(e => <div key={e.url} ><img src={e.url} /></div>)
    handleScroll = () => {
        
        var pageHeight = this.refs.myContainers
        var infoHeight = this.refs.myContainer
        var scrollHeight = window.scrollY;
            // console.log(scrollHeight, pageHeight.clientHeight)
        if (scrollHeight > (pageHeight.clientHeight+50) && scrollHeight < (infoHeight.clientHeight+600)) {
            console.log(scrollHeight, pageHeight.clientHeight)
            this.setState({
                Position: "fixed",
                Top: "8%",
            })
        } else {
            this.setState({
                Position: "absolute",
                Top: "95%"
            })

        }
        
    }
    check =() => {// add to the favorites
     
        this.setState({checked: !this.state.checked}, ()=> {
            ReactGA.event({
                category: `${this.state.checked ? 'Added to favorites': 'Removed from favorites' } `,
                action: `${current_user().name}, ${this.state.checked ?`added ${this.state.car && `${this.state.car.year}, ${this.state.car.engine} ${this.state.car.make} ${this.state.car.model}`} to favorites` : `removed ${this.state.car && `${this.state.car.year}, ${this.state.car.engine} ${this.state.car.make} ${this.state.car.model}`} from favorites` }`
            })
            if(this.state.checked){
                const options = {
                    method: 'POST',
                    headers: HEADERS,
                    body: JSON.stringify({user_id: current_user().id, car_id: this.state.car.id})
                }
             
                fetch(`${API_ROOT}/favorites`, options)
                .then(resp => resp.json())
                .then( json => {
                    if(!json.error){
                        JSON.stringify(json.user)  && localStorage.setItem("auto_sell_user", JSON.stringify(json.user.data.attributes) )
                    }else{
                        toast.error(json.error, {
                            position: "top-center",
                            autoClose: 10000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })
                    }
                })
          
            }else{
                const options = {
                    method: 'DELETE',
                    headers: HEADERS,
                    body: JSON.stringify({user_id: current_user().id, car_id: this.state.car.id})
                }
                fetch(`${API_ROOT}/favorites/id`, options)
                .then(resp => resp.json())
                .then(json => {
                    if(!json.error){
                        JSON.stringify(json.user)  && localStorage.setItem("auto_sell_user", JSON.stringify(json.user.data.attributes) )
                    }else{
                        toast.error(json.error, {
                            position: "top-center",
                            autoClose: 10000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })
                    }
                })
            }
        })
    }
    changeStatus = () =>{
      
            if(this.state.car.status ==='on sale' ){
                let options = {
                    method: 'PATCH',
                    headers: HEADERS,
                    body: JSON.stringify({id: this.state.car.id, car: {status: 'sold'} })     
                }
                this.setState({car: {...this.state.car, status: 'sold'} } ) 
                ReactGA.event({
                    category: 'Sold Car',
                    label: this.state.car && `${this.state.car.price} ${this.state.car.year}, ${this.state.car.engine} ${this.state.car.make} ${this.state.car.model}`,
                    action: `The admin just sold the ${this.state.car && `${this.state.car.price} ${this.state.car.year}, ${this.state.car.engine} ${this.state.car.make} ${this.state.car.model}`}`
                  })
               
                fetch(API_ROOT + `/cars/${this.state.car.id && this.state.car.id}`,options)
                .then(resp => resp.json())
                .then(json => {if(!json.error){
                    this.setState({loading: false})
                    toast.success('Your car has been succefully updated!', {
                        position: "top-center",
                        autoClose: 10000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                       
    
                  
                }else{
                    toast.error(json.error, {
                        position: "top-center",
                        autoClose: 10000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        }) 
                }  
             })
            }else{
                this.setState( {car: {...this.state.car, status: 'on sale'} }  ) 
                let options = {
                    method: 'PATCH',
                    headers: HEADERS,
                    body: JSON.stringify({id: this.state.car.id, car: {status: 'on sale' } })     
                }
                fetch(API_ROOT + `/cars/${this.state.car.id && this.state.car.id}`,options)
                .then(resp => resp.json())
                .then(json => {if(!json.error){
                    this.setState({loading: false})
                    toast.success('Your car has been succefully updated!', {
                        position: "top-center",
                        autoClose: 10000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
    
                  
                }else{
                    toast.error(json.error, {
                        position: "top-center",
                        autoClose: 10000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        }) 
                }  
             })
            }
          

    }

    close_modal = () => this.setState({  openModal: false })
    close_modal_show = () => {
        this.setState({
            modalShow: false
        })
    }
    open_modal_show = () => {
        this.setState({
            modalShow: true
        })
    }
    render() {
        let car = this.state.car.status &&  this.state.car
        let similars = this.state.similars
        let modal = this.state.openModal ? <CalendarModal close_modal={this.close_modal} /> : null
        //let images = car && car.images.map(e => ({original: e.url, thumbnail: e.url}) )
         let modal_open = (
            <div className="modal_show" modalShow={this.state.modalShow}>
                <button onClick={this.close_modal_show} className="modal_btn_close">X</button>
                <div className="modal_container">
                    {car && <CarouselModal images={car.images}/> }
                </div>
            </div>
        )
        if (!this.state.modalShow) {
            modal_open = null;
        }
        return (
            <div>
                <div>{modal && modal}</div>
                <div>{modal_open}</div>
                <Loader loading={this.state.loading}/>
                <div className="show_images" ref="myContainers">
                    <button onClick={this.open_modal_show} className="view_modal">View all</button>
                    {/** go to components/CarouselComponent to modify the css */}
                    {car && <CarouselComponent images={car.images}/> }
                </div>
                <div className="under_img">
                    <div className="show_infos" ref="myContainer">
                        <div className="bloc_name_show">
                            <h3 className="name_show">
                                {car && `${car.make} ${car.model}`}  
                            </h3>
                             <div className="div_heart">
                                {current_user() && !current_user().admin &&
                                <HeartCheckbox style={{height: 10, width: 10}} checked={this.state.checked} 
                                onClick={this.check} /> }
                            </div>
                        </div>
                        <p className="surname_show">{car && `${car.year}, ${car.engine} ${car.make} ${car.model}`}</p>
                        <p className="general_info">General Information</p>
                        <div className="show_details">
                            <p className="p_nameElement">Description : </p>
                            <p className="p_Element">{car && car.description}</p>
                        </div>
                        <div className="show_details">
                            <p className="p_nameElement">Status : </p>
                            <p className="p_Element_status">
                                {car && car.status}
                                {current_user() && current_user().admin &&
                                    <button className="change_status" onClick={(event) => this.changeStatus()}>
                                        Change
                                    </button>
                                }
                            </p>
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
                            {car && console.log(car.features)}
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
                        {(current_user() && current_user().admin) &&
                         <div className="bloc_edit">
                            <button className="btn_edit" onClick={() => window.location.href = `/cars/${car && car.id}/edit`}>Edit <i className="fa fa-edit"></i> </button>
                        </div>
                        }
                    </div>
                    <div className="part_name_show" style={{position: ""+this.state.Position+"", 
                        top:""+this.state.Top+"", }}>
                        <h2 className="price_car_show"> $ {car && car.price}</h2>
                        <p className="number_seller">Number of seller : </p>
                        <p className="contact_hilaire"> +1 (817) 937-3306</p>
                        <button className="contact_us" onClick={() => window.location.href = 'tel: +1 (817) 937-3306' }>
                            <i className="far fa-envelope"></i> Contact us 
                        </button>
                    </div>
                    <div className="part_name_mobile">
                        <p className="price_car_show_2"> $ {car && car.price}</p>
                        <p className="contact_hilaire">
                        Number of seller : <br/>
                        +1 (817) 937-3306
                        </p>
                    </div>
                </div>                    
                <div className="any_question">
                    <h3 className="question_h3">Any Questions ? </h3>
                    <p className="host_name">Name: Hilaire Kadjo</p>
                    <p className="host_mail">Email: <a className="link_host" href='mailto:hilaire.auto.sell@gmail.com' target="_blank" rel="noopener noreferrer">hilaire.auto.sell@gmail.com</a> </p>
                    <p className="host_number">Phone: <a className="link_host" href='tel: +1 (817) 937-3306' target="_blank" rel="noopener noreferrer">+1 (817) 937-3306</a></p>
                </div>
                {similars.length !== 0 && <div className="similar_cars">
                    <p className="p_similar">Similar cars</p>
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

                           {similars.map(e => <div className="div_similar_cars">
                                                    <div className="div_similar_img_cars">
                                                        <img src={e.data.attributes.images[0].url} className="img_cars_slide" alt="" />
                                                    </div>
                                                    <div className="div_info_cars">
                                                        <p className="cars_mark_name">
                                                            <p className="mark_similar_cars">{e.data.attributes.make} {e.data.attributes.model}</p>
                                                            <p className="title_similar_cars">{e.data.attributes.year} {e.data.attributes.make} {e.data.attributes.model}</p>
                                                        </p>
                                                        <p className="cars_similar_priceS">
                                                           ${e.data.attributes.price}
                                                        </p>
                                                    </div>
                                                    <div className="btn_slide_carP">
                                                        <button className="view_similar_details_cars" onClick = {() => window.location.href = `/cars/${e.data.attributes.id}/show`}>View details</button>
                                                    </div>
                                                </div>)}
                                                

                        </Carousel>
                    </div>
                </div>}
              <Footer/>
            </div>
        )
    }
}