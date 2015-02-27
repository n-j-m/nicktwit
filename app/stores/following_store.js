"use strict";

import Reflux from "reflux";

import FollowingActions from "../actions/following_actions";

const FollowingStore = Reflux.createStore({

  listenables: FollowingActions,

  onGetFollowingCompleted(following) {
    this.trigger({following});
  }

});

export default FollowingStore;