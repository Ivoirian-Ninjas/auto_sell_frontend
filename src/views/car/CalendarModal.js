import React from 'react'
import Iframe from 'react-iframe'


export default function CalendarModal(props) {
    return (
        <div className="modal_schedule">
        <button onClick={props.close_modal} className="close_modal">
            x 
        </button>


        <h1 class_name='.modal_schedule'>Let's Schedule</h1>
        {/* <iframe  style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe> */}
        <Iframe url="https://calendly.com/htm-auto/30min"
        width="100%"
        height="500px"
        id="myId"
        className="myClassname"
        display="initial"
        loading="eager"
        position="relative"/>
            
        </div>
    )
}
