import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map( (value, i) =>  <Todo onClick={this.props.onClick} key={i} value={value} /> )}
      </div>
    )
  }
}
