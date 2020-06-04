import React from 'react'
import loggedIn from '../helpers/loggedIn'

export default function Navbar() {
    return (
        <div style={{flexDirection: "row", flex: 1}}> 
            
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a class="navbar-brand" href="/">Navbar w/ text</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Cars for sale</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Staff</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contact & Hours</a>
                                </li>
                            </ul>
                            <span class="navbar-text">
                                {
                                    loggedIn() ? <button onClick={()=> {localStorage.removeItem('auto_sell_user'); window.location.href = '/'}}>Log Out</button>: (
                                        <div style={{justifyContent: 'between'}}>
                                            <ul class="navbar-nav mr-auto">
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/login">Login</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/signup">Sign Up</a>
                                                </li>

                                            </ul>
                                            {/* <li class="nav-item">
                                                <a href="/signup" class="nav-link" href="#">Sign Up</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="/login" class="nav-link" href="#">Login</a>
                                            </li> */}
                                            {/* <a href='/signup'>Sign Up</a>
                                            <a href='/login'>Log In</a> */}
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
