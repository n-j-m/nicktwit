"use strict";

import Reflux from "reflux";
import api from "../utils/api";
import AsyncIndicator from "../utils/async_indicator";

const AuthActions = Reflux.createActions({
  "getAuthedUser": {asyncResult: true, name: "getAuthedUser"},
  "login": {asyncResult: true, name: "login"},
  "logout": {asyncResult: false, name: "logout"}
});

AsyncIndicator.wire(AuthActions.login);
AuthActions.login.listenAndPromise(api.login);

AsyncIndicator.wire(AuthActions.getAuthedUser);
AuthActions.getAuthedUser.listenAndPromise(api.getAuthedUser);

export default AuthActions;