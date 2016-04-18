(function() {
	'use strict';

	var myApp = angular.module('myApp', [

		//Angular modules
		'ngRoute',

		//Third party modules
		'firebase',

		//Custom modules
		'app.landing',
		'app.waitlist'



	]);

	myApp.controller('MainPageController', ['$scope', function($scope) {

		$scope.welcome = "This is the home page";

	}]);


})();