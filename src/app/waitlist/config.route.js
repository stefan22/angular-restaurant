(function() {

	'use strict';

	angular.module('app.waitlist')
		   .config(waitlistRoute);


	waitlistRoute.$inject = ['$routeProvider'];	   


	function waitlistRoute($routeProvider) {
		$routeProvider.when('/waitlist', {
			templateUrl: 'app/waitlist/waitlist.html'
		});
	}	   


})();