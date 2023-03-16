import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div className={false ? 'todoItemComplete' : 'todoItem'} onClick={this.props.onClick}>
        {this.props.value}
      </div>
    )
  }
}