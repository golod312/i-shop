import './main.css'
import 'font-awesome/css/font-awesome.min.css'


import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from "redux"
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from './reducers/index'
import { Provider } from 'react-redux'

import routes from './routes'
import { HashRouter } from 'react-router-dom'


const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))

  //для использования devTools , composeWithDevTools специальная функция
  // applyMiddlewar  есть внутри redux используется для того 
  // что бы применить все middleware и это происходит по очереди 
  // по этому используется спред ... это тоже самое что и (a,b,c)
)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter history={history}>
      {routes}
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
