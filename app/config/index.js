"use strict";

const _config = {
  unsecuredRoutes: ["/login"],
  REF_URL: "nicktwit.firebaseIO.com"
}

const Config = {
  get(key) {
    return _config[key];
  }
}

export default Config;