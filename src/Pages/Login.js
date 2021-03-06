import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import { withRouter } from "react-router-dom";
import "./assets/css/Login.css";

class LoginPage extends Component {
    doLogin = () => {
        this.props.postLogin().then(() => {
            if (this.props.is_login === true){
            this.props.history.replace("/");
            }
        });
    }
  render() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Login</h5>
                                <form className="form-signin" onSubmit={e => e.preventDefault()}>
                                    <div className="form-label-group">
                                        <input type="text" id="inputUsername" className="form-control" placeholder="Username"
                                            required autoFocus name="username" onChange={e =>this.props.setField(e)}/>
                                        <label htmlFor="inputUsername">Username</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                                            required name="password" onChange={e =>this.props.setField(e)}/>
                                        <label htmlFor="inputPassword">Password</label>
                                    </div>

                                    <div className="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={() => this.doLogin()}>Login</button>
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

export default connect ("is_login, username, password,", actions) (withRouter (LoginPage));
