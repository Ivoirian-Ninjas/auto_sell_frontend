import StarRatings from 'react-star-ratings'
import React, { Component } from 'react'

export default class ReviewAddModal extends Component {
    state = {
        title: '',
        comment: '',
        name: '',
        rating: 0
    }
    changeRating = (rating, name) => this.setState({rating, rating})
    handleChange = (event) => this.setState({[event.target.name]: event.target.value})

    render() {
        return (
            <div style={{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  }}>
                <h1>Add reviews here</h1>
                <input name = 'name' placeholder= 'Enter your name'></input>
                <input name='title' placeholder='Enter a title'></input>
                        <StarRatings
                            rating={this.state.rating}
                            starRatedColor="blue"
                            changeRating={this.changeRating}
                            numberOfStars={5}
                            name='rating'
                            />
                <textarea 
                    name= 'comment'
                /> 

                        
                 <button onClick ={() =>this.props.close_modal()}>Close</button>
            </div>
        )
    }
}
