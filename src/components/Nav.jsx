import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./NavStyle.css";
function Nav() {
  // {Difine the array for list}

  const navbarItems = [
    { name: "Home", link: "#" },
    { name: "Shop", link: "#" },
    { name: "About us", link: "#" },
    { name: "Services", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Contact us", link: "#" },
    { icon: faUser, link: "#" },
    { icon: faCartShopping, link: "#" },
  ];

  return (
    <div>
      {/* <div> hello my feature 1 </div> */}
      <nav
        className="navbar navbar-expand-lg  outerStyle"
        style={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <div className="container innerStyle">
          <a className="navbar-brand" href="/path/to/page">
            Furni <span className="dotStyle">.</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse " id="navbarNav">
            {/* {mapping for manu items and genrate the item list} */}

            <ul className="ulStyle navbar-nav ">
              {navbarItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href={item.link}
                  >
                    {item.name}
                    <FontAwesomeIcon icon={item.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
