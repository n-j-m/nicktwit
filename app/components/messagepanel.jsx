"use strict";

import React from "react/addons";
import Reflux from "reflux";

import FlashMessageStore from "../stores/flashmessage_store";
import FlashMessageActions from "../actions/flashmessage_actions";

const cx = React.addons.classSet;

const MessagePanel = React.createClass({
  mixins: [Reflux.connect(FlashMessageStore)],

  render() {

    if (!this.state.message) {
      return <div />;
    }

    const classes = cx({
      "alert": true,
      "alert-info": this.state.contextualName === "info" || !this.state.contextualName,
      "alert-danger": this.state.contextualName === "error",
      "alert-warning": this.state.contextualName === "warning",
      "alert-success": this.state.contextualName === "success"
    });

    return (
      <div className={classes}>
        <button type="button" onClick={this.handleClose} className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        {this.state.message}
      </div>
    );
  },

  handleClose(evt) {
    evt.preventDefault();

    FlashMessageActions.clear();
  }

});

export default MessagePanel;