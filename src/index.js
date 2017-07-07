// React
import React from 'react'
import ReactDOM from 'react-dom'
// Redux
import { Provider} from 'react-redux'
// Components
import Root from './components/Root'
// Store
import configureStore from './configureStore'
const store = configureStore()
// Render
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)
