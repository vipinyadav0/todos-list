import './App.css';
// import Navbar from "./components/navbar/navbar"
import Navbar from './components/Navbar/Navbar';
import Todos from './components/Todos/Todos';
import Footer from './components/Footer/Footer';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    // console.log("Im on delete of todo.", todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

  }
  const [todos, setTodos] = useState([{
    sno: 1,
    title: "Go to the f***** gym",
    desc: "You need to go to f***** gym in order to build your body. You need to go to f***** gym in order to build your body u unsderstand mother fucker Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas, facilis iure fuga nisi, ab illo quam autem dolorum eius iste a. Totam sit explicabo corporis optio corrupti veniam accusantium!"

  },
  {
    sno: 2,
    title: "Go to the f***** gym",
    desc: "You need to go to f***** gym in order to build your body.You need to go to f***** gym in order to build your body u unsderstand mother fucker Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas, facilis iure fuga nisi, ab illo quam autem dolorum eius iste a. Totam sit explicabo corporis optio corrupti veniam accusantium!"

  },
  {
    sno: 3,
    title: "Go to the f***** gym",
    desc: "You need to go to f***** gym in order to build your body."
  },
  {
    sno: 4,
    title: "Go to the f***** gym",
    desc: "You need to go to f***** gym in order to build your body. You need to go to f***** gym in order to build your body u unsderstand mother fucker Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas, facilis iure fuga nisi, ab illo quam autem dolorum eius iste a. Totam sit explicabo corporis optio corrupti veniam accusantium!"

  },
  {
    sno: 5,
    title: "Go to the f***** gym",
    desc: "You need to go to f***** gym in order to build your body u unsderstand mother fucker Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas, facilis iure fuga nisi, ab illo quam autem dolorum eius iste a. Totam sit explicabo corporis optio corrupti veniam accusantium!"
  }
  ])

  return (
    <>
      <Navbar logo="Todos List" />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />

    </>
  );
}
export default App;
