app.directive('editFlashCard', function () {
	return {
		restrict:'E',
		scope: {
			card: "="
		},
		templateUrl: "/directives/flashCard/flashCardForm.html"
	}

})