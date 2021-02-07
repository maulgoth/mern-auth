import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar fixed-top navbar-light bg-light">
        <nav>
          <div>
            <Link
              to="/"
              style={{ fontFamily: "monospace" }}
              className="col s5 navbar-brand center black-text">
              <i className="material-icons">agriculture</i>
              PLUM
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;