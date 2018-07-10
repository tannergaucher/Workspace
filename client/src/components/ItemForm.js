import React from 'react';
import axios from 'axios';

class ItemForm extends React.Component {
  
  postItem = () => {
    const { nameInput, priceInput, ratingInput } = this.props;
    axios.post('/addItem', { nameInput, priceInput, ratingInput })
      .then((result) => {
        console.log("result", result.data)
      })
      .catch(err => {
        console.log(err)
      })
    }

  onSubmit = (e) => {
    e.preventDefault();
    const { nameInput, priceInput, ratingInput } = this.props;
    
    this.props.addItem({
      name: nameInput, 
      price: priceInput, 
      rating: ratingInput
    })

    this.postItem();
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