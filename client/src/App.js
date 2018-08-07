import React from 'react';
import './App.css';
import ItemForm from './components/ItemForm';
import Item from './components/Item';
import sampleItems from './sample-items';

import axios from 'axios';

class App extends React.Component {
  
  state = {
    items: {},
    nameInput: "",
    priceInput: "",
    ratingInput: ""
  }
  
  componentDidMount() {
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }
    
  addItem = item => {
    const items = {...this.state.items}
    items[`item${Date.now()}`] = item;
    this.setState({ items });
  }
  
  resetItemForm = () => {
    this.setState({
      nameInput: "",
      priceInput: "",
      ratingInput: ""
    })
  }
  
  deleteItem = key => {
    console.log('delete item')
    const items = {...this.state.items}
    items[key] = null;
    this.setState({ items })
  }
  
  updateItem = (key, updatedItem) => {
    const items = {...this.state.items};
    items[key] = updatedItem;
    this.setState({ items })
  }
  
  loadSampleItems = () => {
    this.setState({ items: sampleItems })
  }
  
  getItemsFromMongo = () => {
    
    axios.get('/getItems')
    .then((result) => {
      console.log('client get')
      console.log("result", result.data)
    })
    .catch((err) => {
      console.log(err)
    })
    .then(() => {
      console.log('executed');
    })
    
  }
  
  render() {
    
    return (
      <div className="App">
        <ItemForm 
          nameInput={this.state.nameInput}
          priceInput={this.state.priceInput}
          ratingInput={this.state.ratingInput}
          handleChange={this.handleChange}
          addItem={this.addItem}
          resetItemForm={this.resetItemForm}
        />
        {Object.keys(this.state.items).map(key => (
          <Item
            key={key}
            index={key}
            details={this.state.items[key]}
            deleteItem={this.deleteItem}
            handleChange={this.handleChange}
            nameInput={this.state.nameInput}
            priceInput={this.state.priceInput}
            ratingInput={this.state.ratingInput}
            item={this.state.items[key]}
            updateItem={this.updateItem}
          />
        ))}
        <button
          onClick={this.getItemsFromMongo}
          >Load Sample Items</button>
      </div>
    )
  }
}

export default App;
