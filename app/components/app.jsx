"use strict";

import React from "react";
import {RouteHandler, Link} from "react-router";
import Nav from "./nav/nav";
import Reflux from "reflux";

import UserStore from "../stores/user_store";

import AuthActions from "../actions/auth_actions";

import {Navigation} from "react-router";

import MessagePanel from "./messagepanel";

const App = React.createClass({
  mixins: [Reflux.ListenerMixin, Navigation],

  getInitialState() {
    return {
      user: null
    };
  },

  componentWillMount() {
    this.listenTo(UserStore, this.onAuth);
    AuthActions.getAuthedUser()
  },

  onAuth(user) {
    this.setState({user});

    if (!user) {
      this.transitionTo("/login");
    } else {
      this.transitionTo("/");
    }
  },

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <MessagePanel />
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2 col-xs-12">
              <RouteHandler user={this.state.user} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default App;
