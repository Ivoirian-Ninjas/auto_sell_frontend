import React, { Component } from 'react'
import { API_ROOT, HEADERS, ROOT } from '../../helpers/constant';

export default class CarNew extends Component {

    state={
        images: [],
       car: { model: '',
            make: '',
            transmission: '',
            description: '',
            condition: '',
            mileage: '',
            year: '',
            price: '',
            mpg: '',
            style: '',
            maximum_seats: '',
            engine: '',
            fuel: '',
            driveTrain: '',
            exteriorColor: '',
            interiorColor: '',
            stock: '',
            vin: ''
       }
       

    }
    handlChange = (event) => this.setState({ car:{ ...this.state.car, [event.target.name]: event.target.value} }) 
    hansleFileChange = (event) => this.setState({images: event.target.files})
    handleSubmit = () =>{
        //Check if there is any input that is an empty string
       const check_empty_val = Object.keys(this.state.car).filter(key => this.state.car[key] === '')
       console.log(check_empty_val)

       if(check_empty_val.length !== 0 && this.state.images.length === 0){
           console.log('please complete the form')
       }else{
           console.log("completed")

            const fd = new FormData()

            for( const e in this.state.car ){
            fd.append(  `car[${e}]`, this.state.car[e] )
            }
            
            for(const e of this.state.images){
                console.log(e)
                fd.append('images[]',e)
            }


            const options = {
                method: 'POST',
                body: fd      
            }
            fetch(API_ROOT + '/cars',options)
            .then(resp => resp.json())
            .then(json => window.location.href = `${ROOT}/cars/${json.car_id}`)
        }
    }
    render() {
        return (
            <div>
                {/**The following div will be the form to add new cars */}
                <div>
                    <h3>Prime Info</h3>
                  
                    <div>
                        <label>Make</label>
                        <input name='make' value={this.state.car.make} onChange={this.handlChange}/>

                    </div>

                    <div>
                        <label>Model</label>
                        <input name='model' value={this.state.car.model} onChange={this.handlChange}/>
                    </div>


                   <div>
                       <label>Transmission</label>
                       <select name='transmission' value={this.state.car.transmission} onChange={this.handlChange}>
                             <option disabled selected value=''> -- select an option -- </option>
                            <option value="Automatic">Automatic</option>
                            <option value="Semi-auto">Semi Auto</option>
                            <option value="Continuously variable transmission">Continuously variable transmission</option>
                            <option value="Manual">Manual</option>
                       </select>
                   </div>

                   <div>
                        <label>Select Images</label>
                        <input type='file' multiple onChange={this.hansleFileChange} files={this.state.images}/>
                    </div>

                    <div>
                        <label>Description</label>
                        <textarea name='description' value={this.state.car.description} onChange={this.handlChange}/>
                    </div>   
                    <div>
                       <label>Condition</label>
                       <select name='condition' value={this.state.car.condition} onChange={this.handlChange}>
                            <option disabled selected value=''> -- select an option -- </option>
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Poor">Poor</option>
                       </select>
                   </div>  
                    <div>
                        <label>Mileage</label>
                        <input name='mileage' type='number' value={this.state.car.mileage} onChange={this.handlChange}/>
                    </div>
                    <div>
                        <label>Year</label>
                        <input name='year' type='number' value={this.state.car.year} onChange={this.handlChange}/>
                    </div>

                    <div>
                        <label>Price</label>
                        <input name='price' type='number'  step='0.01' value={this.state.car.price} onChange={this.handlChange}/>
                    </div>

                    <h3>Other Info</h3>

                    <div>
                        <label>Mileage Per Gallon</label>
                        <input name='mpg' type='number' value={this.state.car.mpg} onChange={this.handlChange}/>
                    </div>

                   <div>
                       <label>Style</label>
                       <input name='style' value={this.state.car.style} onChange={this.handlChange}/>
                   </div>

                   <div>
                       <label>Maximum Seat</label>
                       <input type='number' name='maximum_seats' value={this.state.car.maximum_seats} onChange={this.handlChange}/>
                   </div>

                    <div>
                       <label>Engine</label>
                       <input name='engine' value={this.state.car.engine} onChange={this.handlChange}/>
                   </div>
                   <div>
                       <label>Fuel</label>
                       <input name='fuel' value={this.state.car.fuel} onChange={this.handlChange}/>
                   </div>

                   <div>
                       <label>Drive Train</label>
                       <select name='driveTrain' value={this.state.car.driveTrain} onChange={this.handlChange}>
                            <option disabled selected value=''> -- select an option -- </option>
                            <option value="AWD">AWD</option>
                            <option value="FWD">FWD</option>
                            <option value="RWD">RWD</option>
                            <option value="4WD">4WD</option>
                       </select>
                   </div>


                   <div>
                       <label>Exterior Color</label>
                       <input name='exteriorColor' value={this.state.car.exteriorColor} onChange={this.handlChange}/>
                   </div>

                  
                   <div>
                       <label>Interior Color</label>
                       <input name='interiorColor' value={this.state.car.interiorColor} onChange={this.handlChange}/>
                   </div>

                   
                   <div>
                       <label>Stock</label>
                       <input name='stock' value={this.state.car.stock} onChange={this.handlChange}/>
                   </div>

                   <div>
                       <label>Vin</label>
                       <input name='vin' value={this.state.car.vin} onChange={this.handlChange}/>
                   </div>

                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}
