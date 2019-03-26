import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { connect } from "unistore/react";
// import { actions } from "../store";

class NavbarSebelumLogin extends Component {
  render() {
      return (
        <section>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img
              src={require("./assets/images/rsz_sell_car.png")}
              alt="icon-sell-car"
            />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Forum</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Akun Saya
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/login" >Masuk</Link>
                    <Link className="dropdown-item" to="/register">Daftar</Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      );
    }
}
export default NavbarSebelumLogin;