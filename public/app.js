var app = angular.module('FlashCardApp', ['ui.router']);

app.config(function ($stateProvider){
	$stateProvider
		.state('flashCard', {
			url: '/',
			controller: 'MainCtrl',
			templateUrl: '/directives/flashCard/flashCardMain.html'
		})
		.state('newFlashCardForm', {
			url: '/form',
			controller: 'AddCard', 
			templateUrl: '/directives/flashCard/addFlashCard.html'
		})
		.state('statistics', {
			url: '/stats',
			controller: 'StatsController',
			templateUrl: '/directives/flashCard/stats.html'
		})
		.state('manageCard', {
			url: '/:flashCardId',
			controller: 'ManageCardCtrl',
			templateUrl: '/directives/flashCard/ManageCardForm.html'
		})
		.state('manageCard.edit', {
			url: '/:flashCardId/edit',
			controller: 'ManageCardCtrl',
			templateUrl: '/directives/flashCard/stats.html'
		})
		.state('manageCard.delete', {
			url: '/:flashCardId/delete',
			controller: 'ManageCardCtrl',
			templateUrl: '/directives/flashCard/stats.html'
		})
})