import React, { useState } from 'react'

function AddTodo(props) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cant be empty.")
        }
        else {
            // console.log("Hello", title, desc);
            props.addTodo(title, desc)
            setTitle(" ");
            setDesc("");
        }
    }
    return (
        <div class="px-16 w-full grid items-center mb-6">
            <h2 className='font-bold text-4xl my-6 text-center'>Add a Todo</h2>
            <div class="p-6 rounded-lg shadow-lg bg-green-200 w-full">
                <form onSubmit={submit} class="w-full">
                    <div class="form-group mb-6">
                        <label for="exampleInputEmail1" class="form-label inline-block mb-2 text-gray-700">Title</label>
                        <input type="text" class="form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Title of todo" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <small id="emailHelp" class="block mt-1 text-xs text-gray-600">Enter Your Title of the todo.
                        </small>
                    </div>
                    <div class="form-group mb-6">
                        <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">Description</label>
                        <textarea type="text" class="form-control block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
                            placeholder="Description of your todo" value={desc} onChange={(e) => setDesc(e.target.value)} />
                    </div>
                    <div class="text-center">
                        <button type="submit" class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTodo