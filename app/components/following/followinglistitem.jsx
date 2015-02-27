"use strict";

import React from "react";

const FollowingListItem = React.createClass({

  propTypes: {
    handle: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <a className="list-group-item">@{this.props.handle}</a>
    );
  }

});

export default FollowingListItem;