import React from 'react'

export default function ReviewShowModal(props) {
    return (
        <div>

            <h1>Display more details about reviews here</h1>
            <button onClick ={props.close_modal('showModal')}>Close</button>
        </div>
    )
}
