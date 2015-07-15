app.controller('ManageCardCtrl', function ($scope, FlashCardFactory, $stateParams, $state) {
	FlashCardFactory.getById($stateParams.flashCardId)
		.then(function(card){
			$scope.flashCard = card;
			console.log("flashCard at id:", $scope.flashCard);
		})
		.then(null, function(err){
			return next(err);
		});
	$scope.buttonClicked = false;

	$scope.removeCard = function () {
		$scope.buttonClicked = true;
		if(confirm('Are you sure you want to delete this card?')){
			FlashCardFactory.remove($stateParams.flashCardId)
			$state.go('flashCard');
		}else return;
	}
})