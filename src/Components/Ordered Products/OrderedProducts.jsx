import React from 'react';
import "./OrderedProducts.css";

const OrderedProducts = ({orderedProducts,clearCart}) => {
    console.log('Ordered Products Component');
    const quantity = orderedProducts.reduce((prev, current) => prev + current.quantity,0);
    const totalPrice = orderedProducts.reduce((prev,current) => prev + (current.price * current.quantity) ,0);
    const shippingCharge = orderedProducts.reduce((prev,current) => prev + current.shipping ,0)
    const tax = ((totalPrice * 7) / 100).toFixed(2);
    const grandTotal = totalPrice + shippingCharge + parseFloat(tax);
    return (
        <div className='all-products'>
            <h1 className='header'>Order Summary</h1>
            <ul className='cart-list'>
                <li>Quantity : {quantity}</li>
                <li>Total Price : ${totalPrice}</li>
                <li>Total Shipping Charge : ${shippingCharge}</li>
                <li>Tax : ${tax}</li>
            </ul>
            <h2 className='grandTotal'>Grand Total : ${grandTotal}</h2>
            <button className='clearCart' onClick={clearCart}>Clear Cart <i className="fa-solid fa-trash-can"></i></button>
            <button className='reviewOrder'>Review Order <i className="fa-solid fa-magnifying-glass-dollar"></i></button>
        </div>
    );
};

export default OrderedProducts;