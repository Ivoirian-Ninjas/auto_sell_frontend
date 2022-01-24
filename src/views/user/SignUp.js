import React, { Component } from 'react'
import { API_ROOT, EMAIL_PATTERN, HEADERS, ROOT } from '../../helpers/constant';
import img_two from "../../assets/img/cars-img/raban-haaijk-wftNpcjCHT4-unsplash.jpg"
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';
import ReactGA from 'react-ga';
import current_user from '../../helpers/current_user';
import {Helmet} from "react-helmet";

export default class SignUp extends Component {
    state = {
        password: '',
        password_confirm: '' ,
        email: '',
        name: ''
    }
    componentDidMount(){
        if(current_user())
        window.location.href =  ROOT
    }
    handleChange = (event) => this.setState({[event.target.name]: event.target.value})
    handleSubmit = (event) =>{
        event.preventDefault()
       const params = {
            method: 'POST', 
            headers: HEADERS,
            body: JSON.stringify(this.state)
        }
        if(this.state.password !== '' && this.state.password_confirm !== '' && this.state.email.match(EMAIL_PATTERN) && this.state.name !== '' && this.state.password_confirm === this.state.password  && this.state.password.length > 5){
            if (this.state.password !== this.state.password_confirm){
                toast.error("Password don't match", {
                    position: "top-center",
                    autoClose: 10000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }else{
                fetch(API_ROOT + '/signup', params)
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
                            category: 'New user',
                            action: `${current_user() && current_user().name}, is a new user`
                          })
                        window.history.back()
                      
                          
        
                    }
                })
            }
        }else{
            toast.error(this.state.email.match(EMAIL_PATTERN) ? this.state.name === '' ? "The name can not be blank" : this.state.password_confirm !== this.state.password ? "The passwords do not match": "The password is too short. The password should contain at least 6 characters" : "Please enter a valid email", {
                position: "top-center",
                autoClose: 10000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        
       
    }

    render() {
        return (
            <div className="main_container" >
            <Helmet>
                <title>HTM AUTO | Sign up</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
                <div className="main_content">
                    <div className="user sign_box" data-aos="fade-left" data-aos-delay="100" data-aos-duration="500">
                        <div className="form_box">
                            <form className="form_login">
                                <h2 className="log_title">Sign Up</h2>
                                <input className="input_log" onChange={this.handleChange} name='name' value={this.state.name}  placeholder="John Doe"/>
                                <input className="input_log" onChange={this.handleChange} name='email' value={this.state.email} type="mail" placeholder="user@gmail.com"/>
                                <input className="input_log" onChange={this.handleChange} name='password' value={this.state.password} type="password" placeholder="Password"/>
                                <input className="input_log" onChange={this.handleChange} name='password_confirm' value={this.state.password_confirm} type="password" placeholder="Confirm password"/>
                                <button onClick={this.handleSubmit} className="btn_login">Sign Up</button>
                                <p className="signup">
                                    Already have an account ?
                                    <Link to="/login" className="switch_a" CSSTransition="fade"> Log In</Link>
                                </p>
                            </form>
                        </div>
                        <div className="bloc_img_box">
                            <img src={img_two} className="img_box" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
