import React from "react";
import "./Hero.css";
import img from "../images/couch.png";
import cardimg1 from "../images/product-1.png";
import cardimg2 from "../images/product-2.png";
import cardimg3 from "../images/product-3.png";

function Main() {
  return (
    <div>
      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-5">
              <div className="intro">
                <h1>
                  Modern Interior <span className="d-block">Design Studio</span>
                </h1>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
                <div className="hero-btn">
                  <button type="button" className="btn btn-warning btn1">
                    Shop Now
                  </button>
                  <button type="button" className="btn btn-primary btn2">
                    Explore
                  </button>
                </div>
              </div>
            </div>
            <div className="col-7 ">
              <div className="lightdot-img"></div>
              <div className="wrape-img">
                <img alt="couch" src={img} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}

      {/* Start Product Section */}
      <div className="productSection">
        <div className="container">
          <div className="row ">
            <div className="col-md-3">
              <div className="product">
                <h2>Crafted with excellent material.</h2>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
                <button type="button" className="btn btn-dark">
                  Explore
                </button>
              </div>
            </div>
            <div className="col-md-3 ">
              <div class="card productCard" style={{ border: "none" }}>
                <img alt="productimg1" src={cardimg1} />
                <div class="card-body">
                  <h5 class="card-title">Nordic Chair</h5>
                  <p class="card-text">$50.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="card productCard" style={{ border: "none" }}>
                <img alt="productimg1" src={cardimg2} />
                <div class="card-body">
                  <h5 class="card-title">Kruzo Aero Chair</h5>
                  <p class="card-text">$78.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="card" style={{ border: "none" }}>
                <img alt="productimg1 productCard" src={cardimg3} />
                <div class="card-body">
                  <h5 class="card-title">Ergonomic Chair</h5>
                  <p class="card-text">$43.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Product Section */}
    </div>
  );
}

export default Main;
