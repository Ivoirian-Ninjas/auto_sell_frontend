import React, { Component } from 'react'
import ReviewShowModal from './ReviewShowModal';
import ReviewAddModal from './ReviewAddModal';
import '../../assets/css/review_style.css'
import imgTest from "../../assets/img/cars-img/alex-suprun-A53o1drQS2k-unsplash.jpg"
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
                <div>{this.state.showModal && <ReviewShowModal close_modal ={() => this.close_modal('showModal')}/>}</div>
                <div>{this.state.addModal && <ReviewAddModal close_modal={() =>this.close_modal('addModal') }/> }</div>
                <div className="div_review">
                    <div className="review_part">
                        <div className="bloc_img_review">
                            <img src={imgTest} className="img_car_review" alt="" />
                        </div>
                        <div className="part_sms_review">
                            <h1 className="name_user_review"> Pascale Duprez</h1>
                            <h1 className="date_review">21 May 2020</h1>
                            <div className="message_review">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </div>
                            <button onClick={() => this.open_modal('showModal')} className="btn_more_review">
                                Read More <i className="fa fa-chevron-down"></i>
                            </button>
                        </div>
                    </div>
                    <button onClick={() => this.open_modal('addModal') } className="btn_add_review">
                        Add a review <i className="far fa-plus-square"></i>
                    </button>
                </div>
            </div>
        )
    }
}
