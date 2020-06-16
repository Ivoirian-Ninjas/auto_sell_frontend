
import React, { Component } from 'react'
import { API_ROOT } from '../../helpers/constant';
import CalendarModal from './CalendarModal'
import '../../assets/css/car_show.css'
import Gallery from 'react-grid-gallery'
import GalleryRange from "react-photo-gallery"
import Lightbox from 'react-images'
import ImageGallery from 'react-image-gallery'
export default class CarShow extends Component {
    componentDidMount(){
        // find the id of the car
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
    }
    // attributes :images,:model, :make, :price, :mpg, :mileage, :style,:maximum_seats,:engine, :transmission, :fuel, :driveTrain, :condition, :exteriorColor, :interiorColor, :interiorFabric, :stock, :vin, :description,:status, :year
    display_features = features =>  features.map(e => <li key={e.title}>{e.title}</li>)
    display_images = images => images.map(e => <div key={e.url} className="showImage_bloc"><img src={e.url} className="showImage_img" /></div>)
    render() {
        let car = this.state.car.status &&  this.state.car
        let modal = this.state.openModal ? <CalendarModal /> : null

        return (
            <div>
                <div>{modal && modal}</div>
                <div className="show_images">
                   {car && this.display_images(car.images)}
                </div>

                <div className="show_infos">
                    <div className="show_details">
                        <h3>Car History</h3>
                        <p>Description: {car && car.description}</p>
                        <p>Status: {car && car.status} </p>
                    </div>
                    <div className="show_details">
                        <h3>Basics</h3>
                        <p>Body Type: {car && car.style}</p>
                        <p>Interior: {car && car.interiorColor }</p>
                        <p>Exterior: {car && car.exteriorColor}</p>
                        <p>VIN: {car && car.vin }</p>
                    </div>
                    <div className="show_details">
                        <h3>Performance</h3>
                        <p>Engine: {car && car.engine}</p>
                        <p>Transmission: {car && car.transmission}</p>
                        <p>Drive Train: {car && car.driveTrain}</p>
                        <p>Fuel Type: {car && car.fuel}</p>
                        <p>MPG: {car && car.mpg}</p>
                    </div>
                    <div className="show_details">
                        <h3>Features</h3>
                        <ul>
                            {car && this.display_features(car.features)}
                        </ul>
                    </div>
                    <div className="show_details">
                        <h3>Schedule a test drive </h3>
                        <button onClick={() => this.setState({openModal: true})}>Calendar</button>
                    </div>
                    <div>
                        <h3>Any Questions? </h3>
                        <p>Name: Hilaire Kadjo</p>
                        <p>Email: <a href='mailto:hilaire.auto.sell@gmail.com' target="_blank">hilaire.auto.sell@gmail.com</a> </p>
                        <p>Phone: <a href='tel: +1 (817) 937-3306' target="_blank">+1 (817) 937-3306</a></p>
                    </div>
                </div>
            </div>
        )
    }
}
