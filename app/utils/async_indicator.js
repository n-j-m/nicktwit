"use strict";

import LoadingActions from "../actions/loading_actions";

const AsyncIndicator = {
  wire(asyncAction) {
    console.log("wire:", {asyncAction});
    asyncAction.preEmit = LoadingActions.loading;
    asyncAction.completed.listen(LoadingActions.loadingComplete);
    asyncAction.failed.listen(LoadingActions.loadingComplete);
  }
}

export default AsyncIndicator;