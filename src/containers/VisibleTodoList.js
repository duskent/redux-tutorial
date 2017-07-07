import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {getVisibleTodos} from '../reducers'
import TodoList from '../components/TodoList'

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  fetchData() {
    const {filter, fetchTodos} = this.props

    fetchTodos(filter)
  }

  render() {
    const {toggleTodo, ...rest} = this.props

    return <TodoList {...rest} onTodoClick={toggleTodo} />
  }
}

const mapStateToProps = (state, {params}) => {
  const filter = params.filter || 'all'

  return {
    todos: getVisibleTodos(state, filter),
    filter
  }
}

export default withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList))
