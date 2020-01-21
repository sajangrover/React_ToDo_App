import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
class App extends React.Component {
  state={
    todos:[
      {id:1, content:"Go to the office"},
      {id:2, content:"read a book"}
    ]
  }
  deletetodo=(id) =>{
    console.log(id);
    let temptodos = this.state.todos.filter(todo=>{
      return todo.id !== id
    })

    this.setState({
      todos: temptodos
    })

  }
  addtodo =(todo)=>{
    console.log(todo.content)
    todo.id = Math.random();
    let temptodolist = [...this.state.todos,todo]
    this.setState({
      todos : temptodolist
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className ="center blue-text"> Todo's</h1>
        <Todos todos ={this.state.todos} deletetodo ={this.deletetodo}/>
        <AddTodo addtodo = {this.addtodo}/>
      </div>
    )
  };
}

export default App;
