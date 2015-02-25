"use strict";

import Reflux from "reflux";
import AuthActions from "../actions/auth_actions";
import {FlashMessageActions} from "../actions";

const DEFAULT_USER = {username: "__DEFAULT__"};

const AuthStore = Reflux.createStore({

  init() {
    this.user = this.getDefaultUser();
  },

  listenables: AuthActions,

  onLoginCompleted(user) {
    this._onLoginOrGetAuthedUser(user);
  },

  onLoginFailed(error) {
    this.user = DEFAULT_USER;
    this.trigger({user: this.user});
    FlashMessageActions.error(error.message);
  },

  onLogout() {
    this.user = this.getDefaultUser();
    this.trigger({user: this.user});
  },

  onGetAuthedUserCompleted(user) {
    this._onLoginOrGetAuthedUser(user);
  },

  onGetAuthedUserFailed() {
    this._onLoginOrGetAuthedUser(DEFAULT_USER);
  },

  _onLoginOrGetAuthedUser(user) {
    this.user = user;
    this.trigger({user});
  },

  getUser() {
    return this.user;
  },

  getDefaultUser() {
    return DEFAULT_USER;
  }

});

module.exports = AuthStore;