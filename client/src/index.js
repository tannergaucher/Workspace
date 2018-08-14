import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import logger from 'redux-logger'
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom'
import { ThemeProvider, injectGlobal } from 'styled-components'

import rootReducer from './reducers'
import history from './history'

import Index from './pages/Index'
import Add from './pages/Add'
import Explore from './pages/Explore'
import About from './pages/About'
import ViewSpace from './pages/ViewSpace'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: Montserrat;
    height: 100vh;
  }
`
const theme = {
  primary: 'palevioletred',
  secondary: '#FAFAFA',
  accent: '#BCDDFB',
  margin: '1.6em',
  typography: {
    primaryFont: 'Montserrat',
    mainTextSize: '20px',
    secondaryTextSize: '16px',
    anchorTextColor: 'palevioletred'
  }
}

const createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(
  createStore
)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/getWorkspace/:id" component={ViewSpace} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/add" component={Add} />
            <Route path="/" component={Index} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
