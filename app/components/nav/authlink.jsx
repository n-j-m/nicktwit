"use strict";

import React from "react";
import Reflux from "reflux";

import AuthActions from "../../actions/auth_actions";
import NavLink from "./navlink";

import AuthedStore from "../../stores/user_store";

const AuthLink = React.createClass({
  mixins: [Reflux.connect(AuthedStore, "isLoggedIn")],

  render() {
    var link;

    if (!this.state.isLoggedIn) {
      link = (
        <NavLink to="login" className="right item">
          <i className="glyphicon glyphicon-log-in"></i> Login
        </NavLink>
      );
    } else {
      link = (
        <li>
          <a href="#" onClick={this.handleLogout} className="right item">
            <i className="glyphicon glyphicon-log-out"></i> Logout
          </a>
        </li>
      );
    }

    return link;
  },

  handleLogout(evt) {
    evt.preventDefault();
    
    AuthActions.logout();
  }

});

export default AuthLink;