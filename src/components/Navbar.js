import React from 'react'
import loggedIn from '../helpers/loggedIn'
import current_user from '../helpers/current_user'
export default function Navbar() {
    return (
        <div style={{flexDirection: "row", flex: 1}}> 
            <div>
                <nav className="navbar navbar-expand-lg fixed-top navbar-light nav_bar">
                    <div className="container">
                        <a className="navbar-brand" href="/">Home</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/cars">Cars for sale</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About us</a>
                                </li>
                            </ul>
                            <span className="navbar-text">
                                {
                                    loggedIn() ? <div>
                                     
                                            <ul className="navbar-nav mr-auto">
                                            {current_user().admin && 
                                            <React.Fragment>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/cars/new">New Car</a>
                                                </li>
                                             
                                                {/* <li className="nav-item">
                                                    <a className="nav-link" href="/">New Car Parts</a>
                                                </li> */}
                                            </React.Fragment>
                                            }
                                                <li className="nav-item">
                                                    <a className="nav-link" onClick={()=> {localStorage.removeItem('auto_sell_user'); window.location.href = '/'}} >Log Out</a>
                                                </li>
                                            </ul>
                                      
                                    
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
