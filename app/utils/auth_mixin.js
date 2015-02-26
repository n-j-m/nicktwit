"use strict";

import AuthedStore from "../stores/authed_store";
import config from "../config";
import LoadingActions from "../actions/loading_actions";

const unsecuredRoutes = config.get("unsecuredRoutes");

function isSecured(path) {
  return !unsecuredRoutes.filter((route) => path === route).length;
}

const AuthMixin = {

  statics: {
    willTransitionTo(transition) {
      if (isSecured(transition.path)) {
        if (!AuthedStore.isLoggedIn()) {
          transition.redirect("/login");
        }
      }
      LoadingActions.loadingComplete();
    }
  }

};

export default AuthMixin;