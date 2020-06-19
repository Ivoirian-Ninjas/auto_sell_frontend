import StarRatings from 'react-star-ratings'
import React, { Component } from 'react'

export default class ReviewAddModal extends Component {
    state = {
        title: '',
        comment: '',
        name: '',
        rating: 0
    }
    changeRating = (rating, name) => this.setState({rating, rating})
    handleChange = (event) => this.setState({[event.target.name]: event.target.value})

    render() {
        return (
            <div>
                <div className="div_modal">
                    <div className="modal_contain">
                    <button onClick ={() =>this.props.close_modal()} className="close_modal_more"> X </button>
                        <h1 className="car_name"> Add your review</h1>
                        <div className="div_contain_modal">
                            <div className="div_of_select">
                                <label className="label_form_car">Your name</label>
                                <input type="text" name = 'name' placeholder= 'Enter your name' className="input_form_car" />
                            </div>
                            <div className="div_of_select">
                                <label className="label_form_car">Choose the car you bought</label>
                                <select className="select_form_car" name='title'>
                                    <option value=''> Twingo II 1.2 LEV 16v 75 eco2 Walkman Limited Edition</option>
                                </select>
                            </div>
                            <div className="div_textarea">
                                <label className="label_form_car">Your impression about the car</label>
                                <textarea name='review_car' className="text_form_car" />
                            </div>
                            <div className="div_textarea">
                                <label className="label_form_car">Your impression about the client service</label>
                                <textarea name='review_service' className="text_form_car" />
                            </div>
                            <p className="p_rate">
                                Rate  : <StarRatings rating={this.state.rating} starRatedColor="#f5a142"
                                        changeRating={this.changeRating} numberOfStars={5} name='rating'
                                        starDimension = "30px" starSpacing = "7px" starHoverColor="#f5a142" />
                            </p>
                            <button className="btn_review">
                                Mark <i className="far fa-clipboard"></i> 
                            </button>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}
