import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todo from './reducers/todo'
import App from './App'
import './index.css';

import Title from './components/Title'
import Add from './components/AddToDo'

let store = createStore(todo)

render(
  <Provider store={store}>
    <div>
    <Title />
    <Add />
    </div>
  </Provider>,
  document.getElementById('root')
)
