import React from "react";
import "./Hero.css";
import truck from "../images/truck.svg";
import bag from "../images/bag.svg";
import support from "../images/support.svg";
import retrn from "../images/return.svg";
import whychooseus from "../images/why-choose-us-img.jpg";
import cardimg1 from "../images/product-1.png";
import cardimg2 from "../images/product-2.png";
import cardimg3 from "../images/product-3.png";
import grid1 from "../images/img-grid-1.jpg";
import grid2 from "../images/img-grid-2.jpg";
import grid3 from "../images/img-grid-3.jpg";

function Hero() {
  const feature = [
    {
      icon: truck,
      title: "Fast & Free Shipping",
      description:
        "Donec vitae odio quis nisl dapibus malesuada. Nullam acaliquet velit. Aliquam vulputate.",
    },
    {
      icon: bag,
      title: "Easy to Shop",
      description:
        "Donec vitae odio quis nisl dapibus malesuada. Nullam acaliquet velit. Aliquam vulputate.",
    },
    {
      icon: support,
      title: "24/7 Support",
      description:
        "Donec vitae odio quis nisl dapibus malesuada. Nullam acaliquet velit. Aliquam vulputate.",
    },
    {
      icon: retrn,
      title: "Hassle Free Returns",
      description:
        "Donec vitae odio quis nisl dapibus malesuada. Nullam acaliquet velit. Aliquam vulputate.",
    },
  ];
  return (
    <div>
      {/* {Start Why Choose Us Section} */}
      <div className="midSection">
        <div className="container">
          <div className="row" style={{ marginTop: "15%" }}>
            <div className="col-lg-6">
              <div className="whychoosus">
                <h2>Why Choose Us</h2>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
              </div>
              <div className="row">
                {feature.map((feature, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="feature">
                      <img alt={`feature${index}`} src={feature.icon} />
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-6">
              <div className="chooseus">
                <img alt="chooseus" src={whychooseus} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {End Why Choose Us Secton} */}

      {/* {Start We Help Section} */}
      <div className="helpsection">
        <div className="container">
          <div className="row" style={{ marginTop: "15%" }}>
            <div className="col-7">
              <div className="img-grid">
                <img className="grid-img1" src={grid1} alt="gridimg1" />
                <img className="grid-img2" src={grid2} alt="gridimg2" />
                <img className="grid-img3" src={grid3} alt="gridimg3" />
              </div>
            </div>
            <div className="col-5">
              <div className="secsection">
                <h2>We Help You Make Modern Interior Design</h2>
                <p>
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                  Aliquam vulputate velit imperdiet dolor tempor tristique.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada
                </p>
                <ul className="listStyle">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <li key={index}>
                      Donec vitae odio quis nisl dapibus malesuada
                    </li>
                  ))}
                </ul>
                <button type="button" className="btn btn-dark">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {End We Help Section} */}

      {/* {Start Papular Product Section} */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-4">
            <div class="card pProduct">
              <img alt="productimg1" src={cardimg1} />
              <div class="card-body productCardBody">
                <h5>Nordic Chair</h5>
                <p class="card-text">
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio
                </p>
                <a href="/path/to/page">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card pProduct">
              <img alt="productimg1" src={cardimg2} />
              <div class="card-body productCardBody">
                <h5>Kruzo Aero Chair</h5>
                <p class="card-text">
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio
                </p>
                <a href="/path/to/page">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card pProduct ">
              <img alt="productimg1" src={cardimg3} />
              <div class="card-body productCardBody">
                <h5>Ergonomic Chair</h5>
                <p class="card-text">
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio
                </p>
                <a href="/path/to/page">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
