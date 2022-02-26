import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      {/* <h1 className="home__quote">
        You can't buy Happiness but you can buy COFFEE and that's pretty close.
      </h1> */}
      <img className="home__image" src="images/coffee_hearts.jpg" alt="" />

      <div className="home__row">
        <Product
          id="12324"
          title="Green Coffee"
          price={12.49}
          image="https://www.questcoffee.com.au/wp-content/uploads/2016/08/green-beans.png"
        />
        <Product
          id="1245"
          title="Black Coffee"
          price={32.45}
          image="https://www.coffeebreak-dubrovnik.info/img/black-coffee.jpeg"
        />
      </div>

      <div className="home__row">
        <Product
          id="123544"
          title="Arabica"
          price={78.23}
          image="https://www.mediastorehouse.com.au/p/629/red-coffee-berries-coffea-arabica-12551895.jpg"
        />
        <Product
          id="12324"
          title="Grounded Coffee"
          price={12.9}
          image="https://assets.bonappetit.com/photos/5c3665522efb8f2d33e3975f/16:9/w_2560%2Cc_limit/Basically-Coffee-0219-02.jpg"
        />
        <Product
          id="12324"
          title="Organic Coffee"
          price={12.49}
          image="https://5.imimg.com/data5/YU/RS/MY-3985054/organic-coffee-500x500.jpeg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12324"
          title="Decaffeinated"
          price={12.49}
          image="https://images.squarespace-cdn.com/content/v1/5b0883064611a091d4614861/1528304225326-UT6UW24NJ7I790MJ27RA/naturally-decaf-coffee.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
