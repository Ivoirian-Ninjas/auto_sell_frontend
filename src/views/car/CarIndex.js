import React, { Component } from 'react'
import '../../assets/css/car_search.css'
import img1 from '../../assets/img/cars-img/one.jpg'
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
import CarList from './CarList';
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
    priceRange: [5000,1000000],
    yearRange: ['1998',(new Date).getFullYear()+1],
    mileMax: 1,
    dataYear: [{
        value: 0,
        label: '1998',
      },
      {
        value: 100,
        label: (new Date).getFullYear() + 1,
      },
    ],
    filters: [],
    search: '' , 
    not_found: ''

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
      cars.length === 0 && (cars = this.state.cars)
       
      

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

    onclickYears = (event,value) =>{
      this.setState({
        priceRange:[5000, 1000000]
      })
    
    }

    handlePriceChange = (event,value) =>{
       const range = this.state.priceRange
       this.setState({priceRange: value}, () =>  this.addFilter({type: 'price', value: value}))
       //, modifiable_cars: [...this.state.cars].filter(car =>  car.data.attributes.year <= range[1] && car.data.attributes.year >= range[0])})
      

    }
    handleMileChange = (event,value) =>{
        this.setState({mileMax: value}, () =>  this.addFilter({type: 'mileage', value: value}) )
          // modifiable_cars: [...this.state.cars].filter(car => car.data.attributes.mileage <= value)})
       
     }

    handleYearChange = (event, value) => {
        const range = this.state.yearRange
        this.setState({yearRange: value}, () => this.addFilter({type: 'year', value: value}) )
        // modifiable_cars: [...this.state.cars].filter(car =>  car.data.attributes.year <= range[1] && car.data.attributes.year >= range[0])})
       
    }
    handleChange = (event) => this.setState({search: event.target.value})

    addFilter = (data) => {
      if(data.type ==='search'){
        this.setState({filters: [data], modifiable_cars: [...this.state.cars].filter(e => ((`${e.data.attributes.year} ${e.data.attributes.make} ${e.data.attributes.model} ${e.data.attributes.style}`).toLowerCase() ).includes(data.value.toLowerCase()) ), saerch: '' }, () =>{ this.setState(this.state.modifiable_cars.length === 0 ? {not_found: "Sorry we couldn't find what you were looking for"}: {not_found: ''})})
        
      }else{
          this.setState({filters: [...this.state.filters.filter(e => e.type !== data.type), data]}, () => { //this call back will iterate through all the elements in the filter array and apply each filter.
        
            let copy_of_array =  [...this.state.cars ] 
            console.log(this.state.filters)
    
            this.state.filters.forEach(e => {
              if(e.type === 'year'){
                copy_of_array = copy_of_array.filter(car => car.data.attributes[e.type] <= e.value[1] && car.data.attributes[e.type] >= e.value[0]).length !== 0 ?  copy_of_array.filter(car => car.data.attributes[e.type] <= e.value[1] && car.data.attributes[e.type] >= e.value[0]) : this.state.cars
    
              }else if (e.type === 'mileage'){
                copy_of_array = copy_of_array.filter(car => car.data.attributes[e.type] <= e.value).length !== 0 ?  copy_of_array.filter(car => car.data.attributes[e.type] <= e.value) : this.state.cars
    
              }else if (e.type === 'price'){
                console.log(e.value[0])
                copy_of_array = copy_of_array.filter(car => (`${car.data.attributes[e.type]}` <= `${e.value[1]}` && `${car.data.attributes[e.type]}` >= `${e.value[0]}`) ).length !== 0 ? copy_of_array.filter(car => (`${car.data.attributes[e.type]}` <= `${e.value[1]}` && `${car.data.attributes[e.type]}` >= `${e.value[0]}`) ) : this.state.cars
    
              }else{
                copy_of_array = copy_of_array.filter(car => car.data.attributes[e.type] === e.value).length !== 0 ?  copy_of_array.filter(car => car.data.attributes[e.type] === e.value) : this.state.cars
    
              }
    
              
            })
            console.log(copy_of_array.length)
            this.setState(copy_of_array.length !== 0 ? {modifiable_cars: copy_of_array } : {not_found: "Sorry, we couldn't find what you were looking for", modifiable_cars: copy_of_array})
    
    
          })
      }
     
      
      
     
    }

    handleSearch = () =>{
      this.state.search !== '' && this.addFilter({type: 'search', value: this.state.search})
      this.state.search !== '' && this.setState({search: ''})
    } 

    removeFilter = (data) => {
      this.setState({filters: [...this.state.filters.filter(e => e.type !== data.type)]},() =>{ //this call back will iterate through all the elements in the filter array and apply each filter.
        let copy_of_array =  [...this.state.cars ] 
        this.state.filters.forEach(e => copy_of_array = copy_of_array.filter(car =>car.data.attributes[e.type] === e.value))
        this.setState({modifiable_cars: copy_of_array })
      } )
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
                                {this.state.makes.map(e => <p onClick ={() => this.addFilter({type: 'make',value: e }) }  className="make_name" key={e}>{e}</p>)}
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
                              <div className="body_type_bloc"onClick ={() => this.addFilter({type: 'style',value: 'SUV' }) }  >
                                <img src={img_SUV} alt="" className="body_img" />
                                <p className="body_name">SUV</p>
                              </div>
                              <div className="body_type_bloc"  onClick ={() => this.addFilter({type: 'style',value: 'Sedan' }) } >
                                <img src={img_Sedan} alt="" className="body_img" />
                                <p className="body_name">Sedan</p>
                              </div>
                              <div className="body_type_bloc" onClick ={() => this.addFilter({type: 'style',value: 'Truck' }) } >
                                <img src={img_truck} alt="" className="body_img" />
                                <p className="body_name">Truck</p>
                              </div>
                              <div className="body_type_bloc"  onClick ={() => this.addFilter({type: 'style',value: 'Coupe' }) } >
                                <img src={img_coupe} alt="" className="body_img" />
                                <p className="body_name">Coupe</p>
                              </div>
                          
                              <div className="body_type_bloc" onClick ={() => this.addFilter({type: 'style',value: 'Hatchback' }) }>
                                <img src={img_hatch} alt="" className="body_img" />
                                <p className="body_name">Hatchback</p>
                              </div>
                              <div className="body_type_bloc"  onClick ={() => this.addFilter({type: 'style',value: 'Minivan' }) } >
                                <img src={img_mini} alt="" className="body_img" />
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
                            <div className="div_color" role="button"  onClick ={() => this.addFilter({type: 'exteriorColor',value: 'White' }) }  >
                              <span className="colorW"></span> White
                            </div>
                            <div className="div_color" role="button"   onClick ={() => this.addFilter({type: 'exteriorColor',value: 'Black' }) }>
                              <span className="colorB"></span> Black
                            </div>
                            <div className="div_color" role="button"  onClick ={() => this.addFilter({type: 'exteriorColor',value: 'Greye' }) } >
                              <span className="colorG"></span> Grey
                            </div>
                            <div className="div_color" role="button"   onClick ={() => this.addFilter({type: 'exteriorColor',value: 'Silver' }) }>
                              <span className="colorS"></span> Silver
                            </div>
                            <div className="div_color" role="button"   onClick ={() => this.addFilter({type: 'exteriorColor',value: 'Red' }) }>
                              <span className="colorR"></span> Red
                            </div>
                            <div className="div_color" role="button"   onClick ={() => this.addFilter({type: 'exteriorColor',value: 'Orange' }) }>
                              <span className="colorO"></span> Orange
                            </div>
                            <div className="div_color" role="button"  onClick ={() => this.addFilter({type: 'exteriorColor',value: 'Brown' }) }>
                              <span className="colorBr"></span> Brown
                            </div>
                            <div className="div_color" role="button"  onClick ={() => this.addFilter({type: 'exteriorColor',value: 'Gold' }) } >
                              <span className="colorGo"></span> Gold
                            </div>
                            <div className="div_color" role="button"   onClick ={() => this.addFilter({type: 'exteriorColor',value: 'Yellow' }) }>
                              <span className="colorY"></span> Yellow
                            </div>
                            <div className="div_color" role="button"  onClick ={() => this.addFilter({type: 'exteriorColor',value: 'Green' }) } >
                              <span className="colorGr"></span> Green
                            </div>
                            <div className="div_color" role="button"  onClick ={() => this.addFilter({type: 'exteriorColor',value: 'Blue' }) } >
                              <span className="colorBl"></span> Blue
                            </div>
                            <div className="div_color" role="button"  onClick ={() => this.addFilter({type: 'exteriorColor',value: 'Purple' }) } >
                              <span className="colorP"></span> Purple
                            </div>
                            <div className="div_color" role="button"  onClick ={() => this.addFilter({type: 'exteriorColor',value: 'Pink' }) } >
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
                                    <div className="affiche_year">{this.state.yearRange[0]}</div>-
                                    <div className="affiche_year">{this.state.yearRange[1]}</div>
                                </RangeTypography>
                                <RangeSlider
                                defaultValue={this.state.priceMax}
                                value={this.state.yearRange}
                                aria-labelledby="range-slider"
                                step={1}
                                max={(new Date).getFullYear() + 1}
                                min={1998}
                                onChange={this.handleYearChange}
                                valueLabelDisplay="on"
                                marks={this.state.dataYear}
                                 />
                                 <button className="btn_reset">RESET</button>
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
                                    <div className="affiche_price"><span className="devise">$ </span>{this.state.priceRange[0]}</div>-
                                    <div className="affiche_price"><span className="devise">$ </span>{this.state.priceRange[1]}</div>
                                </RangeTypography>
                                <RangeSlider
                                defaultValue={this.state.priceRange}
                                value={this.state.priceRange}
                                aria-labelledby="range-slider"
                                step={1000}
                                max={1000000}
                                min={1000}
                                onChange={this.handlePriceChange}
                                valueLabelDisplay="off"
                                 />
                                <button className="btn_reset">RESET</button>
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
                              <div className="affiche_mile">
                              Max mileage : <span className="mile_max"> {this.state.mileMax} </span>
                              </div>
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
                            <button className="btn_reset">RESET</button>
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
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio1" onClick ={() => this.removeFilter({type: 'transmission' }) } /> All</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio1"  onClick ={() => this.addFilter({type: 'transmission',value: 'Automatic' }) } /> Automatic Only</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio1"  onClick ={() => this.addFilter({type: 'transmission',value: 'Manual' }) }  /> Manual Only</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio1"  onClick ={() => this.addFilter({type: 'transmission',value: 'Semi Auto' }) } />Semi Auto</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio1"  onClick ={() => this.addFilter({type: 'transmission',value: 'Continuously variable transmission"' }) }/> Continuously variable transmission</p>
                            <h3 className="I_part_title">Drive Type</h3>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio2"   onClick ={() => this.removeFilter({type: 'driveTrain' }) } /> All</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio2"   onClick ={() => this.addFilter({type: 'driveTrain',value: '4WD' }) } /> 4WD</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio2"   onClick ={() => this.addFilter({type: 'driveTrain',value: 'AWD' }) } /> AWD</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio2"   onClick ={() => this.addFilter({type: 'driveTrain',value: 'FWD' }) } /> FWD</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio2"   onClick ={() => this.addFilter({type: 'driveTrain',value: 'RWD' }) } /> RWD</p>
                            <button className="btn_reset">RESET</button>
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
                <div className="part_filter">
                  {!this.state.showFilter ?
                    <button className="btn_filters" onClick={this.filterToggle}> 
                      <i className="fa fa-sliders-h icon_filters"></i> Filters
                    </button> : null
                  }
                    {this.state.filters.length !== 0 && <React.Fragment>
                      <div className="display_filters">
                        { this.state.filters.map(e => <React.Fragment>
                            <p className="filter_choose">
                            {(e.type !== 'price' && e.type !== 'mileage' && e.type !== 'year') && e.value}
                            {e.type === 'price' && `$${e.value[0]} - $${e.value[1]}` }
                            {e.type === 'year' &&  `${e.value[0]}  - ${e.value[1]}` }
                            {e.type === 'mileage' &&  `UP to ${e.value} miles` }
                            <span className="btn_clear_filters" onClick={() => this.removeFilter(e)}> X </span>
                          </p>
                          </React.Fragment>)
                        }
                      </div>
                      <button className="btn_filters clear_display"> Clear filters </button>
                  </React.Fragment>
                  }
                  </div> 
                  
                  <div className="part_search">

                  <input className="search_input" value ={this.state.search} placeholder="Enter make, model,year or body style" onChange={this.handleChange} />
                  <button className="btn_search" onClick={this.handleSearch}> <i className="fas fa-search icon_search"></i> </button>
                  </div>
                </div>
                <div className="display_car_bloc">
                  <h3 style={{alignSelf: 'center'}}>{this.state.not_found}</h3>
                  {cars && this.display_cars(cars)}
                </div>
              </div>
              
            </div>
          </div>
        );
    }
}
