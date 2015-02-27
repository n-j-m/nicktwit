"use strict";

import Reflux from "reflux";

import wire from "../utils/wire";
import api from "../utils/api";

const FollowingActions = Reflux.createActions({
  "getFollowing": { asyncResult: true }
});

wire(FollowingActions.getFollowing);
FollowingActions.getFollowing.listenAndPromise(api.getFollowing);

export default FollowingActions;