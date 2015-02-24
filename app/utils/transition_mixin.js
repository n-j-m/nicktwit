"use strict";

import LoadingActions from "../actions/loading_actions";
import authStore from "../stores/auth_store";
import Config from "../config";

const TransitionMixin = {

  componentDidMount() {
    LoadingActions.loadingComplete();
  }

};

export default TransitionMixin;