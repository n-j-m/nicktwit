"use strict";

import React from "react";
import Reflux from "reflux";

import FollowingActions from "../../actions/following_actions";
import FollowingStore from "../../stores/following_store";

import FollowingList from "./followinglist";

const Following = React.createClass({
  mixins: [ Reflux.connect(FollowingStore) ],

  getInitialState() {
    return {
      following: []
    };
  },

  componentWillMount() {
    FollowingActions.getFollowing(this.props.user);
  },

  componentWillRecieveProps(nextProps) {
    FollowingActions.getFollowing(nextProps.user);
  },

  propTypes: {
    user: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Following</div>
        <div className="panel-body">
          <form role="form" className="form-horizontal">
            <div className="form-group col-xs-offset-1 col-lg-12">
              <input type="text" ref="search" className="form-control" placeholder="Search" />
            </div>
          </form>
        </div>

        <FollowingList following={this.state.following} />

      </div>
    );
  }

});

export default Following;