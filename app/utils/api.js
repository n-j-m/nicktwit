import config from "../config";

import Firebase from "firebase";
const ref = new Firebase(config.get("REF_URL"));

const userRef = ref.child("users");

function populateUser(uid) {
  return new Promise((resolve, reject) => {
    userRef.orderByChild("uid").equalTo(uid).once("child_added", (snap) => {
      const val = snap.val();
      if (!val) return reject(new Error("Invalid User"));
      return resolve(val);
    });
  });
}

function createUser(credentials, handle) {
  return new Promise((resolve, reject) => {
    ref.createUser(credentials, (err, auth) => {
      if (err) return reject(err);
      const userObj = {
        uid: auth.uid,
        handle: handle
      };
      userRef.child(handle).set(userObj, (err, auth) => {
        if (err) return reject(err);
        return resolve(userObj);
      });
    });
  });
}

const api = {

  login(email, password) {
    return new Promise((resolve, reject) => {
      userRef.authWithPassword({email, password}, (err, auth) => {
        if (err) return reject(err);

        populateUser(auth.uid).then(resolve).catch(reject);
      });
    });
  },

  signup(email, password, handle) {
    return new Promise((resolve, reject) => {

      createUser({email, password}, handle).
        then((user) => {
          return api.login(email, password)
        }).
        then(resolve).
        catch(reject);

    });
  },

  getAuthedUser() {
    return new Promise((resolve, reject) => {
      const user = ref.getAuth();
      if (!user) return reject(user);

      populateUser(user.uid).
        then(resolve).
        catch(reject);
    });
  }

};

module.exports = api;