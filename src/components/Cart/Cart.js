import React from 'react';

import './Cart.css'


const Cart = (props) => {

    const { cart } = props;
    // console.log(cart)

    let total = 0;
    let shipping = 0;

    for (const product of cart) {
        // console.log(product)
        total = total + product.price;
        shipping = shipping + product.shipping;

    }

    const tax = (total * 10 / 100).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax)






    return (


        <div className='cart'>
            <h1>Order Summary</h1>
            <h2>Selected Items :{cart.length} </h2>
            <h2>Total Price :{total}</h2>
            <h2>Total Shipping :{shipping}</h2>
            <h2>Tax :{tax}</h2>
            <h2>Grand Total :{grandTotal}</h2>

        </div>
    );
};

export default Cart;