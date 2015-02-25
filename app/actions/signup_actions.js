"use strict";

import Reflux from "reflux";
import api from "../utils/api";

import wire from "../utils/wire";

const SignupActions = Reflux.createActions({
  "signup": { asyncResult: true }
});

wire(SignupActions.signup);
SignupActions.signup.listenAndPromise(api.signup);

export default SignupActions;