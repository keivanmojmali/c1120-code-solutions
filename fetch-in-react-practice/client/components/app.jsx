import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos').then(response => response.json()).then((todos) => {
      this.setState({ todos });
    })
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo),
    })
      .then(response => response.json())
      .then(todos => {
        let newList = [...this.state.todos];
        newList.push(todos);
        this.setState({ newList });
      }).catch(err => console.error(err));
  }

  toggleCompleted(todoId) {

    const newIndex = this.state.todos.findIndex((item)=>{
      return item.todoId === todoId;
    });

    let sendObject = { isCompleted: null };

    let pullObject = () =>{
      if(this.state.todos[newIndex].isCompleted) {
        sendObject = { isCompleted: false };
      } else {
        sendObject = { isCompleted: true };
      }
    };
    pullObject()


    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendObject),
    })
      .then(response => response.json(response))
      .then(todos => {
    const newTodoArray = [...this.state.todos];
      newTodoArray.splice(newIndex,1,todos);
    this.setState({'todos': newTodoArray });
      })
      .catch(err => console.error(err))



  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App" />
            <TodoForm onSubmit={this.addTodo} />
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
          </div>
        </div>
      </div>
    );
  }
}
