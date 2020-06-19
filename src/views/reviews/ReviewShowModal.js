import React from 'react'
import imgTest from "../../assets/img/cars-img/alex-suprun-A53o1drQS2k-unsplash.jpg"
export default function ReviewShowModal(props) {
    return (
        <div>
            <div className="div_modal">
                <div className="modal_contain">
                    <button onClick ={() => props.close_modal()} className="close_modal_more"> X </button>
                    <h1 className="car_name">Twingo II 1.2 LEV 16v 75 eco2 Walkman Limited Edition</h1>
                    <div className="bloc_img_modal">
                        <img src={imgTest} className="img_car_review" alt=""/>
                    </div>
                    <div className="bloc_info_modal">
                        <h2 className="reviews_title"> Reviews</h2>
                        <p className="name_user_modal">Pascale Duprez</p>
                        <p className="date_modal">21 May 2020</p>
                        <p className="car_appreciation">
                            <p className="title_big_point">Car appreciation : </p>
                            <p className="contain_appreciation">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                        </p>
                        <p className="client_service">
                            <p className="title_big_point">Service client : </p>
                            <p className="contain_appreciation">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                        </p>
                        <p className="rate_part">
                        <i className="fa fa-star"></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
