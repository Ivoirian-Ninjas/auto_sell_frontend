import React, { Component } from 'react'
import { API_ROOT, HEADERS } from '../../helpers/constant';
import current_user from '../../helpers/current_user';
import { toast } from 'react-toastify';


export default class ModalBasicInfo extends Component {
    state={
        name: this.props.user.name,
        email: this.props.user.email
    }
    handleChange = (event) => this.setState({[event.target.name]: event.target.value})
    handleSubmit= () => {
        if(this.state.email !== '' && this.state.name !== ''){
           const options = {
                method: 'PATCH',
                headers: HEADERS,
                body: JSON.stringify({user: this.state})
            }
            fetch( `${API_ROOT}/users/${current_user().id}`, options)
            .then(resp => resp.json())
            .then(json =>{
                if(!json.error){
                    console.log(json.user.data.attributes)
                    JSON.stringify(json.user)  && localStorage.setItem("auto_sell_user", JSON.stringify(json.user.data.attributes) )
                    toast.success('We succefully updated your Info', {
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
            })
        }
    }

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
                               Change Info <i className="fa fa-user-plus"></i>
                            </button>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}
