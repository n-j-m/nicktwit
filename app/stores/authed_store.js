"use strict";

import Reflux from "reflux";
import UserStore from "./user_store";

const AuthedStore = Reflux.createStore({

  init() {
    this.listenTo(UserStore, this.onUserStore);
    this.isAuthenticated = false;
  },

  onUserStore(user) {
    this.isAuthenticated = !!user;
    this.trigger(!!user);
  },

  isLoggedIn() {
    return this.isAuthenticated;
  }

});

export default AuthedStore;