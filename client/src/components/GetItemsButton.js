import React from 'react';
import axios from 'axios';

class GetItemsButton extends React.Component {
  
  getItems = () => {
    console.log('Get Items');
    axios.get('/getItems')
      .then((result) => {
        console.log("axios get:", result);
      })
  }
  
  render(){
    return <button onClick={this.props.loadSampleItems}>Get Items</button>
  }
}

export default GetItemsButton;