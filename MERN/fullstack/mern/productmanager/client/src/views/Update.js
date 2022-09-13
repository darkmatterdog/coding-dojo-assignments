import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"

const Update = props => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+id)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/'+id, { title, price, description })
        .then(res => console.log(res))
        .catch(err => console.error(err));
    }

    return (
        <div>
        <h1>Update product:</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title:</label>
                    <input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </p>

                <p>
                    <label>Price:</label>
                    <input type="number" name="price" step="0.01" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                </p>

                <p>
                    <label>Description:</label>
                    <input type="text" name="description" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                </p>

                <input type="submit" value="Submit Changes"/>

            </form>
        </div>
    )

}

export default Update;