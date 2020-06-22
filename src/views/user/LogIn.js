
import React, { Component } from 'react'
import { API_ROOT, HEADERS } from '../../helpers/constant';
import '../../assets/css/authentification.css'
import img_one from "../../assets/img/cars-img/marcus-p-oUBjd22gF6w-unsplash.jpg"
import {Link} from "react-router-dom"
import { toast } from 'react-toastify';


export default class LogIn extends Component {
    state = {
        password: '',
        email: ''
    }
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
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }else{
                localStorage.setItem('auto_sell_user', JSON.stringify(json.user.data.attributes) )
                window.history.back()
            }
        })
        
    }

    render() {
        return (
            <div className="main_container">
                <div className="main_content" >
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
