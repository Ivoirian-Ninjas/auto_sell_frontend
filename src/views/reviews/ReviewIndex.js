import React, { Component } from 'react'
import ReviewShowModal from './ReviewShowModal';
import ReviewAddModal from './ReviewAddModal';

export default class ReviewIndex extends Component {
    state={
        showModal: false,
        addModal: false
    }
    close_modal = (modal) => { // this will close both modal
        this.setState({[modal]: false})
    }
    render() {
        return (
            <div>
                <h1>View reviews here</h1>
                {this.state.showModal && <ReviewShowModal close_modal = {this.close_modal } />}
                {this.state.addModal && <ReviewAddModal close_modal = {this.close_modal }/> }
            </div>
        )
    }
}
