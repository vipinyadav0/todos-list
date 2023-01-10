import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Api() {
    const [formData, setFormData] = useState({
        name: '',
        school: ''
    });
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://djangoapi.up.railway.app/api/v1/students/')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);
    console.log(data.results)
    console.log(data)




    function handleSubmit(event) {
        event.preventDefault();
        // fetch('http://localhost:8000/api/v1/students/', {
        fetch('https://djangoapi.up.railway.app/api/v1/students/', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch(error => console.log('Error:', error));
    }
    // const result = fetch('http://localhost:8000/api/v1/students/')
    //     .then(res => res.json)
    //     .then(data => console.log(data))
    //     .catch(error => console.log('Error:', error));
    // console.log(result);

    // console.log(formData)
    // console.log(JSON.stringify(formData))

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder='name' />
                <input type="text" onChange={e => setFormData({ ...formData, school: e.target.value })} placeholder='school' />
                <button type="submit">Submit</button>
            </form>
            <div>
                {data === null ? <p>Loading...</p> : data.length ? data.results.map(e => {
                    console.log("Not returning")
                    console.log(e)
                    return (
                        <h1>{e.name}</h1>)
                }) : "No data"}
            </div>

        </div>
    );
}
export default Api