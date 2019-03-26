import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import { withRouter } from "react-router-dom";
import "./assets/css/Register.css";

class RegisterPage extends Component {
    doRegister = () => {
        this.props.postRegister().then(() => {
            this.props.history.replace("/login");
            });
    }
  render() {
    return (
        <section>
            <div className="container">
        <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
                <div className="card card-signin flex-row my-5">
                    <div className="card-img-left d-none d-md-flex"></div>
                    <div className="card-body">
                        <h5 className="card-title text-center">Register</h5>
                        <form className="form-signin" onSubmit={e => e.preventDefault()}>
                            <div className="form-label-group">
                                <input type="text" id="inputName" className="form-control" placeholder="Username"
                                    required autoFocus name="name" onChange={e =>this.props.setField(e)}/>
                                <label htmlFor="inputName">Nama</label>
                            </div>
                            <div className="form-label-group">
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                                    required name="email" onChange={e =>this.props.setField(e)}/>
                                <label htmlFor="inputEmail">Email</label>
                            </div>
                            <div className="form-label-group">
                                <input type="text" id="inputTelpon" className="form-control" placeholder="Password"
                                    required name="phone_number" onChange={e =>this.props.setField(e)}/>
                                <label htmlFor="inputTelpon">Nomor Telepon</label>
                            </div>
                            <div className="form-label-group">
                                <input type="text" id="inputUsername" className="form-control" placeholder="Password"
                                    required name="username" onChange={e =>this.props.setField(e)}/>
                                <label htmlFor="inputUsername">Username</label>
                            </div>
                            <div className="form-label-group">
                                <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                                    required name="password" onChange={e =>this.props.setField(e)}/>
                                <label htmlFor="inputPassword">Password</label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={() => this.doRegister()}>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    );
  }
}

export default connect ("name, email, phone_number, username, password", actions) (withRouter (RegisterPage));