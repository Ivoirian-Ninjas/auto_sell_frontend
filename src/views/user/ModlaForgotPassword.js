import React, { Component } from 'react'
import { API_ROOT, HEADERS, EMAIL_PATTERN } from '../../helpers/constant';
import { toast } from 'react-toastify';

class ModalForgotPassword extends Component {
    state = { 
        email: ''
     } 
     handleChange = (event) => this.setState({[event.target.name]: event.target.value})
     handleSubmit = () => {
        if(this.state.email.match(EMAIL_PATTERN)){
            const options={
                method: 'GET',
                headers: HEADERS,
                body: JSON.stringify(this.state)

            }
            fetch(`${API_ROOT}/reviews`, options)
            .then(resp => resp.json())
            .then(json => {
                    if(json.error){
                        toast.error('The email entered was not recognized', {
                            position: "top-center",
                            autoClose: 10000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })

                    }else{
                        this.props.close_modal()
                        toast.success("We sent you an email",  {
                            position: "top-center",
                            autoClose: 10000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })

                    }
            })
            
        }else{
            toast.error('Please enter a valid email', {
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
        <div className="div_modal">
            <div className="modal_contain">
                <button onClick ={() =>this.props.close_modal()} className="close_modal_more"> X </button>
                    <h1 className="car_name">Please enter your email</h1>
                    <div className="div_contain_modal">
                    
                        <div className="div_textarea">
                            <label className="label_form_car">Email</label>
                            <input name='email' type='email' className="input_form_car" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <button className="btn_review" onClick={this.handleSubmit}>
                            Reset password <i className="fab fa-expeditedssl"></i>
                        </button>
                    </div>
            </div>
        </div>
    );
    }
}
 
export default ModalForgotPassword;