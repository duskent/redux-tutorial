import React from 'react'
import {Provider} from 'react-redux'
// Router
import {Router, Route, browserHistory} from 'react-router'
// PropTypes
import {PropTypes} from 'prop-types'
// Components
import App from './App'

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:filter)" component={App}/>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
