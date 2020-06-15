import React, { Component,useState } from 'react'
import '../../assets/css/car_search.css'
import img1 from '../../assets/img/cars-img/one.jpg'
import {
  makeStyles
} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'

const useStyles = makeStyles({
  root: {
    width: 300,
  },
})
function valuetext(value) {
  return `${value}°C`;
}
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
  }
  classes = useStyles()
  handleChange = () => {
    this.setState({
      value : this.value
    });
  };
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
    render() {
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
                            <button className="make_btn">All Makes</button>
                            <p className="make_name">Acura</p>
                            <p className="make_name">Alfa Romeo</p>
                            <p className="make_name">Aston Martin</p>
                            <p className="make_name">Audi</p>
                            <p className="make_name">BMW</p>
                            <p className="make_name">Buick</p>
                            <button className="make_btn">Show more</button>
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
                            <Slider
                              value={this.state.value}
                              onChange={this.handleChange}
                              valueLabelDisplay="auto"
                              aria-labelledby="range-slider"
                              getAriaValueText={valuetext}
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
                        <div className="part_visible" role="button" onClick={this.priceToggle} onKeyPress={this.priceToggle}>
                          <button className="title_each_filter_open">
                            PRICE
                          </button>
                          <i className="fa fa-chevron-up icon_state_open"></i>
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
                        <div className="part_visible" role="button" onClick={this.mileToggle} onKeyPress={this.mileToggle}>
                          <button className="title_each_filter_open">
                            MILES
                          </button>
                          <i className="fa fa-chevron-up icon_state_open"></i>
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
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio1" /> All</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio1" /> Automatic Only</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio1" /> Manuel Only</p>
                            <h3 className="I_part_title">Drive Type</h3>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio2" /> 4x4</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio2" /> AWD</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio2" /> FWD</p>
                            <p className="p_radio"><input type="radio" className="radio_transmission" name="radio2" /> RWD</p>
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
                  <div className="display_car_info">
                    <div className="car_img_bloc">
                      <img src={img1} alt="" className="car_img" />
                    </div>
                    <div className="car_info_bloc">
                      <p className="car_name_years"> 2019 Toyota Camry </p>
                      <p className="car_model"> XLE </p>
                      <p className="car_mileage"> 14,604 miles </p>
                      <p className="car_price"> $23,580 </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        );
    }
}
