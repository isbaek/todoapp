import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todo from './reducers/todo'
import App from './App'
import './index.css';


let store = createStore(todo)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
