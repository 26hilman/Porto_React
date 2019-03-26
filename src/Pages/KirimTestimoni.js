import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import { withRouter } from "react-router-dom";
import './assets/css/Hubungi.css';

class KirimTestimoniPage extends Component {
  doKirimTestimoni = () => {
    this.props.postTestimoni().then(() => {
      this.props.history.replace("/");
        });
  }
  render() {
    return (
      <section>
        <div className="container contact-form">
          <div className="contact-image">
            <img
              src={require("./assets/images/rsz_sell_car.png")}
              alt="icon-sell-car"
            />
          </div>
          <form onSubmit={e => e.preventDefault()}>
            <h3>Tinggalkan Testimoni Untuk Kami</h3>
            <div className="row">
                <div className="col-md-2"></div>
              <div className="col-md-8">
                <div className="form-group">
                  <textarea
                    name="testimoni"
                    className="form-control"
                    placeholder="Testimoni Anda"
                    style={{ width: "100%", height: "150px" }}
                    onChange={e =>this.props.setField(e)}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btnContact"
                    onClick={() => this.doKirimTestimoni()}
                  >Kirim Testimoni</button>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default connect ("testimoni", actions) (withRouter (KirimTestimoniPage));
