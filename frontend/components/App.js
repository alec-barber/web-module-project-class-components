import React from 'react'
import Form from './Form'
import Todo from './Todo'
import TodoList from './TodoList'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todoItem: '',
      todos: [],
      hideCompleted: false
    }
  }

  onChange = (e) => {
    this.setState({todoItem: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({...this.state, todos: [...this.state.todos, this.state.todoItem]})
    this.setState({todoItem: ''})
  }

  onClick = (e) => {
    e.target.value === "toggleButton" && this.setState({hideCompleted: !this.state.hideCompleted})
    console.log(e.target)
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList onClick={this.onClick} todoItem={this.state.todoItem} todos={this.state.todos} />
        <Form todoItem={this.state.todoItem} onChange={this.onChange} onSubmit={this.onSubmit} />
        <button onClick={this.onClick} value="toggleButton" >{this.state.hideCompleted === false ? 'Hide Completed' : 'Show Completed'}</button>
      </div>
    )
  }
}
