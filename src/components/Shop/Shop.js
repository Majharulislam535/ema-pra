import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useData from '../hooks/useData';
import Product from '../Product/Product';

const Shop = () => {
    const [product, setProduct] = useData();
    const [cart, setCart] = useCart(product);

    const handleAddToCart = (product) => {
        const exist = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exist) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product.key)
    }
    console.log(cart);
    return (
        <div>
            <div className='shop'>
                <div className="product">
                    {
                        product.map(pd => <Product key={pd.key} handleAddToCart={handleAddToCart} product={pd}></Product>)
                    }
                </div>
                <div className="ct">
                    <Cart cart={cart}>
                        <Link to="/order">
                            <button className='btn-regular'>Order Review</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;