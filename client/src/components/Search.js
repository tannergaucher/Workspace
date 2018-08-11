import React from 'react'
import styled from 'styled-components'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

const SearchWrapper = styled.div``

const SearchInput = styled(Input)`
  &.MuiInput-underline-5:after {
    border-bottom: 2px solid ${props => props.theme.accent};
  }
  && {
    font-family: inconsolata;
  }
`

class Search extends React.Component {
  state = {
    query: ''
  }

  googlePlacesQuery = () => {
    const request = {
      query: this.state.query
      // fields: ['photos', 'name', 'rating']
    }
  }

  render() {
    return (
      <SearchWrapper>
        <SearchInput
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
