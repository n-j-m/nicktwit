"use strict";

import Reflux from "reflux";

const FlashMessageActions = Reflux.createActions([
  "error",
  "warning",
  "info",
  "success"
]);

export default FlashMessageActions;