import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OrderReview = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div>
            <h2>Here i will show order reviews:{products.length}</h2>
        </div>
    );
};

export default OrderReview;