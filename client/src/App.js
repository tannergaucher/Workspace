import React, { Component } from 'react';
import './App.css';
import ItemForm from './components/ItemForm';
import Item from './components/Item'
import sampleItems from './sample-items';

class App extends Component {
  
  state = {
    items: {},
    nameInput: "",
    priceInput: "",
    ratingInput: ""
  }
  
  componentDidMount() {
    //call api, load items from DB
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }
    
  loadItemsFromDb = () => {
    //call api 
    //GET items from db
    //set state as items
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
  
  deleteItemFromState = key => {
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
            deleteItemFromState={this.deleteItemFromState}
            handleChange={this.handleChange}
            nameInput={this.state.nameInput}
            priceInput={this.state.priceInput}
            ratingInput={this.state.ratingInput}
            item={this.state.items[key]}
            updateItem={this.updateItem}
          />
        ))}
      </div>
    )
  }
}

export default App;
