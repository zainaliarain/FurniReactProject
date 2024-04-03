import React from "react";
import sofaimg from "../images/sofa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="container ">
        <div className="sofaimg">
          <img alt="sofaImg" src={sofaimg} />
        </div>

        <div className="row mt-5">
          <div className="col-8 mt-5">
            <h4>
              <span>
                <FontAwesomeIcon icon={faEnvelope} className="fa-thin" />
              </span>
              &nbsp; Subscribe to Newsletter
            </h4>
            <form action="">
              <div>
                <input type="text" />
                <input type="text" />
                <button type="button" class="btn btn-success">
                  <span>
                    <FontAwesomeIcon icon={faPaperPlane} className="fa-solid" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
