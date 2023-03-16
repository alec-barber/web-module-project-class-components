import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map( (value, i) =>  <Todo key={i} value={value} /> )}
      </div>
    )
  }
}
