"use strict";

import React from "react";
import {RouteHandler, Link} from "react-router";
import Nav from "./nav/nav";
import Reflux from "reflux";

import AuthStore from "../stores/auth_store";
import LoadingStore from "../stores/loading_store";
import FlashMessageStore from "../stores/flashmessage_store";

import AuthActions from "../actions/auth_actions";

import {Navigation} from "react-router";

import MessagePanel from "./messagepanel";

const DEFAULT_USER = AuthStore.getDefaultUser();

const App = React.createClass({
  mixins: [Reflux.ListenerMixin, Navigation],

  getInitialState() {
    return {
      user: DEFAULT_USER,
      isLoading: true,
      message: {}
    };
  },

  componentDidMount() {
    this.listenTo(AuthStore, this.onAuth);
    this.listenTo(LoadingStore, this.onLoading);
    this.listenTo(FlashMessageStore, this.onFlashMessage);
    AuthActions.getAuthedUser();
  },

  onFlashMessage(message) {
    this.setState({message});
  },

  onLoading(isLoading) {
    this.setState({isLoading});
  },

  onAuth(authResponse) {
    const user = authResponse.user;
    this.setState({user});

    if (user === DEFAULT_USER) {
      this.transitionTo("/login");
    } else {
      this.transitionTo("/");
    }
  },

  render() {
    return (
      <div>
        <Nav user={this.state.user} isLoading={this.state.isLoading} />
        <div className="container">
          <MessagePanel {...this.state.message} />
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
