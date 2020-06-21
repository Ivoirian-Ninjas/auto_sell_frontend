import React, { Component } from 'react'
import ReviewAddModal from './ReviewAddModal';
import '../../assets/css/review_style.css'
import StarRatings from 'react-star-ratings'
import ReadMoreAndLess from 'react-read-more-less';
import current_user from '../../helpers/current_user';
import { ToastContainer, toast } from 'react-toastify';
import { API_ROOT } from '../../helpers/constant';


export default class ReviewIndex extends Component {
    state={
        addModal: false,
        selectedReview: null,
        reviews: []
    }
    close_modal = (modal) => { // this will close both modal
        this.setState({[modal]: false})
    }
    open_modal = (modal) => {
        this.setState({[modal]: true})
    }

    componentDidMount(){
        fetch(`${API_ROOT}/reviews`)
        .then(resp => resp.json())
        .then(json => this.setState({reviews: json.reviews}))
    }


    render() {
        const reviews = this.state.reviews
        return (
            <div>
                <div>{this.state.addModal && <ReviewAddModal close_modal={() =>this.close_modal('addModal') }/> }</div>
               
                <div className="div_review">
                        <button onClick={() =>{ 
                            if(current_user()){
                                this.open_modal('addModal') 

                            }else{
                                toast.warning('Please log in to proceed', {
                                position: "top-right",
                                limit: 3,
                                autoClose: 10000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                });
                            }

                            }} className="btn_add_review">
                                Add a review <i className="far fa-plus-square"></i>
                        </button>


                    {reviews && reviews.length !== 0 &&    reviews.map(e => <div className="review_part">
                                                                                <div className="part_sms_review">
                                                                                    <div className="part_name_review">
                                                                                        <div className="part_name">
                                                                                            <h1 className="name_user_review"> {e.data.attributes.email}</h1>
                                                                                            <h1 className="date_review">{e.data.attributes.creatated_at}</h1>
                                                                                        </div>
                                                                                    <p className="p_rate_review">
                                                                                        <StarRatings rating={e.data.attributes.rating} starRatedColor="#f5a142"
                                                                                            numberOfStars={5} name='rating'
                                                                                                starDimension = "20px" starSpacing = "7px" starHoverColor="#f5a142" />
                                                                                    </p>
                                                                                    </div>
                                                                                    <div className="message_review">
                                                                                        <ReadMoreAndLess ref={this.ReadMore} className="message_review" charLimit={200}
                                                                                            readMoreText=" Read more" readLessText=" Read less">
                                                                                           {e.data.attributes.comment}
                                                                                        </ReadMoreAndLess>
                                                                                    </div>
                                                                                </div>
                                                                            </div>)

                    }
                

                
                  

             
                </div>
            </div>
        )
    }
}
