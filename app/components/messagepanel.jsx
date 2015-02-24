"use strict";

import React from "react/addons";

const cx = React.addons.classSet;

const MessagePanel = React.createClass({

  render() {

    if (!this.props.message) {
      return <div />;
    }

    const classes = cx({
      "alert": true,
      "alert-dismissible": true,
      "alert-info": this.props.contextualName === "info" || !this.props.contextualName,
      "alert-danger": this.props.contextualName === "error",
      "alert-warning": this.props.contextualName === "warning",
      "alert-success": this.props.contextualName === "success"
    });

    return (
      <div className={classes}>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        {this.props.message}
      </div>
    );
  }

});

export default MessagePanel;