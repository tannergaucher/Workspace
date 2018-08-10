import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 275px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid black;
  margin: ${props => props.theme.margin};
`

const CardTitle = styled.h2`
  margin-left: 0.5em;
`

const CardImage = styled.div`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const CardTextWrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
`

const CardText = styled.p``

const Card = props => (
  <CardContainer>
    <CardImage />
    <CardTitle>{props.title}</CardTitle>
    <CardTextWrapper>
      <CardText>{props.text}</CardText>
    </CardTextWrapper>
  </CardContainer>
)

export default Card
