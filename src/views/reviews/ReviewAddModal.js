import React from 'react'

export default function ReviewAddModal(props) {
    return (
        <div>
            <h1>Add reviews here</h1>
            <button onClick ={props.close_modal('addModal')}>Close</button>

        </div>
    )
}
