app.controller('AddCard', function ($scope, FlashCardFactory, $rootScope, $stateParams, $state) {
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

	$scope.setCorrect = function (givenAnswer, card) {
		card.answers.forEach(function (a) {
			a.correct = false;
		});
		givenAnswer.correct = true;
	};

	$scope.postFlashCard = function (givenCard) {
		$scope.newCard = givenCard;
		if($stateParams.flashCardId){
			FlashCardFactory.update($scope.newCard, $stateParams.flashCardId)
			.then(function (card) {
				$rootScope.$broadcast('addedCard', card);
				$scope.resetCard();
				$state.go('flashCard');
			});
		}else{
			FlashCardFactory.create($scope.newCard)
			.then(function (card) {
				$rootScope.$broadcast('addedCard', card);
				$scope.resetCard();
				$state.go('flashCard');
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