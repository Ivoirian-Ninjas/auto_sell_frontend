import React, { Component } from 'react'
import current_user from '../../helpers/current_user';
import '../../assets/css/review_style.css'
import ReadMoreAndLess from 'react-read-more-less';
import { ToastContainer, toast } from 'react-toastify';
import ModalBasicInfo from './ModalBasicInfo';
import ModalPassword from './ModalPassword';
import StarRatings from 'react-star-ratings'
import ModalEditReview from './ModalEditReview';



export default class Profile extends Component {
    state={
        mod_basic: false,
        mod_password: false,
        mod_review: false,
        selecteReview: null

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
                {this.state.mod_basic && <ModalBasicInfo close_modal={() => this.close_modal('mod_basic')} user={current_user()}/>}
                {this.state.mod_password && <ModalPassword close_modal={() => this.close_modal('mod_password')}/>}
                {this.state.mod_review && this.state.selecteReview && <ModalEditReview review={this.state.selecteReview} close_modal={() => this.close_modal('mod_review')}/> }
                <div className="review_part">
                    <h1>Basic Info</h1>
                    <h1>Name: {current_user().name}</h1>
                    <h1>Email: {current_user().email}</h1>
                    <button onClick={() => this.open_modal('mod_basic')} >Edit</button>
                </div>

               <button onClick={() => this.open_modal('mod_password')}>Change password</button>
             
              <div className="div_review">
                    <h1>Your Reviews</h1>

                    { current_user().reviews.length !== 0 ?  current_user().reviews.map(e => <div className="review_part">
                                                                                <div className="part_sms_review">
                                                                                    <div className="part_name_review">
                                                                                        <div className="part_name">
                                                                                            <h1 className="name_user_review"> {current_user().name}</h1>
                                                                                            <h1 className="date_review">{e.creatated_at}</h1>
                                                                                        </div>
                                                                                    <p className="p_rate_review">
                                                                                        <StarRatings rating={e.rating} starRatedColor="#f5a142"
                                                                                            numberOfStars={5} name='rating'
                                                                                                starDimension = "20px" starSpacing = "7px" starHoverColor="#f5a142" />
                                                                                    </p>
                                                                                    </div>
                                                                                    <div className="message_review">
                                                                                        <ReadMoreAndLess ref={this.ReadMore} className="message_review" charLimit={200}
                                                                                            readMoreText=" Read more" readLessText=" Read less">
                                                                                           {e.comment}
                                                                                        </ReadMoreAndLess>
                                                                                    </div>
                                                                                </div>
                                                                                <button onClick={()=> this.setState({selecteReview: e, mod_review:true})}>Edit</button>
                                                                            </div>)

                                                             : <div className="review_part">
                                                                 <h1>You have not added a review yet. <a href='/reviews'>would you like to add a review?</a></h1>
                                                                </div>               

                    }
                

                
                  

             
                </div>

            </div>
        )
    }
}
