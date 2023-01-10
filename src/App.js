import './App.css';
import Navbar from './components/Navbar/Navbar';
import Todos from './components/Todos/Todos';
import Footer from './components/Footer/Footer';
import AddTodo from './components/AddTodo/AddTodo';
import Api from './components/Api/Api'
import React, { useState } from 'react';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    // console.log("Im on delete of todo.", todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

  }


  //Adding todos
  const addTodo = (title, desc) => {
    // console.log("ADDING...", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)

  }
  const [todos, setTodos] = useState([initTodo
  ])

  return (
    <>
      <Navbar logo="Todos List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Api />
      <Footer />
    </>
  );
}
export default App;
