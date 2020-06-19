import StarRatings from 'react-star-ratings'
import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';


export default class ReviewAddModal extends Component {
    state = {
        title: '',
        comment: '',
        name: '',
        rating: 0
    }
    changeRating = (rating, name) => this.setState({rating, rating})
    handleChange = (event) => this.setState({[event.target.name]: event.target.value})
    handleSubmit = () => {
        if(this.state.title !== '' && this.state.comment !== '' && this.state.name !== '' && this.state.rating !== 0){
            console.log('year')
        }else{
            toast.error('Please make sure you complete the form', {
                position: "top-center",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })
        }
    }

    render() {
        return (
            <div>
                <div className="div_modal">
                    <div className="modal_contain">
                    <button onClick ={() =>this.props.close_modal()} className="close_modal_more"> X </button>
                        <h1 className="car_name"> Add your review</h1>
                        <div className="div_contain_modal">
                            <p className="p_rate">
                                Rate  : <StarRatings rating={this.state.rating} starRatedColor="#f5a142"
                                        changeRating={this.changeRating} numberOfStars={5} name='rating'
                                        starDimension = "30px" starSpacing = "7px" starHoverColor="#f5a142" />
                            </p>
                            <div className="div_of_select">
                                <label className="label_form_car">Title</label>
                                <input name='title' className="input_form_car" value={this.state.title} onChange={this.handleChange}/>
                            </div>
                            <div className="div_textarea">
                                <label className="label_form_car">Comment</label>
                                <textarea name='comment' className="text_form_car" value={this.state.comment} onChange={this.handleChange}/>
                            </div>
                            <button className="btn_review" onClick={this.handleSubmit}>
                                Review <i className="far fa-clipboard"></i>
                            </button>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}
