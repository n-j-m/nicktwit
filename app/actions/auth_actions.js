"use strict";

import Reflux from "reflux";
import api from "../utils/api";
import LoadingActions from "./loading_actions";

const AuthActions = Reflux.createActions({
  "getAuthedUser": {asyncResult: true},
  "login": {asyncResult: true},
  "logout": {asyncResult: false}
});

AuthActions.login.preEmit = LoadingActions.loading;
AuthActions.login.listenAndPromise(api.login);

AuthActions.getAuthedUser.preEmit = LoadingActions.loading;
AuthActions.getAuthedUser.listenAndPromise(api.getAuthedUser);

export default AuthActions;