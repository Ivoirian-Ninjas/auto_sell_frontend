import React, { Component } from 'react'
import { API_ROOT, HEADERS } from '../../helpers/constant';
import img_two from "../../assets/img/cars-img/raban-haaijk-wftNpcjCHT4-unsplash.jpg"
import { Link } from "react-router-dom";
export default class SignUp extends Component {
    state = {
        password: '',
        password_confirm: '' ,
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
        fetch(API_ROOT + '/signup', params)
        .then(resp => resp.json())
        .then(json => {
            if(json.error){
                console.log(json.error)
            }else{
                localStorage.setItem('auto_sell_user', JSON.stringify(json.user) )
                window.location.href = '/'

            }
        })
    }

    render() {
        return (
            <div className="main_container" >
                <div className="main_content">
                    <div className="user sign_box" data-aos="fade-left" data-aos-delay="100" data-aos-duration="500">
                        <div className="form_box">
                            <form className="form_login">
                                <h2 className="log_title">Sign Up</h2>
                                <input className="input_log" onChange={this.handleChange} name='name' type="mail" placeholder="Username"/>
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
