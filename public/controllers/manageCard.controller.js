app.controller('ManageCardCtrl', function ($scope, FlashCardFactory, $stateParams) {
	FlashCardFactory.getById($stateParams.flashCardId)
		.then(function(card){
			$scope.flashCard = card;
			console.log("flashCard at id:", $scope.flashCard);
		})
		.then(null, function(err){
			return next(err);
		});
	
})