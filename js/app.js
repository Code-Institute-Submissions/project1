angular.module('BookingApp', ['ngRoute', 'RouteControllers']);

angular.module('BookingApp').config(function($locationProvider, $routeProvider){
	$locationProvider.html5Mode(true);



	$routeProvider
		.when ('/', {
		templateUrl: 'templates/Home.html',
		controller: ''
	})
		.when ('/templates/Booking', {
		templateUrl: 'templates/Booking.html',
		controller: 'BookingController'
	})
		.when ('/templates/Photos', {
		templateUrl: 'templates/Photos.html',
		controller: ''
	})
		.when ('/templates/Performances', {
		templateUrl: 'templates/Performances.html',
		controller: ''
	});
});