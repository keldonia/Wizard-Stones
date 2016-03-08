var AppDispatcher = require('../dispatcher');
var Store = require('flux/utils').Store;
var ScoreConstants = require('../constants/score_constants');

var _score = "0";
var _topScore = "0";

var ScoreStore = new Store(AppDispatcher);

ScoreStore.score = function () {
  return _score;
};

ScoreStore.topScore = function () {
  return _topScore;
};

ScoreStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ScoreConstants.UPDATE_SCORE:
        ScoreStore.updateScore(payload.score);
        ScoreStore.__emitChange();
      break;
    case ScoreConstants.RESET_SCORES:
        ScoreStore.resetScores();
        ScoreStore.__emitChange();
      break;
    default:

  }
};

ScoreStore.resetScores = function () {
  _score = "0";
  _topScore = "0";
};

ScoreStore.updateScore = function (score) {
  _score = _score + score;
  if (_score > _topScore) {
    _topScore = _score;
  }
};


module.exports = ScoreStore;
