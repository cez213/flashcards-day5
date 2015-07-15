app.controller('AddCard', function ($scope, FlashCardFactory, $rootScope, $stateParams) {
	$scope.resetCard = function () {
		$scope.newCard = {
			answers: [{
				correct: true
			}, {
				correct: false
			}, {
				correct: false
			}]
		};
	}

	$scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

	$scope.setCorrect = function (givenAnswer) {
		$scope.newCard.answers.forEach(function (a) {
			a.correct = false;
		});
		givenAnswer.correct = true;
	};

	$scope.postFlashCard = function (givenCard) {
		$scope.newCard = givenCard;
		if($stateParams.flashCardId){
			$scope.param = $stateParams.flashCardId;
			FlashCardFactory.update($scope.newCard, $scope.param)
			.then(function (card) {
				$rootScope.$broadcast('addedCard', card);
				$scope.resetCard();
			});
		}else{
			$scope.param = 'form'
			FlashCardFactory.create($scope.newCard, $scope.param)
			.then(function (card) {
				$rootScope.$broadcast('addedCard', card);
				$scope.resetCard();
			});
		} 
	};

	// // failed attempt at validation
	// setTimeout(function () {
	// 	console.log($scope.cardForm);
	// 	$scope.cardForm.correctAnswer.$validators.noSameText = function () {
	// 		var texts = [];
	// 		return $scope.newCard.answers.reduce(function (isValid, answer) {
	// 			if (!isValid) return false;
	// 			if (texts.indexOf(answer.text) == -1) {
	// 				texts.push(answer.text);
	// 				return true;
	// 			} else return false;
	// 		}, true);
	// 	};
	// }, 100);

	$scope.resetCard();
});