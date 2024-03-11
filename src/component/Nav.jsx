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
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#3B5D50", pedding: "0" }}
        >
          <a className="navbar-brand" href="/path/to/page">
            Furni.
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* {mapping for manu items and genrate the item list} */}

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
