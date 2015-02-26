"use strict";

import Reflux from "reflux";
import AuthActions from "../actions/auth_actions";
import {FlashMessageActions} from "../actions";

const AuthStore = Reflux.createStore({

  init() {
    this.user = null;
  },

  listenables: AuthActions,

  onLoginCompleted(user) {
    this._onLoginOrGetAuthedUser(user);
  },

  onLoginFailed(error) {
    this.user = null;
    this.trigger(this.user);
    FlashMessageActions.error(error.message);
  },

  onLogout() {
    this.user = null;
    this.trigger(this.user);
  },

  onGetAuthedUserCompleted(user) {
    this._onLoginOrGetAuthedUser(user);
  },

  onGetAuthedUserFailed() {
    this._onLoginOrGetAuthedUser(null);
  },

  _onLoginOrGetAuthedUser(user) {
    this.user = user;
    this.trigger(user);
  },

  getUser() {
    return this.user;
  }

});

module.exports = AuthStore;