import React, { Component } from 'react'

export default class ModalBasicInfo extends Component {
    state={
        name: this.props.user.name,
        email: this.props.user.email
    }
    handleChange = (event) => this.setState({[event.target.name]: event.target.value})

    render() {
        return (
         <div>
                <div className="div_modal">
                    <div className="modal_contain">
                    <button onClick ={() =>this.props.close_modal()} className="close_modal_more"> X </button>
                        <h1 className="car_name">Change Info</h1>
                        <div className="div_contain_modal">
                        
                            <div className="div_of_select">
                                <label className="label_form_car">Name</label>
                                <input name='name' className="input_form_car" value={this.state.name} onChange={this.handleChange}/>
                            </div>
                            <div className="div_textarea">
                                <label className="label_form_car">Email</label>
                                <input name='email' type='email' className="input_form_car" value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <button className="btn_review" onClick={this.handleSubmit}>
                               Change Info <i className="far fa-clipboard"></i>
                            </button>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}
