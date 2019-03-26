import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import { withRouter } from "react-router-dom";

import Navigation from '../Component/Navigation';
import Footer from '../Component/Footer';

class EditProfilePage extends Component {
  doEditProfile = () => {
    this.props.putUser().then(() => {
        this.props.history.replace("/profile");
        });
  }
  render() {
    return (
        <section>
        <Navigation />
        <div className="container bootstrap snippet">
          <div className="row">
            <div className="col-sm-10">
              <h1>Halo Wong</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="text-center">
                <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar"/>
                <h6>Upload a different photo...</h6>
                <input type="file" className="text-center center-block file-upload"/>
              </div>
              <hr/>
            </div>
              <div className="col-sm-9">
                  <ul className="nav nav-tabs">
                    <li className="active"><a data-toggle="tab">Pengaturan Akun</a></li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane active" id="pengaturanakun">
                      <hr/>
                      <form className="form" onSubmit={e => e.preventDefault()}>
                        <div className="form-group">
                          <div className="col-xs-12">
                            <label htmlFor="name">
                              <h4>Nama</h4>
                            </label>
                            <input type="text" className="form-control" name="name" onChange={e =>this.props.setField(e)} placeholder="Nama"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-xs-12">
                            <label htmlFor="email">
                              <h4>Email</h4>
                            </label>
                            <input type="email" className="form-control" name="email" onChange={e =>this.props.setField(e)} placeholder="you@email.com"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-xs-12">
                            <label htmlFor="phone">
                              <h4>Nomor Telepon</h4>
                            </label>
                            <input type="text" className="form-control" name="phone_number" onChange={e =>this.props.setField(e)} placeholder="082111222***"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-xs-12">
                            <label htmlFor="name">
                              <h4>Username</h4>
                            </label>
                            <input type="text" className="form-control" name="username" onChange={e =>this.props.setField(e)} placeholder="Username"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-xs-12">
                            <label htmlFor="password">
                              <h4>Password</h4>
                            </label>
                            <input type="password" className="form-control" name="password" onChange={e =>this.props.setField(e)} placeholder="********"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-xs-12">
                            <br/>
                            <button className="btn btn-lg btn-success" type="submit" onClick={() => this.doEditProfile()}> Save</button>
                            <button className="btn btn-lg" type="reset"> Reset</button>
                          </div>
                        </div>
                      </form>
                      <hr/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <Footer />
        </section>
    );
  }
}

export default connect ("name, email, phone_number, username, password", actions) (withRouter (EditProfilePage));
