app.controller('FlashCardCtrl', function ($scope, ScoreFactory, FlashCardFactory, $stateParams) {
    $scope.answered = false;
    $scope.answeredCorrectly = null;

    $scope.answerQuestion = function(answer) {
      if($scope.answered) {
        return;
      }
      $scope.answered = true;
      if(answer.correct) {
        ScoreFactory.correct++;
        $scope.feedback = "Correct!";
        $scope.answeredCorrectly = true;
      } else {
        ScoreFactory.incorrect++;
        $scope.feedback = "Nice try";
      }
    };

    $scope.getFlashCardById = function(flashCardId){
    FlashCardFactory.getById(flashCardId)
      .then(function(card){
        $scope.flashCard = card;
      })
      .then(null, function(err){
        return next(err);
      });
  }

    
  })