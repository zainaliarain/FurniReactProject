import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Nav() {
  // Define the array for list
  const navbarItems = [
    { name: "Home", link: "/hero" },
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
        className="navbar navbar-expand-lg outerStyle"
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <div className="container innerStyle">
          <Link className="logoStyle navbar-brand" to="/path/to/page">
            Furni <span className="dotStyle">.</span>
          </Link>
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

          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Mapping for menu items and generate the item list */}
            <ul className="navbar-nav ms-auto">
              {navbarItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link className="nav-link" to={item.link} aria-current="page">
                    {item.name}
                    {item.icon && (
                      <FontAwesomeIcon
                        icon={item.icon}
                        style={{ marginLeft: "5px" }}
                      />
                    )}
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
