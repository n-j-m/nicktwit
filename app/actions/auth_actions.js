"use strict";

import Reflux from "reflux";
import api from "../utils/api";
import wire from "../utils/wire";

const AuthActions = Reflux.createActions({
  "getAuthedUser": {asyncResult: true},
  "login": {asyncResult: true},
  "logout": {asyncResult: false}
});

AuthActions.login.listenAndPromise(api.login);
wire(AuthActions.login);

AuthActions.getAuthedUser.listenAndPromise(api.getAuthedUser);
wire(AuthActions.getAuthedUser);

AuthActions.logout.listen(api.logout);

export default AuthActions;