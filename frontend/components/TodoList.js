import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map( (value, i) =>  {
          return <Todo index={i} todos={this.props.todos} onClick={this.props.onClick} todoItem={this.props.todoItem} key={i} value={value.item} />
        } )}
      </div>
    )
  }
}