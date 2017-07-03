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
	})
	.controller('LoginController', function($scope, $location, UserAPIService) {
		
		$scope.registrationUser = {};
		var URL = "https://morning-castle-91468.herokuapp.com/";

		$scope.submitForm = function(){
			if ($scope.registrationForm.$valid) {
				$scope.registrationUser.username = $scope.user.username;
				$scope.registrationUser.password = $scope.user.password;

				UserAPIService.registerUser(URL + "accounts/register/", $scope.registrationUser).then(function(results){
					$scope.data = results.data;
					alert("You have Sucessfully Registered.");
				}).catch(function(err) {
					alert("Oops! Something went wrong");
					console.log(err);
				});
			}
		};
	});