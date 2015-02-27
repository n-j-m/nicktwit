"use strict";

import React from "react";

import FollowingListItem from "./followinglistitem";

const FollowingList = React.createClass({

  render() {
    const items = this.props.following.map((item, i) => <FollowingListItem key={i} handle={item.handle} />);
    return (
      <div className="list-group">
        {items}
      </div>
    );
  }

});

export default FollowingList;