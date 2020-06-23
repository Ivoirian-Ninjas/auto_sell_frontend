import React, { Component } from 'react'
import { API_ROOT, HEADERS } from '../../helpers/constant';
import current_user from '../../helpers/current_user';
import { toast } from 'react-toastify';


export default class ModalPassword extends Component {

    state={
        password: '',
        new_password: '',
        confirm_new_password: ''
    }
    handleChange = (event) => this.setState({[event.target.name]: event.target.value})
    handleSubmit= () => {
        if( (this.state.password !== '' && this.state.new_password !== '' && this.state.confirm_new_password !== '') && (this.state.new_password === this.state.confirm_new_password)){
           const options = {
                method: 'PATCH',
                headers: HEADERS,
                body: JSON.stringify({user: this.state})
            }
            fetch( `${API_ROOT}/users/${current_user().id}`, options)
            .then(resp => resp.json())
            .then(json => {
                if(!json.error){
                    console.log(json.user.data.attributes)
                    JSON.stringify(json.user)  && localStorage.setItem("auto_sell_user", JSON.stringify(json.user.data.attributes) )
                    toast.success('We succefully updated your password', {
                        position: "top-center",
                        autoClose: 10000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                    this.props.close_modal()

                }else{
                    toast.error(json.error, {
                        position: "top-center",
                        autoClose: 10000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                }
                            
            } )
        }else{
            toast.error('The new password and its confirmation do not match. Please try again', {
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
           <div>
                <div className="div_modal">
                    <div className="modal_contain">
                    <button onClick ={() =>this.props.close_modal()} className="close_modal_more"> X </button>
                        <h1 className="car_name">Change your password</h1>
                        <div className="div_contain_modal">
                     
                            <div className="div_textarea">
                                <label className="label_form_car">Password</label>
                                <input name='password' type='password' className="input_form_car" value={this.state.password} onChange={this.handleChange}/>
                            </div>

                            <div className="div_textarea">
                                <label className="label_form_car">New Passowrd</label>
                                <input name='new_password' type='password' className="input_form_car" value={this.state.new_password} onChange={this.handleChange}/>
                            </div>
                            <div className="div_textarea">
                                <label className="label_form_car">Confirm New Password</label>
                                <input name='confirm_new_password' type='password' className="input_form_car" value={this.state.confirm_new_password} onChange={this.handleChange}/>
                            </div>
                            <button className="btn_review" onClick={this.handleSubmit}>
                                Change Password <i className="fa fa-lock"></i>
                            </button>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}
