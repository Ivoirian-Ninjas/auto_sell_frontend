import React from 'react'
import loggedIn from '../helpers/loggedIn'

export default function Navbar() {
    return (
        <div style={{flexDirection: "row", flex: 1}}> 
            { loggedIn() ? <button onClick={()=> {localStorage.removeItem('auto_sell_user'); window.location.href = '/'}}>Log Out</button>: 
                <div style={{justifyContent: 'between'}}>
                    <a href='/signup'>Sign Up</a>
                    <br/>
                    <a href='/login'>Log In</a>
                </div>
            }
        </div>
    )
}
