var app = angular.module('FlashCardApp', ['ui.router']);

app.config(function ($stateProvider){
	$stateProvider
		.state('flashCard', {
			url: '/',
			controller: 'MainCtrl',
			templateUrl: '/templates/flashCardMain.html'
		})
		.state('newFlashCardForm', {
			url: '/form',
			controller: 'AddCard', 
			templateUrl: '/templates/addFlashCard.html'
			/*template: '<edit-flash-card card="newCard"></edit-flash-card>'*/
		})
		.state('statistics', {
			url: '/stats',
			controller: 'StatsController',
			templateUrl: '/templates/stats.html'
		})
		.state('manageCard', {
			url: '/:flashCardId',
			controller: 'ManageCardCtrl',
			templateUrl: '/templates/ManageCardForm.html'
		})
		.state('manageCard.edit', {
			url: '/edit',
			controller: 'ManageCardCtrl',
			templateUrl: '/templates/ManageCardForm.html'
		})
		.state('manageCard.delete', {
			url: '/delete',
			controller: 'ManageCardCtrl',
			templateUrl: '/templates/ManageCardForm.html'
		})
})