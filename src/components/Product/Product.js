import React from 'react';
import './Product.css'
const Product = (props) => {

    const { product, handleAddtoCart } = props
    const { img, name, price, seller, ratings } = product

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h3>Price : ${price}</h3>
            <h3>Manufacturer : {seller}</h3>
            <h3>Ratings : {ratings}</h3>
            <button className='btn' onClick={() => handleAddtoCart(product)}>
                <p> Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;