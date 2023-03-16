import React from 'react'

export default class Form extends React.Component {
  
  
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input type='text' onChange={this.props.onChange} placeholder='Type To Do' value={this.props.todoItem.item} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
