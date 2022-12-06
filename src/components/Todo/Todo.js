import React from 'react'


// Just One Todo
function TodoItem(props) {
  return (
    <div class="ontainer">
      <div class="pt-4 pl-4">
        <div class="rounded-lg shadow-lg bg-white ">

          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-4">        {props.todo.title}
            </h5>
            <p class="text-gray-700 text-base mb-4">
              {props.todo.desc}
            </p>
            <div class="text-center">
              {/* <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Edit</button> */}
              <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => { props.onDelete(props.todo) }}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default TodoItem