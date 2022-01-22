
import React, { Component } from 'react'
import { API_ROOT, HEADERS } from '../../helpers/constant';
import '../../assets/css/authentification.css'
import img_one from "../../assets/img/cars-img/marcus-p-oUBjd22gF6w-unsplash.jpg"
import {Link} from "react-router-dom"
import { toast } from 'react-toastify'
import ReactGA from 'react-ga';
import current_user from '../../helpers/current_user';
import ModalForgotPassword from './ModlaForgotPassword';
import {Helmet} from "react-helmet";


export default class LogIn extends Component {
    state = {
        password: '',
        email: '',
        show_modal: false
    }
    open_modal = () => this.setState({show_modal: true})
    close_modal = () => this.setState({show_modal: false})
    handleChange = (event) => this.setState({[event.target.name]: event.target.value})
    handleSubmit = (event) =>{
        event.preventDefault()
       const params = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(this.state)
        }
        fetch(API_ROOT + '/login', params)
        .then(resp => resp.json())
        .then(json => {
            if(json.error){
                toast.error(json.error, {
                    position: "top-center",
                    autoClose: 10000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }else{
              
                localStorage.setItem('auto_sell_user', JSON.stringify(json.user.data.attributes) )
                ReactGA.event({
                    category: 'Login',
                    action: `${current_user() && current_user().name}, just signed in`
                  })
                window.history.back()
             
            }
        })
        
    }

    render() {
        return (
            <div className="main_container">
                <Helmet>
                    <title>HTM AUTO | Log in</title>
                    <meta name="description" content="Helmet application" />
                </Helmet>
                <div className="main_content" >
                    {this.state.show_modal && <ModalForgotPassword close_modal={this.close_modal}/>}
                    <div className="user sign_box" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500">
                        <div className="bloc_img_box">
                            <img src={img_one} className="img_box" alt="" />
                        </div>
                        <div className="form_box">
                            <form className="form_login">
                                <h2 className="log_title">Log In</h2>
                                <input className="input_log" onChange={this.handleChange} name='email' value={this.state.email} type="mail" placeholder="user@gmail.com"/>
                                <input className="input_log" onChange={this.handleChange} name='password' value={this.state.password} type="password" placeholder="Password"/>

                                <button onClick={this.handleSubmit} className="btn_login">Login</button>
                                <p className="signup">
                                    Don't have an account ?
                                    <Link to="/signup" className="switch_a"> Sign Up</Link>
                                </p>

                            </form>
                            <button  className='switch_a' onClick={this.open_modal}>Forgot Password</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
