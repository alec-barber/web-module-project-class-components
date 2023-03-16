import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map( (value, i) =>  {
          return <Todo todos={this.props.todos} onClick={this.props.onClick} value={value.item} key={i} index={i} />
        } )}
      </div>
    )
  }
}