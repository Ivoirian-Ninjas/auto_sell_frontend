
import React, { Component } from 'react'
import { API_ROOT, HEADERS } from '../../helpers/constant';

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
                console.log(json.error)
            }else{
                localStorage.setItem('auto_sell_user', JSON.stringify(json.user) )
                window.location.href = '/'
            }
        })
        
    }

    render() {
        return (
            <div>
                <form>

                    <div>
                        <label>Email</label>
                        <input onChange={this.handleChange} name='email' value={this.state.email} placeholder="user@gmai.com"/>
                    </div>
                    
                    <div>
                        <label>Password</label>
                        <input onChange={this.handleChange} name='password' value={this.state.password} type="password"/>
                    </div>
                    <button onClick={this.handleSubmit}>Log In</button>
                </form>
            </div>
        )
    }
}
