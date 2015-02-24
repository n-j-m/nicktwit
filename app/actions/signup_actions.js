"use strict";

import Reflux from "reflux";
import api from "../utils/api";

import AsyncIndicator from "../utils/async_indicator";

const SignupActions = Reflux.createActions({
  "signup": { asyncResult: true }
});

AsyncIndicator.wire(SignupActions.signup);
SignupActions.signup.listenAndPromise(api.signup);

export default SignupActions;