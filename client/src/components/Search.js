import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Popper from '@material-ui/core/Popper'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

const SearchInput = styled(Input)`
  && {
    font-family: ${props => props.theme.typography.primaryFont};
  }
`

const SearchList = styled(Paper)``

const SearchListItem = styled(MenuItem)`
  && {
    font-family: ${props => props.theme.typography.primaryFont};
  }
`

class Search extends React.Component {
  state = {
    query: '',
    predictions: '',
    anchorEl: null,
    open: false
  }

  queryGooglePlaces() {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${'AIzaSyAEEC0v9IBWp_ird-5P5BtT76bCV4plnoI'}&input=${
          this.state.query
        }`
      )
      .then(response => {
        console.log(response.data.predictions)
        this.setState({ predictions: response.data.predictions })
      })
      .catch(error => console.log(error))
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    this.queryGooglePlaces()
  }

  handleClick = e => {
    const { currentTarget } = e
    this.setState(state => ({
      anchorEl: currentTarget,
      open: !state.open
    }))
  }

  handleClickAway = () => {
    this.setState({ open: false, predictions: '' })
  }

  logCoordsOnClick = () => {}

  render() {
    const { predictions, query, anchorEl, open } = this.state
    return (
      <div>
        <SearchInput
          value={this.state.query}
          name="query"
          onChange={this.handleChange}
          onClick={this.handleClick}
        />
        <ClickAwayListener onClickAway={this.handleClickAway}>
          <div>
            <Popper open={open} anchorEl={anchorEl} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <SearchList>
                    {Object.keys(predictions).map(prediction => (
                      <SearchListItem key={predictions[prediction].id}>
                        {predictions[prediction].description}
                      </SearchListItem>
                    ))}
                  </SearchList>
                </Fade>
              )}
            </Popper>
          </div>
        </ClickAwayListener>
      </div>
    )
  }
}

export default Search
