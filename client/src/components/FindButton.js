import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const FindButton = styled(Button)`
  && {
    background: ${props => props.theme.accent};
    padding: 0em 3em;
    position: relative;
    z-index: 1;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
`

export default FindButton
