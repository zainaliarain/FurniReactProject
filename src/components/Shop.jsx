import React from "react";
import "./Shopstyle.css";
import Main from "../components/Main";

function Shop() {
  return (
    <div>
      <div className="container-fluid ShopHero">
        <div className="row">
          <div className="col-6 ">{/* <h1>Shop</h1> */}</div>
        </div>
      </div>
      <Main />
    </div>
  );
}

export default Shop;
