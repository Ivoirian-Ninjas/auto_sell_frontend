import React, { Component } from 'react'
import { API_ROOT, ROOT } from '../../helpers/constant';
import Creatable from 'react-select/creatable';
import CarList from './CarList';
import '../../assets/css/car_new.css'
import img_Top from '../../assets/img/icon/icons8-traffic-jam-100-4.png'
import ModelList from './ModelList';
import {  toast } from 'react-toastify';
import Loader from '../../components/Loader';
import ReactGA from 'react-ga';


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
            interiorFabric: '',
            vin: ''
       },
       features: [],
       options: [],
       root: ROOT,
       loading: false
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
             newValue && this.setState(state => ({features: [...state.features,...newValue]}) , () => console.log(this.state.features) )
        }else{
            
            this.setState(state => ({features: [...state.features].filter(e => e !== actionMeta.removedValue)}) , () => console.log(this.state.features) )
        }
    }

    hansleFileChange = (event) => this.setState({images: event.target.files})
    
    handleSubmit = () =>{
        //Check if there is any input that is an empty string
       const check_empty_val = Object.keys(this.state.car).filter(key => this.state.car[key] === '')
       console.log(check_empty_val)

       if(check_empty_val.length !== 0 || this.state.images.length === 0 || this.state.features.length === 0 ){
           console.log('please complete the form')
           const message = `You have ${check_empty_val.length} icomplete fields:  \n${check_empty_val.map(e => `${e} \n`).join('')} `
        //    console.log(message)
        toast.error(message, {
            position: "top-center",
            autoClose: 10000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            }) 
       }else{

            const fd = new FormData()

            for( const e in this.state.car ){
            fd.append(  `car[${e}]`, this.state.car[e] )
            }
            
            for(const e of this.state.images){
                fd.append('images[]',e)
            }
            for(const e of this.state.features){
                fd.append('features[]',e.value)
            }


            const options = {
                method: 'POST',
                body: fd      
            }
            this.setState({loading: true})
            fetch(API_ROOT + '/cars',options)
            .then(resp => resp.json())
            .then(json => {if(!json.error){
                ReactGA.event({
                    category: 'New car',
                    action: `The admin just added a new car. ID: ${json.car_id}`
                  })
                this.setState({loading: false})
                toast.success('Your car has been succefully created!', {
                    position: "top-right",
                    autoClose: 10000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    }) ;
                    setTimeout(() => {window.location.href = `/cars/${json.car_id}/show` }, 1000);

                
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
    render() {
        return (
            <div>
                {/**The following div will be the form to add new cars */}

                <div className="form_div">
           
                    <Loader loading={this.state.loading}/>
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
                            <input name='mileage' className="input_form_car" placeholder="e.g : 50 Km" type='number' value={this.state.car.mileage} onChange={this.handlChange}/>
                        </div>
                        <div className="div_of_select2">
                            <label className="label_form_car">Year</label>
                            <input name='year' className="input_form_car" placeholder="e.g : 2018" value={this.state.car.year} type= 'number' onChange={this.handlChange}/>
                        </div>
                        <div className="div_of_select2">
                            <label className="label_form_car">Price</label>
                            <input name='price' className="input_form_car" placeholder="e.g : 14000$"   step='0.01' value={this.state.car.price} type = 'number' onChange={this.handlChange}/>
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
                            <input name='mpg' placeholder="e.g : 25 City / 34 Hwy" className="input_form_car" value={this.state.car.mpg} onChange={this.handlChange}/>
                        </div>
                        <div className="div_of_select">
                            <label className="label_form_car">Style</label>
                            <select className="select_form_car" name='style' value={this.state.car.style} onChange={this.handlChange}>
                                <option disabled selected value=''> -- select an option -- </option>
                                <option value="Convertible">Convertible</option>
                                <option value="Coupe">Coupe</option>
                                <option value="Hatchback">Hatchback</option>
                                <option value="MiniVan">MiniVan</option>
                                <option value="Sedan">Sedan</option>
                                <option value="SUV">SUV</option>
                                <option value="Truck">Truck</option>
                            </select>
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
                            <label className="label_form_car">Interior Fabric</label>
                            <input name='interiorFabric' placeholder="e.g : clothe" className="input_form_car" value={this.state.car.interiorFabric} onChange={this.handlChange}/>
                        </div>
                        <div className="div_of_select">
                            <label className="label_form_car">Vin</label>
                            <input name='vin' placeholder="e.g : 1 HG BH 41 J XXXXXX" className="input_form_car" value={this.state.car.vin} onChange={this.handlChange}/>
                        </div>
                    </div>
                    <div className="div_btn_add">
                    <button onClick={!this.state.loading && this.handleSubmit} className="btn_send_car">
                        Create <i className="fas fa-check icon_create"></i> 
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}
