import React from 'react'
import loggedIn from '../helpers/loggedIn'
import current_user from '../helpers/current_user'
import '../assets/css/index.css'
import {ROOT } from '../helpers/constant'
export default function index() {
        return (
            <div>
                {/*<div className="row m-0 p-2 align-items-center div_top">
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
                    className = {
                        document.location.href.includes('new_places') ? 'active' : null
                    }
                */}
                <nav className="navbar navbar-expand-lg fixed-top navbar-light nav_bar">
                    <div className="container">
                        <a className={document.location.href === `${ROOT}/`? 
                            'navbar-brand actives' : 'navbar-brand'} href="/">Home</a>
                        <input type="checkbox" id="check"/>
                        <label htmlFor="check" className="check_label">
                            <i className="fas fa-bars"></i>
                        </label>
                        <ul className="menu_link">
                            <input type="checkbox" id="check"/>
                            <label htmlFor="check" className="check_label check_close">
                                <i className="fa fa-times"></i>
                            </label>
                            <li className="li_menu">
                                <a href="/cars" className={document.location.href === `${ROOT}/cars`? 
                                    'a_menu actives' : 'a_menu'}> Cars for sale </a>
                            </li>
                            <li className="li_menu">
                                <a href="/about" className={document.location.href === `${ROOT}/about`? 
                                    'a_menu actives' : 'a_menu'}> About us </a>
                            </li>
                            { loggedIn() ? 
                                <div>
                                    {current_user().admin &&
                                        <React.Fragment>
                                            <li className="li_menu">
                                                <a className={document.location.href === `${ROOT}/cars/new`?
                                                    'a_menu actives' : 'a_menu'} href="/cars/new"> New Car </a>
                                            </li>

                                            {/* <li className="nav-item">
                                                    <a className="nav-link" href="/">New Car Parts</a>
                                                </li> */}
                                        </React.Fragment>
                                    }
                                    {!current_user().admin ? 
                                        <li className="li_menu">
                                            <a className={document.location.href === `${ROOT}/favorites`? 
                                                'a_menu actives' : 'a_menu'} href={`/favorites`}> Favorites </a>
                                        </li> 
                                        : 
                                        <li className="li_menu">
                                            <a className={document.location.href === `${ROOT}/cars?status=sold`? 
                                                'a_menu actives' : 'a_menu'} href={`/cars?status=sold`}> Sold cars </a>
                                        </li> 

                                    }
                                    <li className="li_menu">
                                        <a className={document.location.href === `${ROOT}/users/${current_user().id}`? 
                                            'a_menu actives' : 'a_menu'} href={`/users/${current_user().id}`}>
                                                Profile
                                        </a>
                                    </li>
                                    <li className="li_menu">
                                        <a className="a_menu"
                                        onClick={()=> {localStorage.removeItem('auto_sell_user'); window.location.href = '/'}}>
                                            Log Out
                                        </a>
                                    </li>
                                </div> :
                                (
                                    <div >
                                            <li className="li_menu">
                                                <a className={document.location.href === `${ROOT}/login`? 
                                                    'a_menu actives' : 'a_menu'} href="/login">Login</a>
                                            </li>
                                            <li className="li_menu">
                                                <a className={document.location.href === `${ROOT}/signup`? 
                                                    'a_menu actives' : 'a_menu'} href="/signup">Sign Up</a>
                                            </li>
                                    </div>
                                )
                            }
                        </ul>
                    </div>
                </nav>
                {/*<div className="row m-0 div_img">
                    <img src={img_cars1} className="img-fluid w-100" alt=""/>
                </div>*/}
            </div>
        )
}
