"use strict";

import React from "react";
import SignupActions from "../actions/signup_actions";
import {Navigation} from "react-router";

const Signup = React.createClass({
  mixins: [Navigation],

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form role="form" className="form-horizontal">
          <div className="form-group">
            <div className="col-xs-12 col-sm-8 col-md-6 col-lg-5">
              <input onKeyPress={this.handleKeyPress} type="text" className="form-control" name="email" ref="email" placeholder="email" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-12 col-sm-8 col-md-6 col-lg-5">
              <input onKeyPress={this.handleKeyPress} type="password" className="form-control" name="password" ref="password" placeholder="password" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-12 col-sm-8 col-md-6 col-lg-5">
              <input onKeyPress={this.handleKeyPress} type="text" className="form-control" ref="handle" placeholder="handle" required />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <button onClick={this.handleLogin} type="submit" className="btn btn-primary btn-block">
                <i className="glyphicon glyphicon-log-in"></i> Sign In
              </button>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
              <button onClick={this.handleSignup} type="submit" className="btn btn-primary btn-block">
                <i className="glyphicon glyphicon-log-in"></i> Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  },

  handleKeyPress(evt) {
    if (evt.key === "Enter") {
      evt.preventDefault();
      this.doSignup();
    }
  },

  handleSignup(evt) {
    evt.preventDefault();

    this.doSignup();
  },

  handleLogin(evt) {
    evt.preventDefault();

    this.transitionTo("/login");
  },

  doSignup() {
    const email = this.refs.email.getDOMNode().value;
    const password = this.refs.password.getDOMNode().value;
    const handle = this.refs.handle.getDOMNode().value;

    SignupActions.signup(email, password, handle);
  }

});

export default Signup;