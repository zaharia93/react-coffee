import React from 'react';
import ReactStarts from "react-rating-stars-component";
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, image, price, rating }) {

    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,

        });
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <small>$</small>
          <strong>{price}</strong>
          <div className="checkoutProduct__rating">
          <ReactStarts count={5} size={18} activeColor="#ffd700" />
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
