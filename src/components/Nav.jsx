import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./NavStyle.css";
import { Link } from "react-router-dom";
function Nav() {
  // {Difine the array for list}

  const navbarItems = [
    { name: "Home", link: "hero" },
    { name: "Shop", link: "/shop" },
    { name: "About\u00A0us", link: "#" },
    { name: "Services", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Contact\u00A0us", link: "#" }, // Using non-breaking space
    { icon: faUser, link: "#" },
    { icon: faCartShopping, link: "#" },
  ];

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg  outerStyle"
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <div className="container innerStyle">
          <a className="logoStyle navbar-brand" href="/path/to/page">
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

            <ul className="navbardNav navbar-nav ">
              {navbarItems.map((item, index) => (
                <li className=" nav-item" key={index}>
                  <Link
                    className="nav-link active"
                    to={item.link}
                    aria-current="page"
                    style={{ color: "#EFF2F1 " }}
                  >
                    {item.name}
                    {item.icon && <FontAwesomeIcon icon={item.icon} />}
                  </Link>
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
