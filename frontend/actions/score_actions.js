var AppDispatcher = require('../dispatcher');
var ScoreConstants = require('../constants/score_constants');

var ScoreActions = {
  updateScore: function (addedScore) {
    AppDispatcher.dispatch({
      actionType: ScoreConstants.UPDATE_SCORE,
      score: addedScore
    });
  },
  resetScores: function () {
    AppDispatcher.dispatch({
      actionType: ScoreConstants.RESET_SCORES
    });
  }

};

module.exports = ScoreActions;
