angular.module("UserService", [])
	.factory("UserAPIService", function($http){

		UserAPIService = {
			callAPI: function(url, data){
				return $http.post(url, data)
			}
		}
		return UserAPIService;
	});
angular.module("BookingForm", [])
	.factory("BookingAPIService", function($http){
		BookingAPIService = {
			getTodos: function(url, data, token){
				header = "Authorization: JWT " + token;
				return $http.get(url, {params: {"First Name": data}}, header);
			},
			createTodo: function(url, data, token) {
				header = "Authorization: JWT " + token;
				return $http.post(url, data, header);
			},
			deleteTodo: function(url, token){
				header = "Authorization: JWT " + token;
				return $http.delete(url, token);
			}
		}
		return BookingAPIService;
	});