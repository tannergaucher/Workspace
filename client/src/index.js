import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ItemForm from './components/ItemForm'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/additem" component={ItemForm} />
      <Route exact path="/" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
