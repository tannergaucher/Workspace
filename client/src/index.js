import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import promise from 'redux-promise'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider, injectGlobal } from 'styled-components'

import rootReducer from './reducers'

import Index from './pages/Index'
import Add from './pages/Add'
import Explore from './pages/Explore'
import ShowSpace from './pages/ShowSpace'
import About from './pages/About'

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

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/show/:id" component={ShowSpace} />
          <Route exact path="/add" component={Add} />
          <Route path="/" component={Index} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
