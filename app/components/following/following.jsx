"use strict";

import React from "react";

const Following = React.createClass({

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">.following</div>
        <div className="panel-body">
          <form role="form" className="form-horizontal">
            <div className="form-group col-xs-offset-1 col-lg-12">
              <input type="text" ref="search" className="form-control" placeholder="Search" />
            </div>
          </form>
        </div>

        <div className="list-group">
          <a className="list-group-item">Cras justo odio</a>
          <a className="list-group-item">Dapibus ac facilisis in</a>
          <a className="list-group-item">Morbi leo risus</a>
          <a className="list-group-item">Porta ac consectetur ac</a>
          <a className="list-group-item">Vestibulum at eros</a>
        </div>

      </div>
    );
  }

});

export default Following;