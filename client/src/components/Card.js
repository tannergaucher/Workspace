import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

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
    {/* <CardContent> */}
    {/* <Text component="h3">{details.name}</Text> */}
    <Image image={details.image} />
    <Text component="h3">{details.name}</Text>
    <Text component="h5">{details.rating}</Text>
    {/* </CardContent> */}
  </CardWrapper>
)

export default SpaceCard
