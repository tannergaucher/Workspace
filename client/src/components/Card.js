import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

const CardWrapper = styled(Card)`
  width: 300px;
`
const Text = styled(CardContent)``
const Image = styled.img``

const SpaceCard = ({ details }) => (
  <CardWrapper>
    <Image src={details.image} />
    <CardContent>
      <Text component="h3">{details.name}</Text>
      <Text component="h5">{details.location}</Text>
      <Text component="h5">{details.rating}</Text>
    </CardContent>
  </CardWrapper>
)

export default SpaceCard
