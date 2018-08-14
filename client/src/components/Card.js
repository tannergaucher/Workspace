import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'

//flex: 0 0 33%;
// @media (max-width: 992px) { flex: 0 0 50%;}
//@media (max-width: 700px) { flex: 0 0 100%;}

const CardWrapper = styled(Card)`
  && {
    width: 300px;
    height: 300px;
    margin: 1.3em;
    border-radius: 1.5px;
  }
`
const Text = styled(CardContent)``
const Image = styled(CardMedia)`
  && {
    height: 150px;
  }
`

const SpaceCard = ({ details }) => (
  <CardWrapper>
    <Image image={details.image} />
    <Text component="h3">{details.name}</Text>
    <Text component="h5">{details.rating}</Text>
  </CardWrapper>
)

export default SpaceCard
