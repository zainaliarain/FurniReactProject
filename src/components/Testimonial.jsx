import React from "react";
import sliderImg from "../images/person-1.jpg";

function Testimonial() {
  const testimonials = [
    {
      paragraph:
        "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
      icon: sliderImg,
      title: "Maria Jones",
      description: "CEO, Co-Founder, XYZ Inc.",
    },
  ];
  return (
    <div>
      {/* Start Testimonials Section */}
      <div className="container" style={{ border: "2px solid black" }}>
        <div className="row mt-5 mb-5">
          <div className="col-12" style={{ border: "2px solid black" }}>
            <h2>Testimonials</h2>
            <div
              id="carouselExampleControlsNoTouching"
              className="carousel slide"
              data-bs-touch="false"
            >
              <div className="carousel-inner">
                {testimonials.map((testimonial, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <div className="row">
                      <div className="col">
                        <div className="testimonial">
                          <img
                            alt="SliderImg"
                            src={testimonial.icon}
                            style={{
                              width: "90px",
                              height: "90px",
                              borderRadius: "50px",
                            }}
                          />
                          <h4>{testimonial.title}</h4>
                          <p>{testimonial.paragraph}</p>
                          <span>{testimonial.description}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev"
                style={{ border: "2px solid black", background: "black" }}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next"
                style={{ border: "2px solid black", background: "black" }}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Testimonials Section */}
    </div>
  );
}

export default Testimonial;
