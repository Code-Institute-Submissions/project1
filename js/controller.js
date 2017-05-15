angular.module('RouteControllers', [])
	.controller('BookingController', function($scope){

		$scope.clientBooking = {};

		$scope.submitForm = function(){
			
		if ($scope.bookingForm.$valid){
			$scope.clientBooking.fname = $scope.client.fname;
			$scope.clientBooking.sname = $scope.client.sname;
			$scope.clientBooking.email = $scope.client.email;
			$scope.clientBooking.phonenum = $scope.client.phonenum;
			$scope.clientBooking.bookingdate = $scope.client.bookingdate;
			alert('Information submitted sucessfully!');
		}

		console.log($scope.clientBooking.fname + " " + $scope.clientBooking.sname + " " + 
						$scope.clientBooking.email + " " + $scope.clientBooking.phonenum + " " + 
						$scope.clientBooking.bookingdate);
		};
	});