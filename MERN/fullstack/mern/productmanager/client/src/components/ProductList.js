import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'

function ProductList(props) {

    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/'+productId)
        .then(res => {
            removeFromDom(productId)
        })
        .catch(err => console.error(err));
    }


  return (
    <div>
        <h1>Products:</h1>
        {props.products.map( (product, i) => {
            return <p key={i}>
                <Link to={`/products/${product._id}`}>{product.title}</Link>
                <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                </p>
        })}
    </div>
  )
}

export default ProductList