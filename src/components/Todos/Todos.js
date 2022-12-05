import React from 'react'
import TodoItem from '../Todo/Todo'

function Todos(props) {
  return (
    <div className='Container'>
      <h2 className='text-center font-bold text-6xl'>Todos List</h2>
      <div className="p-4 grid grid-cols-4 gap-4">
        {props.todos.length === 0 ? <h2 className='h-32 text-center'>No todos to display</h2> :
          props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          })
        }
      </div>


    </div>
  )
}

export default Todos