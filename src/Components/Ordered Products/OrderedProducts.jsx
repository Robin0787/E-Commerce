import React from 'react';
import "./OrderedProducts.css";

const OrderedProducts = ({orderedProducts}) => {
    const totalPrice = orderedProducts.reduce((prev,current) => prev + current.price ,0);
    const shippingCharge = orderedProducts.reduce((prev,current) => prev + current.shipping ,0)
    const tax = ((totalPrice * 7) / 100).toFixed(2);
    const grandTotal = totalPrice + shippingCharge + parseFloat(tax);
    return (
        <div className='all-products'>
            <h1 className='header'>Order Summary</h1>
            <ul className='cart-list'>
                <li>Selected Item : {orderedProducts.length}</li>
                <li>Total Price : ${totalPrice}</li>
                <li>Total Shipping Charge : ${shippingCharge}</li>
                <li>Tax : ${tax}</li>
            </ul>
            <h2 className='grandTotal'>Grand Total : ${grandTotal}</h2>
            <button className='clearCart'>Clear Cart <i className="fa-solid fa-trash-can"></i></button>
            <button className='reviewOrder'>Review Order <i className="fa-solid fa-magnifying-glass-dollar"></i></button>
        </div>
    );
};

export default OrderedProducts;