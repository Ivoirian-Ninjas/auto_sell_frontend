import React, { Component } from 'react'
import '../assets/css/index.css'
import img_cars1 from '../assets/img/cars-img/1 (12).jpg'
export class index extends Component {
    render() {
        return (
            <div>
                <div className="row m-0 p-2 align-items-center div_top">
                    <p className="logo col-md-6 d-flex justify-content-center">Car for sale</p>
                    <p className="col-md-6 p-3 text-center">
                        <p className="col-lg-12 col-md-6">
                            <i className="fas fa-map-marker-alt"></i> 13535 Colorado St Dallas, TX 75243
                        </p>
                        <p className="col-lg-12 col-md-6">
                            <i className="fa fa-mobile-alt"></i> (972) 290-0889 <br/>
                            <i className="fa fa-phone-alt"></i> (972) 290-0889
                        </p>
                    </p>
                </div>
                <nav className="navbar_top">
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check" className="check_label">
                        <i className="fas fa-bars"></i>
                    </label>
                    <label className="logo mobileLogo">Car for sale</label>
                    <ul className="menu_link">
                        <input type="checkbox" id="check"/>
                        <label htmlFor="check" className="check_label check_close">
                            <i className="fa fa-times"></i>
                        </label>
                        <li className="li_menu">
                            <a href="#" className="a_menu actives">Home</a>
                        </li>
                        <li className="li_menu">
                            <a href="#" className="a_menu">Cars for sale</a>
                        </li>
                        <li className="li_menu">
                            <a href="#" className="a_menu">About us</a>
                        </li>
                        <li className="li_menu">
                            <a href="#" className="a_menu">Staff</a>
                        </li>
                        <li className="li_menu">
                            <a href="#" className="a_menu">Contact & hours</a>
                        </li>
                    </ul>
                </nav>
                <div className="row m-0 div_img">
                    {/*<img src={img_cars1} className="img-fluid w-100" alt=""/>*/}
                </div>
            </div>
        )
    }
}

export default index
