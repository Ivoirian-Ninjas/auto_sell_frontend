import React, { Component } from 'react'
import { API_ROOT, HEADERS, ROOT } from '../../helpers/constant';
import Creatable from 'react-select/creatable';
import CarList from './CarList';
import '../../assets/css/car_new.css'
import img_Top from '../../assets/img/icon/icons8-traffic-jam-100-4.png'
import ModelList from './ModelList';
export default class CarEdit extends Component {


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
       },
       features: [],
       
       options: []
    }

    componentDidMount() {
               // find the id of the car
               const id = window.location.pathname.match(/\d/g).join('')
               if(id){
                   fetch(API_ROOT + `/cars/${id}`)
                   .then(resp => resp.json())
                   .then(json => {
                       const data = json.car.data.attributes
                       const car = {...data}
                       delete car.images
                       delete car.features
                      
                        console.log(car)
                        this.setState({car: car,images: data.images.map(e => JSON.stringify(e)),  features: data.features.map(e =>  ({label: e.title, value: e.title})  )})
                   }) 
               }
             
    }


    customStyles = {
        option: (provided, state) => ({
          ...provided,
          width: "98%",
       
        }),
        control: (provided,state) => ({
            ...provided,
          width: "98%",
          height: "50px",
          border: "1px solid  #e78f0c"
        })
    }

    handlChange = (event) => this.setState({ car:{ ...this.state.car, [event.target.name]: event.target.value} }) 
    handleFeature = (newValue, actionMeta) => {
        if( actionMeta.action !== 'remove-value' ){
            console.log(newValue)
             newValue && this.setState(state => ({features: [...newValue]}) , () => console.log(this.state.features) )
        }else{
            
            this.setState(state => ({features: [...state.features].filter(e => e !== actionMeta.removedValue)}) , () => console.log(this.state.features) )
        }
    }

    hansleFileChange = (event) => this.setState({images: event.target.files}, () => console.log(this.state.images))
    handleSubmit = () =>{
        //Check if there is any input that is an empty string
       const check_empty_val = Object.keys(this.state.car).filter(key => this.state.car[key] === '')
       console.log(check_empty_val)

       if(check_empty_val.length !== 0 || this.state.images.length === 0 || this.state.features.length === 0 ){
           console.log('please complete the form')
       }else{
           console.log("completed")

            const fd = new FormData()

            for( const e in this.state.car ){
                (e !== 'features' || e!== 'images') &&  fd.append(  `car[${e}]`, this.state.car[e] )
            }
            
            for(const e of this.state.images){
                fd.append('images[]',e)
            }
            for(const e of this.state.features){
                fd.append('features[]',e.value)
            }


            const options = {
                method: 'PATCH',
                body: fd      
            }
            console.log(options.body)
            fetch(API_ROOT + `/cars/${this.state.car.id}`,options)
            .then(resp => resp.json())
            .then(json => !json.error ? window.location.href = `${ROOT}/cars/${json.car_id}/show`: console.log(json.error))
        }
    }
    render() {
        return (
            <div>
                {/**The following div will be the form to add new cars */}
                <div className="form_div">
                    <div className="div_img_top">
                        <img src={img_Top} className="img_top" alt=""/>
                    </div>
                    <h3 className="title_form">Prime Info</h3>
                  
                    <div className="div_contain_form2">
                        <div className="div_of_select">
                            <label className="label_form_car">Make</label>
                            <select className="select_form_car" name = 'make' value={this.state.car.make} onChange={this.handlChange}>
                                <CarList/>
                            </select>
                        </div>
                        <div className="div_of_select">
                            <label className="label_form_car">Model</label>
                            <select name='model' value={this.state.car.model} onChange={this.handlChange} className="select_form_car">
                                <ModelList make={this.state.car.make}/>
                            </select>
                        </div>
                    </div>
                    <div className="div_contain_form2">
                        <div className="div_of_select">
                            <label className="label_form_car">Transmission</label>
                            <select className="select_form_car" name='transmission' value={this.state.car.transmission} onChange={this.handlChange}>
                                <option disabled selected value=''> -- select an option -- </option>
                                <option value="Automatic">Automatic</option>
                                <option value="Semi-auto">Semi Auto</option>
                                <option value="Continuously variable transmission">Continuously variable transmission</option>
                                <option value="Manual">Manual</option>
                            </select>
                        </div>
                        <div className="div_of_select">
                            <label className="label_form_car">Condition</label>
                            <select className="select_form_car" name='condition' value={this.state.car.condition} onChange={this.handlChange}>
                                <option disabled selected value=''> -- select an option -- </option>
                                <option value="Excellent">Excellent</option>
                                <option value="Good">Good</option>
                                <option value="Poor">Poor</option>
                            </select>
                        </div>
                    </div>
                    <div className="div_contain_form2">
                        <label htmlFor="img_new" className="label_select_img">Select Images <i className="far fa-images icon_add_car"></i>  <span>{this.state.images.length} Files</span></label> 
                        <input type='file' multiple onChange={this.hansleFileChange} files={this.state.images} id="img_new" className="img_add_car" accept="image/x-png,image/gif,image/jpeg"/>
                    </div>   
                    <div className="div_contain_form2">
                        <div className="div_of_select2">
                            <label className="label_form_car">Mileage</label>
                            <input name='mileage' className="input_form_car" placeholder="e.g : 50 Km" type='number'  value={this.state.car.mileage} onChange={this.handlChange}/>
                        </div>
                        <div className="div_of_select2">
                            <label className="label_form_car">Year</label>
                            <input name='year' className="input_form_car" placeholder="e.g : 2018"  type='number' value={this.state.car.year} onChange={this.handlChange}/>
                        </div>
                        <div className="div_of_select2">
                            <label className="label_form_car">Price</label>
                            <input name='price' className="input_form_car" placeholder="e.g : 14000$"   step='0.01' type='number' value={this.state.car.price} onChange={this.handlChange}/>
                        </div>
                    </div>
                    <div className="div_contain_form2">
                        <label className="label_form_car">Description</label>
                        <textarea name='description' className="text_form_car" value={this.state.car.description} onChange={this.handlChange}/>
                    </div>

                    <h3 className="title_form">Other Info</h3>
                    <div className="div_contain_form2">
                        <label className="label_form_car">Add Features</label>
                          {/* https://react-select.com/styles */}
                      <Creatable
                        isMulti
                        styles={this.customStyles}
                        name="form-field-name"
                        options={this.state.options}
                        onChange={this.handleFeature}
                        value={this.state.features}
                        theme={theme => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                                ...theme.colors,
                                primary25:  "#e78f0c", //the hover color
                                primary: "#e78f0c", //the main color 
                                neutral10: "#e78f0c", //the color of the block when the option has been selected
                                neutral20: "#e78f0c", //the color of the block when the option has been selected
                                primary50: "#e78f0c" //the color when the user click on an option
                            },
                            })}
                        />
                    </div>

                    <div className="div_contain_form2">
                        <div className="div_of_select">
                            <label className="label_form_car">Mileage Per Gallon</label>
                            <input name='mpg' placeholder="e.g : 20 km" className="input_form_car" value={this.state.car.mpg} onChange={this.handlChange}/>
                        </div>
                        <div className="div_of_select">
                            <label className="label_form_car">Style</label>
                            <input name='style' placeholder="e.g : Pick up" className="input_form_car" value={this.state.car.style} onChange={this.handlChange}/>
                        </div>
                   </div>
                   <div className="div_contain_form2">
                        <div className="div_of_select">
                            <label className="label_form_car">Maximum Seat</label>
                            <input type='number' placeholder="e.g : 5" className="input_form_car" name='maximum_seats' value={this.state.car.maximum_seats} onChange={this.handlChange}/>
                        </div>
                        <div className ="div_of_select">
                            <label className="label_form_car">Engine</label>
                            <input name='engine' placeholder="e.g : Electric" className="input_form_car" value={this.state.car.engine} onChange={this.handlChange}/>
                        </div>
                   </div>
                   <div className="div_contain_form2">
                        <div className="div_of_select">
                            <label className="label_form_car">Fuel</label>
                            <input name='fuel' placeholder="e.g : Diesel" className="input_form_car" value={this.state.car.fuel} onChange={this.handlChange}/>
                        </div>
                        <div className="div_of_select">
                            <label className="label_form_car">Drive Train</label>
                            <select name='driveTrain' className="select_form_car" value={this.state.car.driveTrain} onChange={this.handlChange}>
                                <option disabled selected value=''> -- select an option -- </option>
                                <option value="AWD">AWD</option>
                                <option value="FWD">FWD</option>
                                <option value="RWD">RWD</option>
                                <option value="4WD">4WD</option>
                            </select>
                       </div>
                   </div>
                   <div className="div_contain_form2">
                        <div className="div_of_select">
                            <label className="label_form_car">Exterior Color</label>
                            <input name='exteriorColor' placeholder="e.g : Blue" className="input_form_car" value={this.state.car.exteriorColor} onChange={this.handlChange}/>
                        </div>
                        <div className="div_of_select" >
                            <label className="label_form_car">Interior Color</label>
                            <input name='interiorColor' placeholder="e.g : Black" className="input_form_car" value={this.state.car.interiorColor} onChange={this.handlChange}/>
                        </div>
                   </div>
                   <div className="div_contain_form2">
                        <div className="div_of_select">
                            <label className="label_form_car">Stock</label>
                            <input name='stock' placeholder="e.g : Good" className="input_form_car" value={this.state.car.stock} onChange={this.handlChange}/>
                        </div>
                        <div className="div_of_select">
                            <label className="label_form_car">Vin</label>
                            <input name='vin' placeholder="e.g : 1 HG BH 41 J XXXXXX" className="input_form_car" value={this.state.car.vin} onChange={this.handlChange}/>
                        </div>
                    </div>
                    <div className="div_btn_add">
                    <button onClick={this.handleSubmit} className="btn_send_car">
                        Edit <i className="fas fa-check icon_create"></i> 
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}
