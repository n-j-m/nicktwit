import config from "../config";

import Firebase from "firebase";
const ref = new Firebase(config.get("REF_URL"));

const userRef = ref.child("users");
const followingRef = ref.child("following");

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

      userRef.child(handle).
        set({ uid: auth.uid, handle: handle }, (err, auth) => {
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

        return populateUser(auth.uid).then(resolve).catch(reject);
      });
    });
  },

  signup(email, password, handle) {
    return new Promise((resolve, reject) => {

      return createUser({email, password}, handle).
        then((user) => {
          return api.login(email, password)
        }).
        then(resolve).
        catch(reject);

    });
  },

  logout() {
    ref.unauth();
  },

  getAuthedUser() {
    return new Promise((resolve, reject) => {
      const user = ref.getAuth();
      if (!user) return reject(user);

      return populateUser(user.uid).
        then(resolve).
        catch(reject);
    });
  },

  getFollowing(user) {
    return new Promise((resolve, reject) => {
      followingRef.child(user.handle).on("value", (snap) => {
        const val = snap.val();
        if (!val) return resolve([]);
        return resolve(
          Object.keys(val).map(function(handle) {
            return {handle};
          })
        );
      });
    });
  }

};

module.exports = api;