import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate, Redirect } from 'react-router-dom'

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+id)
        .then(res => setProduct(res.data))
        .catch(err => console.error(err));
    }, [])

    const deleteProduct = productId => {
        axios.delete('http://localhost:8000/api/products/'+productId)
        .catch(err => console.error(err));
        navigate('/products');
    }

    return (
        <div>
            <p>Item Title: {product.title}</p>
            <p>Item Price: {product.price}</p>
            <p>Item Description: {product.description}</p>
            <button onClick={(e) => deleteProduct(id)}>Delete</button>
            <Link to={`/products/${product._id}/edit`}>Edit</Link>
        </div>
    )
}

export default Detail;