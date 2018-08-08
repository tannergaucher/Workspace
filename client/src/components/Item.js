import React from 'react'
import axios from 'axios'

class Item extends React.Component {
  constructor() {
    super()

    this.state = {
      edit: false
    }
  }

  toggleEditForm = () => {
    console.log('toggle')
    this.setState({
      edit: !this.state.edit
    })
  }

  handleClick = () => {
    this.toggleEditForm()
  }

  handleChange = e => {
    const updatedItem = {
      ...this.props.item,
      [e.currentTarget.name]: e.currentTarget.value
    }

    this.props.updateItem(this.props.index, updatedItem)
  }

  handleSaveChangesClick = () => {
    this.props.updateItem(this.props.index, this.props.item)
    this.toggleEditForm()

    console.log('handlesaveChanges')

    //req.params.id
    axios.post(`/updateItem/${this.props.details.id}`, {
      name: this.props.details.name,
      price: this.props.details.price,
      rating: this.props.details.rating
    })
  }

  handleDeleteClick = () => {
    this.props.deleteItem(this.props.index)

    //req.params.id
    axios.post(`/deleteItem/${this.props.details.id}`)
  }

  render() {
    if (this.props.details) {
      return (
        <div className="item">
          <p>Name: {this.props.details.name}</p>
          <p>Price: {this.props.details.price}</p>
          <p>Rating: {this.props.details.rating}</p>
          <div className="edit-delete-btns">
            <button onClick={this.handleDeleteClick}>X</button>
            <button onClick={this.handleClick}>Edit</button>
          </div>

          <div className={this.state.edit === false ? 'hide' : 'show'}>
            <input
              name="name"
              onChange={this.handleChange}
              value={this.props.details.name}
            />
            <input
              name="price"
              onChange={this.handleChange}
              value={this.props.details.price}
            />
            <input
              name="rating"
              onChange={this.handleChange}
              value={this.props.details.rating}
            />
            <button onClick={this.handleSaveChangesClick}>Save Changes</button>
          </div>
        </div>
      )
    }
    return null
  }
}

export default Item
