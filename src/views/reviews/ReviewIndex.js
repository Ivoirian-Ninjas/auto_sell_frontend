import React, { Component } from 'react'
import ReviewAddModal from './ReviewAddModal';
import '../../assets/css/review_style.css'
import StarRatings from 'react-star-ratings'
import ReadMoreAndLess from 'react-read-more-less';
import current_user from '../../helpers/current_user';
import { ToastContainer, toast } from 'react-toastify';


export default class ReviewIndex extends Component {
    state={
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

                    <div className="review_part">
                        <div className="part_sms_review">
                            <h1 className="name_user_review"> Pascale Duprez</h1>
                            <h1 className="date_review">21 May 2020</h1>
                            <p className="p_rate">
                                 <StarRatings rating={5} starRatedColor="#f5a142"
                                       numberOfStars={5} name='rating'
                                        starDimension = "30px" starSpacing = "7px" starHoverColor="#f5a142" />
                            </p>
                            <div className="message_review">
                                    <ReadMoreAndLess
                                    ref={this.ReadMore}
                                    className="message_review"
                                    charLimit={200}
                                    readMoreText="Read more"
                                    readLessText="Read less"
                                    >
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </ReadMoreAndLess>
                            </div> 
                       
                        
                         
                        </div>
                       
                    </div>

                    <div className="review_part">
                        <div className="part_sms_review">
                            <h1 className="name_user_review"> Pascale Duprez</h1>
                            <h1 className="date_review">21 May 2020</h1>
                            <p className="p_rate">
                                 <StarRatings rating={5} starRatedColor="#f5a142"
                                       numberOfStars={5} name='rating'
                                        starDimension = "30px" starSpacing = "7px" starHoverColor="#f5a142" />
                            </p>
                            <div className="message_review">
                                    <ReadMoreAndLess
                                    ref={this.ReadMore}
                                    className="message_review"
                                    charLimit={200}
                                    readMoreText="Read more"
                                    readLessText="Read less"
                                    >
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </ReadMoreAndLess>
                            </div> 
                       
                        
                         
                        </div>
                       
                    </div>
                  
                </div>
            </div>
        )
    }
}
