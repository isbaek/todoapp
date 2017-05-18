import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todo from './reducers/todo'
import App from './App'
import './index.css';

import Title from './components/Title'

let store = createStore(todo)

render(
  <Provider store={store}>
    <Title />
  </Provider>,
  document.getElementById('root')
)
