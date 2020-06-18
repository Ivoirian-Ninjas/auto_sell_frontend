import React, { Component } from 'react'
import ReviewShowModal from './ReviewShowModal';
import ReviewAddModal from './ReviewAddModal';

export default class ReviewIndex extends Component {
    state={
        showModal: false,
        addModal: false,
        selectedReview: null
    }
    close_modal = (modal) => { // this will close both modal
        this.setState({[modal]: false})
    }
    open_modal = (modal) => {
        this.setState({[modal]: true})

    }
    render() {
        return (
            <div>
                <h1>View reviews here</h1>
                <button onClick={() => this.open_modal('showModal')}>Read More</button>
                <button onClick={() => this.open_modal('addModal') }>Add a review</button>

                {this.state.showModal && <ReviewShowModal close_modal ={() => this.close_modal('showModal') } />}
                {this.state.addModal && <ReviewAddModal close_modal={() =>this.close_modal('addModal') }/> }
            </div>
        )
    }
}
