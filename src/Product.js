import React from "react";
import "./Product.css";
import ReactStarts from "react-rating-stars-component";
import { useStateValue } from "./StateProvider";


function Product({ id, title, image, price, rating }) {

const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <ReactStarts count={5} size={18} activeColor="#ffd700" />
        </div>
      </div>
      <img src={image} alt="" />
      <button className="" onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
