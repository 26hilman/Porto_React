import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import { withRouter } from "react-router-dom";
import './assets/css/Hubungi.css';

class HubungiKamiPage extends Component {
  doKontakKami = () => {
    this.props.postKontakKami().then(() => {
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
            <h3>Tinggalkan Pesan Untuk Kami</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="nama"
                    className="form-control"
                    placeholder="Nama"
                    onChange={e =>this.props.setField(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={e =>this.props.setField(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="nomor_telepon"
                    className="form-control"
                    placeholder="Nomor Telepon"
                    onChange={e =>this.props.setField(e)}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btnContact"
                    onClick={() => this.doKontakKami()}
                  >Kirim Pesan</button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    name="pesan"
                    className="form-control"
                    placeholder="Isi Pesan"
                    style={{ width: "100%", height: "150px" }}
                    onChange={e =>this.props.setField(e)}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default connect ("nama, email, nomor_telepon, pesan", actions) (withRouter (HubungiKamiPage));
