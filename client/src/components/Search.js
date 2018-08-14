import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

const SearchWrapper = styled.div``
const SearchInput = styled(Input)`
  &.MuiInput-underline-5:after {
    border-bottom: 2px solid white;
  }
  && {
    font-family: Montserrat;
  }
`

class Search extends React.Component {
  state = {
    query: '',
    predictions: ''
  }

  queryGooglePlaces() {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${'AIzaSyAEEC0v9IBWp_ird-5P5BtT76bCV4plnoI'}&input=${
          this.state.query
        }`
      )
      .then(response =>
        this.setState({ predictions: response.data.predictions })
      )
      .catch(error => console.log(error))
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    this.queryGooglePlaces()
  }

  componentDidMount() {}

  render() {
    return (
      <SearchWrapper>
        <SearchInput
          value={this.state.query}
          name="query"
          onChange={this.handleChange}
          startAdornment={
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          }
        />
      </SearchWrapper>
    )
  }
}

export default Search
