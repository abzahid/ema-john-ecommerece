import React, { useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
import Cart from '../Cart/Cart';
import { addToDb } from '../../fakedb';
import { useLoaderData } from 'react-router-dom';




const Products = () => {
    const products = useLoaderData()
    console.log(products)
    const [cart, setcart] = useState([])


    const handleAddtoCart = (product) => {
        console.log(product)
        const newCart = [...cart, product]
        setcart(newCart)
        addToDb(product.id)





    }


    return (
        <div>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        products.map(product => <Product product={product} keys={product.id} handleAddtoCart={handleAddtoCart}></Product>)

                    }
                    <h1>hi</h1>


                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Products;