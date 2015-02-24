"use strict";

import Reflux from "reflux";
import {SignupActions} from "../actions";

import api from "../utils/api";

const ProfileStore = Reflux.createStore({

  init() {
    this.profile = {};
  },

  listenables: SignupActions,

  onSignupCompleted(res) {
    // update data from signup response
    console.log(res);
  }

});

export default ProfileStore;