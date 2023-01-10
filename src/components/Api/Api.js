import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Api() {
    const [formSubmit, setFormSubmit] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        school: ''
    });
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const fetchData = () => {
        fetch(`https://djangoapi.up.railway.app/api/v1/students/?page=${page}`)
            .then(response => response.json())
            .then(responseData => {
                setData(responseData)
                setTotalPages(Math.ceil(responseData.count / 10));
            })
            .catch(error => console.log(error));
    }
    useEffect(() => {
        fetchData();
    }, [page]);
    // console.log(data.results)
    console.log(data);
    console.log(totalPages);


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
        setData(null);
        fetchData();
    }
    function handleClick() { setFormSubmit(true) }
    const handlePrevClick = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const handleNextClick = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    }

    // const handleNextClick = () => {
    //     if (nextPageLink) {
    //         window.location.href = nextPageLink;
    //     }
    // }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder='name' />
                <input type="text" onChange={e => setFormData({ ...formData, school: e.target.value })} placeholder='school' />
                <button type="submit" onClick={handleClick}>Submit</button>
            </form>
            <div>
                {data === null ? <p>Loading...</p> :
                    data && data.count ? data.results.map(e => {

                        return (
                            <>
                                <ul><li><h1>{e.name}</h1>
                                    <h2>{e.school}</h2></li></ul>
                            </>
                        )
                    }
                    ) : "No data"}
                {data && data.count > 10 ? <>
                    <button onClick={handlePrevClick} disabled={page === 1}>Prev</button>
                    <button onClick={handleNextClick} disabled={page === totalPages}>Next</button></>
                    : ""}


            </div>



        </div>
    );
}
export default Api