import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useData from '../hooks/useData';
import { removeFromDb, clearTheCart } from '../../utilities/fakedb';
import ProductReview from '../ProductReview/ProductReview';

const Order = () => {
    const [product, setProduct] = useData();
    const [cart, setCart] = useCart(product);

    const navigate = useNavigate();

    const handleRemove = (key) => {
        const newCart = cart.filter(cart => cart.key !== key);
        setCart(newCart);
        removeFromDb(key)
    }
    const handlePlaceOrder = () => {
        navigate('/placeOrder');
        setCart([]);
        clearTheCart();
    }
    return (
        <div>
            <div className='shop'>
                <div className='productReview'>
                    {
                        cart.map(pd => <ProductReview key={pd.key} handleRemove={handleRemove} product={pd}></ProductReview>)
                    }
                </div>
                <div>
                    <Cart cart={cart}>
                        <Link to='/placeOrder'>
                            <button onClick={handlePlaceOrder} className='btn-regular'>Place Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;