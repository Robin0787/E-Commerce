import React, { useEffect, useState } from 'react';
import { getData, setData } from '../../utilities/ManageDataInLocalStorage.js';
import OrderedProducts from '../Ordered Products/OrderedProducts.jsx';
import Product from '../Product/Product.jsx';
import "./Shop.css";
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [orderedProducts, setOrderedProducts] = useState([]);
    
    // Adding the ordered Item to the cart and to the localStorage.
    function addToCart (ordProduct) {
        const isExists = orderedProducts.find(pd => pd.id === ordProduct.id);
        if(!!isExists){
            orderedProducts.forEach(pd => {
                if(pd.id === ordProduct.id) {
                    pd.quantity++;
                    setOrderedProducts((prev) => [...prev]);
                }
            })
        }
        else {
            ordProduct.quantity = 1;
            setOrderedProducts((prev) => {
                return [...prev, ordProduct];
            });
        }
        setData(ordProduct);
    }

    // Clearing all the items of the cart and the localStorage.
    function clearCart() {
        setOrderedProducts([]);
        localStorage.clear();
    }

    // Fetching all the data of products.
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
    useEffect(() => {
        setOrderedProducts(getData());
    },[products]);

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
                {/* <OrderedProducts orderedProducts={getData()} clearCart={clearCart}/> */}
                <OrderedProducts orderedProducts={orderedProducts} clearCart={clearCart}/>
            </article>
        </section>
    );
};

export default Shop;