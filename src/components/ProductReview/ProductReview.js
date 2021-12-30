import React from 'react';

const ProductReview = (props) => {
    const { name, quantity, price, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className='productRev'>
            <h2>{name}</h2>
            <h4>Quantity: {quantity}</h4>
            <h4>Price: {price}</h4>
            <button className='btn-regular' onClick={() => handleRemove(key)}>Remove</button>
        </div>
    );
};

export default ProductReview;