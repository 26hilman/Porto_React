import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Component/assets/css/Footer.css";

class Footer extends Component {
  render() {
    return (
        <section>
            <div className="container-fluid">
      <footer className="footer-bs">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 footer-brand animated fadeInLeft">
          <img
            src={require("./assets/images/rsz_sell_car.png")}
            alt="icon-sell-car"
          />
            <p>
              Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam
              porttitor vitae orci nec ultricies. Curabitur vehicula, libero
              eget faucibus faucibus, purus erat eleifend enim, porta
              pellentesque ex mi ut sem.
            </p>
            <p>© 2014 BS3 UI Kit, All rights reserved</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 footer-nav animated fadeInUp">
            <ul className="list">
              <li><Link to="#">Tentang Kami</Link></li>
              <li><Link to="/hubungikami">Hubungi Kami</Link></li>
              <li><Link to="/kirim_testimoni">Kirim Testimoni</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 footer-social animated fadeInDown">
          <h5 className="font-weight-bold text-uppercase mb-4">Ikuti Kami</h5>
            <ul>
              <li><Link to="https://www.facebook.com/">Facebook</Link></li>
              <li><Link to="https://twitter.com/?lang=en">Twitter</Link></li>
              <li><Link to="https://www.instagram.com/?hl=en">Instagram</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 footer-ns animated fadeInRight">
          <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>
            <ul className="list-unstyled">
              <li>
                <p>
                  <i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
              </li>
              <li>
                <p>
                  <i className="fas fa-envelope mr-3"></i> info@example.com</p>
              </li>
              <li>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              </li>
              <li>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
        </section>
    );
  }
}

export default Footer;
