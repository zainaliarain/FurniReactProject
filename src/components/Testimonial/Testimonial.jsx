import React from "react";
import sliderImg from "../../images/person-1.jpg";
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
          <div className="col-12 outerTesti">
            <h2>Testimonials</h2>
            <div className="row">
              <div className="col-lg-10 max-auto maintestimonail">
                {/* Testimonial content */}
                <div
                  id="carouselExampleControlsNoTouching"
                  className="carousel slide"
                  data-bs-touch="false"
                >
                  <div className="carousel-inner innerTestiStyle">
                    {/* Testimonial details */}
                    {testimonials.map((testimonial, index) => (
                      <div
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                        key={index}
                      >
                        <blockquote>
                          <p>{testimonial.paragraph}</p>
                        </blockquote>
                        <img alt="SliderImg" src={testimonial.icon} />
                        <h4>{testimonial.title}</h4>
                        <span style={{ margin: "0" }}>
                          {testimonial.description}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Carousel controls */}
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
                  {/* Carousel indicators */}
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleControlsNoTouching"
                      data-bs-slide-to="0"
                      className="active"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonials Section */}
    </div>
  );
}

export default Testimonial;
