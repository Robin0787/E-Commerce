import React, { useEffect, useState } from 'react';
import { getData, setData } from '../../utilities/ManageDataInLocalStorage.js';
import OrderedProducts from '../Ordered Products/OrderedProducts.jsx';
import Product from '../Product/Product.jsx';
import "./Shop.css";
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [orderedProducts, setOrderedProducts] = useState([]);

    function addToCart (ordProduct) {
        setOrderedProducts((prev) => {
            return [...prev, ordProduct];
        });
        setData(ordProduct);
    }
    // Fetching all data.
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
        // Setting the data to orderedProducts state from localStorage to display for the first time
        setOrderedProducts(getData());
    }, []);

    return (
        <section className='shop-container'>
            <article className='products-container'>
                {
                    products?.map((product) => {
                        return <Product key={product.id} product={product} addToCart={addToCart}/>
                    })
                }
            </article>
            <article className='ordered-products'>
                <OrderedProducts orderedProducts={orderedProducts} />
            </article>
        </section>
    );
};

export default Shop;