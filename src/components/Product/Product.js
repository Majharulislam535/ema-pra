import React from 'react';

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    const { handleAddToCart } = props;
    return (
        <div>
            <div className="pd">
                <div style={{ "marginRight": "10px" }}>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <p>by:{seller}</p>
                    <p>Stock :{stock}</p>
                    <h3>price: ${price}</h3>
                    <button onClick={() => handleAddToCart(props.product)} className='btn-regular'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;