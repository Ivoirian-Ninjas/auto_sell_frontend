import React from 'react'
import Iframe from 'react-iframe'


export default function CalendarModal() {
    return (
        <div style={{display:'flex', width: '60%', "max-width": '100%', margin: '0 auto',
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        "z-index": 29999,
        "background-color": '#fff',
        "flex-direction": 'column',
        "box-shadow": '0px 0px 0px 400px rgba(0, 0, 0, 0.40)'}}>



        <h1>Let's Schedule</h1>
        {/* <iframe  style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe> */}
        <Iframe url="https://calendly.com/hilaire-auto-sell/60min"
        width="600px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
            
        </div>
    )
}