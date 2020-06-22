import React, { Component } from 'react'
import { API_ROOT } from '../../helpers/constant';
import current_user from '../../helpers/current_user';

export default class Favorite extends Component {
    state={
        cars: []
    }
    componentDidMount(){
        fetch(`${API_ROOT}/favorites?current_user=${current_user().id}`)
        .then(resp => resp.json())
        .then(json => {
            console.log(json.cars)
            this.setState({cars: json.cars})
        })
    }
    render() {
        return (
            <div>
                <h1>Your favorites</h1>
                { this.state.cars && this.state.cars.length !== 0 ? this.state.cars.map(e => <div className="display_car_info" key={e.data.attributes.id} onClick={() => window.location.href = `/cars/${e.data.attributes.id}/show`}>
                                                                                                <div className="car_img_bloc">
                                                                                                    <img src={e.data.attributes.images[0] && e.data.attributes.images[0].url} alt="" className="car_img" />
                                                                                                </div>
                                                                                                <div className="car_info_bloc">
                                                                                                    <p className="car_name_years"> {e.data.attributes.year} {e.data.attributes.make} </p>
                                                                                                    <p className="car_model"> {e.data.attributes.model} </p>
                                                                                                    <p className="car_mileage"> {e.data.attributes.mileage} miles </p>
                                                                                                    <p className="car_mileage"> {e.data.attributes.status} </p>
                                                                                                    <p className="car_price"> ${e.data.attributes.price} </p>
                                                                                                </div>
                                                                                            </div>): 
                                                     <div>
                                                         <h3>You did not add a car to your favorites <a href='/cars'>Would you like to see our collection of cars?</a></h3>
                                                    </div>}
                
            </div>
        )
    }
}
