import React from 'react'
import TodoItem from '../Todo/Todo'
import './Todos.css'

function Todos(props) {
  return (
    <div className=''>
      <h2 className='text-center font-bold text-6xl'>Todos List</h2>
      <div className="p-4 grid grid-cols-1">
        {props.todos.length === 0 ? <h2 className='h-32 text-center text-3xl text-red-500'>No Todos to display</h2> :
          props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          })
        }
      </div>


    </div>
  )
}

export default Todos