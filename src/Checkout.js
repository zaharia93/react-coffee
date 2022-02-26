import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";


function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
        <div className="checkout__left">
      {/* <img className="checkout__ad" src="images/first.png" alt="" /> */}
      {basket?.length === 0 ? (
        <div>
          <h2 clsssName="checkout__title">Your Shopping Basket is empty</h2>
          <p>
            You have no items in your basket. To buy one or more items , cick
            "Add to basket " next to the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 clsssName="checkout__title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
    {basket.length > 0 && (
        <div className="checkout__right">
            <Subtotal />
        </div>
    )}
    </div>

  );
}

export default Checkout;
