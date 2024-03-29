import React from 'react'
import '../../assets/css/about.css'
import img from "../../assets/img/cars-img/matt-antonioli-T_ZdgxzPS5k-unsplash - Copie.jpg"
import Footer from '../../components/Footer';
export default function About() {
    return (
        <div>
            <div className="about_div">
                <div className="bloc_image">
                    <div className="bloc_imgAbout">
                        <img src={img} alt="" className="imageAbout" />
                    </div>
                </div>
                <div className="bloc_img_about">
                    <div className="bloc_infoAbout">
                        <h3 className="h3_about">About us</h3>
                        <p className="small_about">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                        <p className="text_about">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                    </div>
                </div>
                <div className="bloc_formula">
                    <form className="form_about">
                        <h3 className="title_form_about">Contact us</h3>
                        <p className="small_text_form">
                        Contact us for more informations about the car car you want to buy or if you wanna sell yours.
                        </p>
                        <p className="host_name">Name: Hilaire Kadjo</p>
                        <p className="host_mail">
                            Email: 
                            <a className="link_host" href='mailto:hilaire.auto.sell@gmail.com' target="_blank">
                                hilaire.auto.sell@gmail.com
                            </a> 
                        </p>
                        <p className="host_number">
                            Phone: 
                            <a className="link_host" href='tel: +1 (817) 937-3306' target="_blank">
                                +1 (817) 937-3306
                            </a>
                        </p>
                        {/*<input type="text" className="text_about_input" placeholder="Your name" />
                        <input type="mail" className="text_about_input" placeholder="username@yahoo.fr" />
                        <input type="text" className="text_about_input" placeholder="Your number" />
                        <textarea className="textarea_about" placeholder="Write something here..."></textarea>
                        <button className="btn_about">Send <i className="fab fa-telegram-plane"></i> </button>*/}
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
