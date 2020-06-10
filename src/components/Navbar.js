import React from 'react'
import loggedIn from '../helpers/loggedIn'
import current_user from '../helpers/current_user'
export default function Navbar() {
    return (
        <div style={{flexDirection: "row", flex: 1}}> 
            <div>
                <nav className="navbar navbar-expand-lg navbar-light nav_bar">
                    <div className="container">
                        <a class="navbar-brand" href="/">Car for sale</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Cars for sale</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Staff</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact & Hours</a>
                                </li>
                            </ul>
                            <span className="navbar-text">
                                {
                                    loggedIn() ? <div>
                                        {current_user().admin && 
                                            <ul class="navbar-nav mr-auto">
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/cars/new">New Car</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/analytics">Analytics</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/bookings">View Calendar</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/">New Car Parts</a>
                                                </li>
                                            </ul>
                                        }
                                        <button onClick={()=> {localStorage.removeItem('auto_sell_user'); window.location.href = '/'}}>Log Out</button>
                                        </div>: 
                                        (
                                        <div style={{justifyContent: 'between'}}>
                                            <ul className="navbar-nav mr-auto">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/login">Login</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/signup">Sign Up</a>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                            </span>
                        </div>
                    </div> 
                </nav>

                
            </div>

            
            
        </div>
    )
}
