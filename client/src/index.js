import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider, injectGlobal } from 'styled-components'

import Index from './pages/Index'
import Add from './pages/Add'
import Explore from './pages/Explore'
import Login from './pages/Login'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: inconsolata;
    height: 100vh;
  }
`

const theme = {
  primary: 'palevioletred',
  secondary: '#FBEAAA',
  accent: '#CBEAB7',
  margin: '1.6em',
  typography: {
    primaryFont: 'inconsolata',
    secondaryFont: 'helvetica',
    mainTextSize: '20px',
    secondaryTextSize: '16px',
    anchorTextColor: 'palevioletred'
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/add" component={Add} />
        <Route path="/" component={Index} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
