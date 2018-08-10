import React from 'react'
import styled from 'styled-components'

import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Login = () => (
  <div>
    <Navbar />
    <Container>
      <LoginForm />
    </Container>
  </div>
)

export default Login
