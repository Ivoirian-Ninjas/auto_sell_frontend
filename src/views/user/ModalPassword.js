import React, { Component } from 'react'

export default class ModalPassword extends Component {

    state={
        password: '',
        new_password: '',
        confirm_new_password: ''
    }
    handleChange = (event) => this.setState({[event.target.name]: event.target.value})

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
                                Change Password <i className="far fa-clipboard"></i>
                            </button>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}
