import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'


const Products = (props) => {
    console.log(props)
    const [products, setproducts] = useState([])
    const [cart, setcart] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(response => response.json())
            .then(data => setproducts(data))
    }, [])

    const handleAddtoCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product]
        setcart(newCart)
        console.log(newCart)
    }



    return (
        <div>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        products.map(product => <Product product={product} keys={product.id} handleAddtoCart={handleAddtoCart}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <h2>Selected Items : {cart.length}</h2>
                </div>
            </div>
        </div>
    );
};

export default Products;