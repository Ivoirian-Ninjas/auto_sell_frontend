import React, { Component } from 'react'

export default class CarNew extends Component {

    state={
        model: '',
        transmission: '',
        images: '',
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
    handlChange = (event) => this.setState({[event.target.name]: event.target.value })
    handleSubmit = () =>{
       const check_empty_val = Object.keys(this.state).map(key => this.state[key] === '')
       if(check_empty_val.length !== 0){
           console.log('complete the form')
       }else{
           console.log('yeahhhhh')
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
                        <input name='model' value={this.state.model} onChange={this.handlChange}/>
                    </div>

                    <div>
                        <label>Model</label>
                        <input name='model' value={this.state.model} onChange={this.handlChange}/>
                    </div>


                   <div>
                       <label>Transmission</label>
                       <select name='Transmission' value={this.state.transmission} onChange={this.handlChange}>
                            <option value="Automatic">Automatic</option>
                            <option value="Semi-auto">Semi Auto</option>
                            <option value="Continuously variable transmission">Continuously variable transmission</option>
                            <option value="Manual">Manual</option>
                       </select>
                   </div>

                   <div>
                        <label>Select Images</label>
                        <input type='file' />
                    </div>

                    <div>
                        <label>Description</label>
                        <textarea name='description' value={this.state.description} onChange={this.handlChange}/>
                    </div>   
                    <div>
                       <label>Condition</label>
                       <select name='condition' value={this.state.condition} onChange={this.handlChange}>
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Poor">Poor</option>
                       </select>
                   </div>  
                    <div>
                        <label>Mileage</label>
                        <input name='mileage' type='number' value={this.state.mileage} onChange={this.handlChange}/>
                    </div>
                    <div>
                        <label>Year</label>
                        <input name='year' type='number' value={this.state.year} onChange={this.handlChange}/>
                    </div>

                    <div>
                        <label>Price</label>
                        <input name='price' type='number'  step='0.01' value={this.state.price} onChange={this.handlChange}/>
                    </div>

                    <h3>Other Info</h3>

                    <div>
                        <label>Mileage Per Gallon</label>
                        <input name='mpg' type='number' value={this.state.mpg} onChange={this.handlChange}/>
                    </div>

                   <div>
                       <label>Style</label>
                       <input name='style' value={this.state.style} onChange={this.handlChange}/>
                   </div>

                   <div>
                       <label>Maximum Seat</label>
                       <input name='maximum_seats' value={this.state.maximum_seats} onChange={this.handlChange}/>
                   </div>

                    <div>
                       <label>Engine</label>
                       <input name='engine' value={this.state.engine} onChange={this.handlChange}/>
                   </div>
                   <div>
                       <label>Fuel</label>
                       <input name='fuel' value={this.state.fuel} onChange={this.handlChange}/>
                   </div>

                   <div>
                       <label>Drive Train</label>
                       <input name='driveTrain' value={this.state.driveTrain} onChange={this.handlChange}/>
                   </div>


                   <div>
                       <label>Exterior Color</label>
                       <input name='exteriorColor' value={this.state.exteriorColor} onChange={this.handlChange}/>
                   </div>

                  
                   <div>
                       <label>Interior Color</label>
                       <input name='interiorColor' value={this.state.interiorColor} onChange={this.handlChange}/>
                   </div>

                   
                   <div>
                       <label>Stock</label>
                       <input name='stock' value={this.state.stock} onChange={this.handlChange}/>
                   </div>

                   <div>
                       <label>Vin</label>
                       <input name='vin' value={this.state.vin} onChange={this.handlChange}/>
                   </div>

                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}
//     t.string "interiorColor"
//     t.string "interiorFabric"
//     t.string "stock"
//     t.string "vin"
