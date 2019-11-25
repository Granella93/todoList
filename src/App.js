import React, { Component } from 'react';
import todoData from './todoData'
import AddTodo from './Components/AddTodo'
import './App.css';
import TodoItem from './Components/TodoItem';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todoData: todoData,
      newTodo: '',
      isCompleteNewTodo: false
    }
  }

  handleCheckBox = (id) => {
    console.log(id)
    this.setState(prevState => {
      const updatedTodo = prevState.todoData.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete
        }
        return todo
      })
      return { todoData: updatedTodo }
    })
  }

  handleNewTodo=(e)=>{
    this.setState({ newTodo: e.target.value });
  }

  handleNewTodoCheckbox=()=>{
    this.setState({ isCompleteNewTodo: !this.state.isCompleteNewTodo });
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    const newTodoItem = {
      id:Date.now(),
      todo:this.state.newTodo,
      isComplete:this.state.isCompleteNewTodo
    }
    this.state.todoData.push(newTodoItem)
    this.setState({todoData: todoData})
  }

  deleteItem=(id)=>{
    const filtredTodo=this.state.todoData.filter(todo=>{
      return todo.id != id
    })
    this.setState({todoData: filtredTodo})
  }



  render() {
    const todo = this.state.todoData.map(todo => 
    <TodoItem 
    key={todo.id} 
    todo={todo} 
    handleCheckBox={this.handleCheckBox} 
    deleteItem={this.deleteItem}
    />)
    return (
      <div className="App">
        <div className='Header'>
          <h1>To Do List</h1>
        </div>
        {todo}
        <AddTodo 
        isCompleteNewTodo={this.state.isCompleteNewTodo}
        handleNewTodo={this.handleNewTodo}
        handleNewTodoCheckbox={this.handleNewTodoCheckbox}
        handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}


export default App;
