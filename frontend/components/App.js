import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todoItem: { item: '', complete: false },
      todos: [],
      hideCompleted: false
    }
  }

  onChange = (e) => {
    this.setState({todoItem: {item: e.target.value, complete: false}})
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({...this.state, todos: [...this.state.todos, this.state.todoItem]})
    this.setState({todoItem: {item: '', complete: false}})
  }

  onButtonClick = (e) => {
    e.target.value === "toggleButton" && this.setState({hideCompleted: !this.state.hideCompleted}) 
  }

  onTodoClick = (e) => {
    this.state.todos.map( todo => {
      if (todo.item === e.target.innerText) {
        console.log(todo.complete)
        return todo.complete = !todo.complete
      }
    })
    this.setState({...this.state, todos: this.state.todos})
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList onClick={this.onTodoClick} todoItem={this.state.todoItem} todos={this.state.todos} />
        <Form todoItem={this.state.todoItem} onChange={this.onChange} onSubmit={this.onSubmit} />
        <button onClick={this.onButtonClick} value="toggleButton" >{this.state.hideCompleted === false ? 'Hide Completed' : 'Show Completed'}</button>
      </div>
    )
  }
}