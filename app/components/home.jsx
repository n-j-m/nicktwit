"use strict";

import React from "react";
import AuthMixin from "../utils/auth_mixin";
import Following from "./following/following";

const Home = React.createClass({
  mixins: [AuthMixin],

  render() {
    const handle = this.props.user ? this.props.user.handle : "";
    return (
      <div>
        <h1>Home</h1>
        <h2>Welcome, @{handle}</h2>
        <Following user={this.props.user} />
      </div>
    );
  }
});

export default Home;
