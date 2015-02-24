"use strict";

import React from "react";
import TransitionMixin from "../utils/transition_mixin";
import AuthMixin from "../utils/auth_mixin";
import Following from "./following/following";

const Home = React.createClass({
  mixins: [TransitionMixin, AuthMixin],

  render() {
    console.log("user:", this.props.user);
    return (
      <div>
        <h1>Home</h1>
        <h2>Welcome, {this.props.user.handle}</h2>
        <Following />
      </div>
    );
  }
});

export default Home;
