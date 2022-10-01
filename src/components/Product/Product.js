import React from 'react';
import './Product.css'
const Product = (props) => {
    const { img, price, ratings, seller, name } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h3>Price : ${price}</h3>
            <h3>Manufacturer : {seller}</h3>
            <h3>Ratings : {ratings}</h3>
            <button className='btn'>
                <p> Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;