import React, { Component } from 'react'
import { API_ROOT, HEADERS } from '../../helpers/constant';
import img_two from "../../assets/img/cars-img/raban-haaijk-wftNpcjCHT4-unsplash.jpg"
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';
import ReactGA from 'react-ga';
import current_user from '../../helpers/current_user';

export default class SignUp extends Component {
    state = {
        password: '',
        password_confirm: '' ,
        email: '',
        name: ''
    }
    handleChange = (event) => this.setState({[event.target.name]: event.target.value})
    handleSubmit = (event) =>{
        event.preventDefault()
       const params = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(this.state)
        }
        if(this.state.password !== '' && this.state.password_confirm !== '' && this.state.email !== '' && this.state.name !== ''){
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
                        ReactGA.event({
                            category: 'New user',
                            action: `${current_user().name}, is a new user`
                          })
                        localStorage.setItem('auto_sell_user', JSON.stringify(json.user.data.attributes) )
                        window.history.back()
                      
                          
        
                    }
                })
            }
        }else{
            toast.error("Please complete the form", {
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
