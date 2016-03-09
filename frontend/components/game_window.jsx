var React = require('react');
var EmptyRows = require('./empty_rows');

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
        </ul>
      ) ;
    } else {
      return <EmptyRows />
    }
  },

  getTiles: function (row) {
    return row.map( function(tile, idx) {
      if (tile === 0) {
        return <li key={idx} className="empty group"></li>
      } else {
        return <li key={idx} className={tile.value}>{tile.value}</li>
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
