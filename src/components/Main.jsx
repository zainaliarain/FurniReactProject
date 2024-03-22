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

function Main() {
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

  const productSection = [
    {
      icon: cardimg1,
      title: "Nordic Chair",
      description:
        "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
      link: "#",
    },
    {
      icon: cardimg2,
      title: "Kruzo Aero Chair",
      description:
        "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
      link: "#",
    },
    {
      icon: cardimg3,
      title: "Ergonomic Chair",
      description:
        "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
      link: "#",
    },
  ];
  return (
    <div>
      {/* {Start Why Choose Us Section} */}
      <section className="midSection">
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
                {/* {mapping for feature items and genrate the list} */}
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
      </section>
      {/* {End Why Choose Us Secton} */}
      {/* {Start We Help Section} */}
      <section className="helpsection">
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
                  {/* {Array using for lenth and mapping } */}

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
      </section>
      {/* {End We Help Section} */}
      {/* {Start Papular Product Section} */}
      <section className="container ">
        <div className="row mt-5 mb-5">
          {/* {mapping for productSection items and genrate the list} */}
          {productSection.map((productSection, index) => (
            <div className="col-4" key={index}>
              <div class="card" style={{ border: "none" }}>
                <div className="row no-gutters">
                  <div className="col-4 pProduct">
                    <img alt="productimg1" src={productSection.icon} />
                  </div>
                  <div className="col-8">
                    <div class="card-body cardBody">
                      <h5>{productSection.title}</h5>
                      <p class="card-text">{productSection.description}</p>
                      <a href={productSection.link}>Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* {End Papular Product Section} */}

      {/* Start Testimonials Section */}
      <div className="contianer ">
        <div className="row mt-5 mb-5">
          <div className="col-12">
            <div id="carouselExampleDark" class="carousel carousel-dark slide">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Testimonials Section */}
    </div>
  );
}

export default Main;
