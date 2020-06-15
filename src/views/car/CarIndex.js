import React, { Component } from 'react'
import '../../assets/css/car_search.css'
import img1 from '../../assets/img/cars-img/one.jpg'
import {
  makeStyles
} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import img_SUV from '../../assets/img/car-model/SUV.png'
import img_Sedan from '../../assets/img/car-model/Sedan.png'
import img_truck from '../../assets/img/car-model/Pickup-Truck-PNG-Clipart.png'
import img_coupe from '../../assets/img/car-model/2016-jaguar-f-type.png'
import img_convert from '../../assets/img/car-model/949-9491261_car-side-view-convertible-png-m6-convertible-side.png'
import img_wagon from '../../assets/img/car-model/png-transparent-fiat-500l-wagon-car-fiat.png'
import img_hatch from '../../assets/img/car-model/12670_cc0640_001_qak.png'
import img_mini from '../../assets/img/car-model/6837754_preview.png'
import { API_ROOT, ROOT } from '../../helpers/constant';
import array_car from './carArrayMake'
import RangeSlider from '@material-ui/core/Slider';
import RangeTypography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
export default class CarIndex extends Component {
  state = {
    makeOpen : false,
    bodyOpen : false,
    colorOpen : false,
    yearOpen : false,
    priceOpen : false,
    mileOpen : false,
    engineOpen : false,
    showFilter : false,
    value:"2000",
    cars: [], //do not modify this attribute
    modifiable_cars: [],
    makes: array_car().slice(0,5),
    showing_less: true,
    priceRange: [5000,100000000],
    yearRange: ['1998',(new Date).getFullYear()+1],
    mileMax: 1
  
  }
  makeToggle = () => {
    this.setState({
      makeOpen : !this.state.makeOpen
    })
  }
  bodyToggle = () => {
    this.setState({
      bodyOpen : !this.state.bodyOpen
    })
  }
  colorToggle = () => {
    this.setState({
      colorOpen : !this.state.colorOpen
    })
  }
  yearToggle = () => {
    this.setState({
      yearOpen : !this.state.yearOpen
    })
  }
  priceToggle = () => {
    this.setState({
      priceOpen : !this.state.priceOpen
    })
  }
  mileToggle = () => {
    this.setState({
      mileOpen : !this.state.mileOpen
    })
  }
  engineToggle = () => {
    this.setState({
      engineOpen : !this.state.engineOpen
    })
  }
  filterToggle = () =>{
    this.setState({
      showFilter: !this.state.showFilter
    })
  }

    componentDidMount(){
        fetch(API_ROOT + '/cars')
        .then(resp => resp.json())
        .then(json => this.setState({cars: json.cars, modifiable_cars: json.cars}) )
    }

    display_cars = (cars) => {
       return cars.map(e => ( <div className="display_car_info" key={e.data.attributes.id} onClick={() => window.location.href = `${ROOT}/cars/${e.data.attributes.id}/show`}>
                                <div className="car_img_bloc">
                                    <img src={e.data.attributes.images[0] && e.data.attributes.images[0].url} alt="" className="car_img" />
                                </div>
                                <div className="car_info_bloc">
                                    <p className="car_name_years"> {e.data.attributes.year} {e.data.attributes.make} </p>
                                    <p className="car_model"> {e.data.attributes.model} </p>
                                    <p className="car_mileage"> {e.data.attributes.mileage} miles </p>
                                    <p className="car_price"> ${e.data.attributes.price} </p>
                                </div>
                            </div>
                            ) )
    }



    handlePriceChange = (event,value) =>{
       const range = this.state.priceRange
       this.setState({priceRange: value, modifiable_cars: [...this.state.cars].filter(car =>  car.data.attributes.year <= range[1] && car.data.attributes.year >= range[0])})
    }
    handleMileChange = (event,value) =>{
        this.setState({mileMax: value, modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.mileage <= value)})
     }

    handleYearChange = (event, value) => {
        const range = this.state.yearRange
        this.setState({yearRange: value, modifiable_cars: [...this.state.cars].filter(car =>  car.data.attributes.year <= range[1] && car.data.attributes.year >= range[0])})
    }
    render() {
        let cars = this.state.modifiable_cars
        return (
          <div>
            <div className="index_car_contain">
            {this.state.showFilter ?
              <div className="index_part_left" data-aos='slide-right'>
                <div className="bloc_filter_close">
                  <button className="p_filters_close" onClick={this.filterToggle}> <i className="fa fa-sliders-h icon_filters_close"></i> Filter</button>
                  <button className="btn_close_filters" onClick={this.filterToggle}> X </button>
                </div>
                <div className="filter_element">
                  <div className="each_filter">
                      {!this.state.makeOpen ? (
                        <div className="part_visible" role="button" onClick={this.makeToggle} onKeyPress={this.makeToggle}>
                          <button className="title_each_filter">
                          MAKE & MODEL
                          </button>
                            <i className="fa fa-chevron-down icon_state"></i>
                          </div>
                        ):(
                          <div>
                            <div className="part_visible" role="button" onClick={this.makeToggle} onKeyPress={this.makeToggle}>
                              <button className="title_each_filter_open">
                              MAKE & MODEL
                              </button>
                              <i className="fa fa-chevron-up icon_state"></i>
                            </div>
                            <div className="invisible_div">
                            <button className="make_btn" onClick={() => this.setState({modifiable_cars: this.state.cars})}>All Makes</button>
                                {this.state.makes.map(e => <p onClick ={() =>this.setState(state => ({modifiable_cars: [...state.cars].filter(car => car.data.attributes.make === e)}))}  className="make_name" key={e}>{e}</p>)}
                            <button className="make_btn"  onClick={() =>this.setState(this.state.showing_less ? {makes: array_car(), showing_less: false}: {makes: array_car().slice(0,5), showing_less: true} )}>Show {this.state.showing_less ? 'more' : 'less'}</button>
                            </div>
                          </div>
                          )
                        }
                  </div>
                  <div className="each_filter">
                    {!this.state.bodyOpen ? (
                      <div className="part_visible" role="button" onClick={this.bodyToggle} onKeyPress={this.bodyToggle}>
                        <button className="title_each_filter">
                          BODY TYPE
                        </button>
                          <i className="fa fa-chevron-down icon_state"></i>
                      </div>
                        ):(
                          <div>
                            <div className="part_visible" role="button" onClick={this.bodyToggle} onKeyPress={this.bodyToggle}>
                              <button className="title_each_filter_open">
                                BODY TYPE
                              </button>
                              <i className="fa fa-chevron-up icon_state"></i>
                            </div>
                            <div className="invisible_div">
                              <button className="all_type_btn" onClick={() => this.setState({modifiable_cars: this.state.cars})}>All Body Types</button>
                              <div className="body_type_bloc" onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.style === "SUV")})}>
                                <img src={img_SUV} alt="" className="body_img" />
                                <p className="body_name">SUV</p>
                              </div>
                              <div className="body_type_bloc"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.style === "Sedan")})}>
                                <img src={img_Sedan} alt="" className="body_img" />
                                <p className="body_name">Sedan</p>
                              </div>
                              <div className="body_type_bloc"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.style === "Truck")})}>
                                <img src={img_truck} alt="" className="body_img" />
                                <p className="body_name">Truck</p>
                              </div>
                              <div className="body_type_bloc"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.style === "Coupe")})}>
                                <img src={img_coupe} alt="" className="body_img" />
                                <p className="body_name">Coupe</p>
                              </div>
                          
                              <div className="body_type_bloc"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.style === "Hatchback")})}>
                                <img src={img_hatch} alt="" className="body_img" />
                                <p className="body_name">Hatchback</p>
                              </div>
                              <div className="body_type_bloc">
                                <img src={img_mini} alt="" className="body_img"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.style === "Minivan")})}/>
                                <p className="body_name">Minivan</p>
                              </div>
                            </div>
                          </div>
                        )
                    }
                  </div>
                  <div className="each_filter">
                    {!this.state.colorOpen ? (
                      <div className="part_visible" role="button" onClick={this.colorToggle} onKeyPress={this.colorToggle}>
                        <button className="title_each_filter">
                          COLOR
                        </button>
                        <i className="fa fa-chevron-down icon_state"></i>
                      </div>
                      ):(
                        <div>
                          <div className="part_visible" role="button" onClick={this.colorToggle} onKeyPress={this.colorToggle}>
                            <button className="title_each_filter_open">
                              COLOR
                            </button>
                            <i className="fa fa-chevron-up icon_state"></i>
                          </div>
                          <div className="invisible_div">
                          <div className="div_color" role="button" onClick={() => this.setState({modifiable_cars: this.state.cars})} >
                              <span className="colorW"></span> All
                            </div>
                            <div className="div_color" role="button" onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.exteriorColor === "White")})} >
                              <span className="colorW"></span> White
                            </div>
                            <div className="div_color" role="button"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.exteriorColor === "Black")})}>
                              <span className="colorB"></span> Black
                            </div>
                            <div className="div_color" role="button"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.exteriorColor === "Grey")})}>
                              <span className="colorG"></span> Grey
                            </div>
                            <div className="div_color" role="button"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.exteriorColor === "Silver")})}>
                              <span className="colorS"></span> Silver
                            </div>
                            <div className="div_color" role="button"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.exteriorColor === "Red")})}>
                              <span className="colorR"></span> Red
                            </div>
                            <div className="div_color" role="button"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.exteriorColor === "Orange")})}>
                              <span className="colorO"></span> Orange
                            </div>
                            <div className="div_color" role="button"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.exteriorColor === "Brown")})}>
                              <span className="colorBr"></span> Brown
                            </div>
                            <div className="div_color" role="button"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.exteriorColor === "Gold")})}>
                              <span className="colorGo"></span> Gold
                            </div>
                            <div className="div_color" role="button"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.exteriorColor === "Yellow")})}>
                              <span className="colorY"></span> Yellow
                            </div>
                            <div className="div_color" role="button"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.exteriorColor === "Green")})}>
                              <span className="colorGr"></span> Green
                            </div>
                            <div className="div_color" role="button"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.exteriorColor === "Blue")})}>
                              <span className="colorBl"></span> Blue
                            </div>
                            <div className="div_color" role="button"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.exteriorColor === "Purple")})}>
                              <span className="colorP"></span> Purple
                            </div>
                            <div className="div_color" role="button"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.exteriorColor === "Pink")})}>
                              <span className="colorPi"></span> Pink
                            </div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                  <div className="each_filter">
                    {!this.state.yearOpen ? (
                      <div className="part_visible" role="button" onClick={this.yearToggle} onKeyPress={this.yearToggle}>
                        <button className="title_each_filter">
                          YEAR
                        </button>
                        <i className="fa fa-chevron-down icon_state"></i>
                      </div>
                      ):(
                        <div>
                          <div className="part_visible" role="button" onClick={this.yearToggle} onKeyPress={this.yearToggle}>
                            <button className="title_each_filter_open">
                              YEAR
                            </button>
                            <i className="fa fa-chevron-up icon_state"></i>
                          </div>
                          <div className="invisible_div">
                                 <RangeTypography id="range-slider" gutterBottom>
                                    {this.state.yearRange[0]} - {this.state.yearRange[1]}
                                </RangeTypography>
                                <RangeSlider
                                defaultValue={this.state.priceMax}
                                value={this.state.yearRange}
                                aria-labelledby="range-slider"
                                step={1}
                                max={(new Date).getFullYear() + 1}
                                min={1998}
                                onChange={this.handleYearChange}
                                valueLabelDisplay="off"

                                 />
                          </div>
                        </div>
                      )
                    }
                  </div>
                  <div className="each_filter">
                    {!this.state.priceOpen ? (
                      <div className="part_visible" role="button" onClick={this.priceToggle} onKeyPress={this.priceToggle}>
                        <button className="title_each_filter">
                          PRICE
                        </button>
                        <i className="fa fa-chevron-down icon_state"></i>
                      </div>
                      ):(
                        <div>
                          <div className="part_visible" role="button" onClick={this.priceToggle} onKeyPress={this.priceToggle}>
                            <button className="title_each_filter_open">
                              PRICE
                            </button>
                            <i className="fa fa-chevron-up icon_state"></i>
                          </div>
                          <div className="invisible_div">
                                 <RangeTypography id="range-slider" gutterBottom>
                                    ${this.state.priceRange[0]} - ${this.state.priceRange[1]}
                                </RangeTypography>
                                <RangeSlider
                                defaultValue={this.state.priceRange}
                                value={this.state.priceRange}
                                aria-labelledby="range-slider"
                                step={1000}
                                max={100000000}
                                min={1000}
                                onChange={this.handlePriceChange}
                                valueLabelDisplay="off"

                                 />
                          </div>
                        </div>
                      )
                    }
                  </div>
                  <div className="each_filter">
                    {!this.state.mileOpen ? (
                      <div className="part_visible" role="button" onClick={this.mileToggle} onKeyPress={this.mileToggle}>
                        <button className="title_each_filter">
                          MILES
                        </button>
                        <i className="fa fa-chevron-down icon_state"></i>
                      </div>
                      ):(
                        <div>
                          <div className="part_visible" role="button" onClick={this.mileToggle} onKeyPress={this.mileToggle}>
                            <button className="title_each_filter_open">
                              MILES
                            </button>
                            <i className="fa fa-chevron-up icon_state"></i>
                          </div>
                          <div className="invisible_div">
                          <RangeTypography id="discrete-slider-always" gutterBottom>
                                    Mileage maximum: {this.state.mileMax}
                                </RangeTypography>
                                <RangeSlider
                                defaultValue={this.state.mileMax}
                                value={this.state.mileMax}
                                aria-labelledby="discrete-slider-always"
                                step={10000}
                                min={1}
                                max={100000000}
                                onChange={this.handleMileChange}
                                valueLabelDisplay="off"

                                 />
                          </div>
                        </div>
                      )
                    }
                  </div>
                  <div className="each_filter">
                    {!this.state.engineOpen ? (
                      <div className="part_visible" role="button" onClick={this.engineToggle} onKeyPress={this.engineToggle}>
                        <button className="title_each_filter">
                          ENGINE & DRIVETRAIN
                        </button>
                        <i className="fa fa-chevron-down icon_state"></i>
                      </div>
                      ):(
                        <div>
                          <div className="part_visible" role="button" onClick={this.engineToggle} onKeyPress={this.engineToggle}>
                            <button className="title_each_filter_open">
                              ENGINE & DRIVETRAIN
                            </button>
                            <i className="fa fa-chevron-up icon_state_open"></i>
                          </div>
                          <div className="invisible_div">
                            <h3 className="I_part_title">Transmission</h3>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio1" onClick={()=> this.setState({modifiable_cars: this.state.cars})}/> All</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio1"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.transmission === "Automatic")})}/> Automatic Only</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio1"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.transmission === "Manual")})}/> Manual Only</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio1"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.transmission === "Semi Auto")})}/>Semi Auto</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio1"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.transmission ===  "Continuously variable transmission")})}/> Continuously variable transmission</p>

                           

                            <h3 className="I_part_title">Drive Type</h3>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio2" onClick={()=> this.setState({modifiable_cars: this.state.cars})}/> All</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio2"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.driveTrain === "4WD")})} /> 4WD</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio2"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.driveTrain === "AWD")})}/> AWD</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio2"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.driveTrain === "FWD")})}/> FWD</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio2"  onClick={() => this.setState({modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.driveTrain === "RWD")})}/> RWD</p>
                          </div>
                        </div>
                      )
                    }
                  </div>
                </div>
              </div> : null
              }
              <div className="index_part_right">
                <div className="filter_part">
                {!this.state.showFilter ?
                  <button className="btn_filters" onClick={this.filterToggle}> 
                    <i className="fa fa-sliders-h icon_filters"></i> Filters
                  </button> : null
                }
                  <div className="display_filters">
                    <p className="filter_choose">
                      Up to 100,000 miles 
                    </p>
                    <button className="btn_clear_filters"> X </button>
                  </div>
                  <button className="btn_filters clear_display"> Clear filters </button>
                </div>
                <div className="display_car_bloc">
                  {cars.length != 0 && this.display_cars(cars)}
                </div>
              </div>
              
            </div>
          </div>
        );
    }
}
