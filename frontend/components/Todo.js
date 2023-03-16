import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div className={this.props.todos[this.props.index].complete ? 'todoItemComplete' : 'todoItem'} onClick={this.props.onClick} >
        {this.props.value}
      </div>
    )
  }
}