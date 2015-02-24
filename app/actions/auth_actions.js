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
AuthActions.login.completed.listen(LoadingActions.loadingComplete);
AuthActions.login.failed.listen(LoadingActions.loadingComplete);

AuthActions.getAuthedUser.preEmit = LoadingActions.loading;
AuthActions.getAuthedUser.listenAndPromise(api.getAuthedUser);
AuthActions.getAuthedUser.completed.listen(LoadingActions.loadingComplete);
AuthActions.getAuthedUser.failed.listen(LoadingActions.loadingComplete);

export default AuthActions;