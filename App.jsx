// This is an example of a React App - the main point of a react app.

import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
// react-redux is a package that connects redux to react. it makes the connection point easier

const App = () => (
  <BrowserRouter>

// this imports react-redux into your project and provides it a store to work with
  <Provider store={store}>
  </Provider>
  </BrowserRouter>
)
