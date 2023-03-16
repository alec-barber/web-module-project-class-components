import React from 'react'
import Form from './Form'
import Todo from './Todo'
import TodoList from './TodoList'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todoItem: '',
      todos: []
    }
  }

  onChange = (e) => {
    this.setState({todoItem: e.target.value})
    console.log(this.state)
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({...this.state, todos: [...this.state.todos, this.state.todoItem]})
    this.setState({todoItem: ''})
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList todoItem={this.state.todoItem} todos={this.state.todos} />
        <Form todoItem={this.state.todoItem} onChange={this.onChange} onSubmit={this.onSubmit} />
        <button>Completed?</button>
      </div>
    )
  }
}
