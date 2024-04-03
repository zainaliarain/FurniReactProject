import React from "react";
import "./Hero.css";
import img from "../images/couch.png";
import cardimg1 from "../images/product-1.png";
import cardimg2 from "../images/product-2.png";
import cardimg3 from "../images/product-3.png";
import Main from "../components/Main";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import Footer from "./Footer";

function Hero() {
  const featureCards = [
    {
      icon: cardimg1,
      title: "Nordic Chair",
      price: "$50.00",
    },
    {
      icon: cardimg2,
      title: "Kruzo Aero Chair",
      price: "$78.00",
    },
    {
      icon: cardimg3,
      title: "Ergonomic Chair",
      price: "$43.00",
    },
  ];
  return (
    <div>
      {/* Start Hero Section */}
      <section className="hero">
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
      </section>
      {/* End Hero Section */}
      {/* Start Product Section */}
      <section className="productSection">
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
            {/* mapping for featureCards and genrate the list  */}

            {featureCards.map((featureCards, index) => (
              <div className="col-md-3 " key={index}>
                <div class="card productCard " style={{ border: "none" }}>
                  <img alt="productimg" src={featureCards.icon} />
                  <div class="card-body">
                    <h5 class="card-title">{featureCards.title}</h5>
                    <p class="card-text">{featureCards.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Product Section */}
      <Main />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  );
}

export default Hero;
