import React from 'react';
import axios from 'axios';
import uuid from 'uuid'

class ItemForm extends React.Component {
  
  onSubmit = (e) => {
    e.preventDefault();
    const { nameInput, priceInput, ratingInput } = this.props;
    
    let uuidId = uuid();
    
    this.props.addItem({
      name: nameInput, 
      price: priceInput, 
      rating: ratingInput,
      id: uuidId
    })
    
    axios.post('/addItem', { 
      name: nameInput, 
      price: priceInput, 
      rating: ratingInput,
      id: uuidId
     })
      .then((result) => {
        console.log("result", result.data)
      })
      .catch(err => {
        console.log(err)
      })

    this.props.resetItemForm();
  }
  
  
  render() {
  
    return(
      <div className="item-form">
        <form onSubmit={this.onSubmit}>
          <label>Name</label>
          <input name="nameInput" onChange={this.props.handleChange} value={this.props.nameInput}/>
          <label>Price</label>
          <input name="priceInput" onChange={this.props.handleChange} value={this.props.priceInput}/>
          <label>Rating</label>
          <input name="ratingInput" onChange={this.props.handleChange} value={this.props.ratingInput}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default ItemForm;