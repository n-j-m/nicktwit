"use strict";

import React from "react";
import AuthMixin from "../utils/auth_mixin";
import Following from "./following/following";

const Home = React.createClass({
  mixins: [AuthMixin],

  render() {
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
