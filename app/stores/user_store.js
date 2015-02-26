"use strict";

import Reflux from "reflux";
import AuthActions from "../actions/auth_actions";
import SignupActions from "../actions/signup_actions";
import {FlashMessageActions} from "../actions";

const AuthStore = Reflux.createStore({

  init() {
    this.user = null;

    this.listenToMany(AuthActions);
    this.listenToMany(SignupActions);
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

  onSignupCompleted(user) {
    this._onLoginOrGetAuthedUser(user);
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