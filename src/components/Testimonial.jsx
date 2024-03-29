import React from "react";
import sliderImg from "../images/person-1.jpg";
import "./Testimonial.css";
function Testimonial() {
  const testimonials = [
    {
      paragraph:
        "“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”",
      icon: sliderImg,
      title: "Maria Jones",
      description: "CEO, Co-Founder, XYZ Inc.",
    },
    {
      paragraph:
        "“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”",

      icon: sliderImg,
      title: "Maria Jones",
      description: "CEO, Co-Founder, XYZ Inc.",
    },
    {
      paragraph:
        "“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”",
      icon: sliderImg,
      title: "Maria Jones",
      description: "CEO, Co-Founder, XYZ Inc.",
    },
  ];

  return (
    <div>
      {/* Start Testimonials Section */}
      <section className="container-fluid">
        <div className="row mt-5 mb-5">
          <div
            className="col-12 outerTesti"
            // style={{ border: "2px solid black" }}
          >
            <h2>Testimonials</h2>
            <div
              id="carouselExampleControlsNoTouching"
              className="carousel slide"
              data-bs-touch="false"
            >
              <div className="carousel-inner innerTestiStyle">
                <div
                  class="carousel-indicators"
                  style={{ backgroundColor: "red" }}
                >
                  <button
                    type="button"
                    data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                {testimonials.map((testimonials, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <div
                      className="row mt-2"
                      // style={{ justifyContent: "center" }}
                    >
                      <div className="col-lg-10 max-auto maintestimonail">
                        {/* <div className="testimonial maintestimonail"> */}
                        <blockquote>
                          <p>{testimonials.paragraph}</p>
                        </blockquote>

                        <img alt="SliderImg" src={testimonials.icon} />
                        <h4>{testimonials.title}</h4>
                        <span style={{ margin: "0" }}>
                          {testimonials.description}
                        </span>
                      </div>
                    </div>
                  </div>
                  // </div>
                ))}
              </div>
              <button
                className="carousel-control-prev testibutton"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next testibutton"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon "
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonials Section */}
    </div>
  );
}

export default Testimonial;
