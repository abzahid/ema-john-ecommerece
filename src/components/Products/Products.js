import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'


const Products = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(response => response.json())
            .then(data => setproducts(data))
    }, [])

    return (
        <div>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        products.map(product => <Product product={product} keys={product.id}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <h2>This is Cart Container</h2>
                </div>
            </div>
        </div>
    );
};

export default Products;