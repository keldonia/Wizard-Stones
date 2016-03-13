var React = require('react');
var EmptyRows = require('./empty_rows');
var ValueConstants = require('../constants/value_english');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Tile = require('./tile');

var GameWidow = React.createClass({
  getInitialState: function () {
    return { board: undefined };
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ board: newProps.board });
  },

  getRows: function () {
    var board = this.props.board
    var that = this;

    if (board) {
      var rowComponents = board.map ( function (row, idx) {
        var tiles = that.getTiles(row);
        return(
          <ul key={idx} className="inner">
            {tiles}
          </ul>
        )
      });
      return (
        <ul>
          {rowComponents}
          <div className="group"></div>
        </ul>
      ) ;
    } else {
      return <EmptyRows />
    }
  },

  getTiles: function (row) {
    return row.map( function(tile, idx) {
      var keys = [1,2,3].map( function(n) { return n * idx })
      if (tile === 0) {
        return <li key={keys[0]}><div className="empty group"></div></li>
      } else {
        return (
          <ReactCSSTransitionGroup transitionName="occupied" transitionAppear={true}  transitionEnterTimeout={100} transitionAppearTimeout={100} transitionLeaveTimeout={0}>
            <li key={idx}>
              <div className="occupied" id={ValueConstants[tile.value]}>
                <div className="power-holder">
                  {tile.value}
                </div>
              </div>
            </li>
          </ReactCSSTransitionGroup>
        );
      }
    })
  },

  render: function() {
    var rows = this.getRows();

    return (
      <section className="game-viewport">
        {rows}
      </section>
    );
  }

});

module.exports = GameWidow;
