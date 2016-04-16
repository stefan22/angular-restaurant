(function() {

	'use strict';

	angular.module('app.landing')
		   .config(landingRoute);


	landingRoute.$inject = ['$routeProvider'];	   


	function landingRoute($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'app/landing/landing.html'
		});
	}	   


})();