import React from 'react';
import axios from 'axios';

class AddItemForm extends React.Component {
  
  constructor(){
    super()
    
    this.state = {
      name: "",
      price: "",
      rating: null
    }
  }
  
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }
  
  onSubmit = async (e) => {
    e.preventDefault();
    //get our form data from state
    const { name, price, rating } = this.state;

    axios.post('/addItem', { name, price, rating })
      .then((result) => {
        console.log("result", result.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  render() {
  
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="name" placeholder="name" onChange={this.onChange}/>
          <input type="text" name="price" placeholder="price" onChange={this.onChange}/>
          <input type="number" name="rating" placeholder="rating" onChange={this.onChange}/>
          <button type="submit">Submit</button>
        </form>
        </div>
    )
  }
}

export default AddItemForm;