angular.module('myChoice', [])

angular.module('myChoice').controller('mainController', ['$scope', '$http', function($scope, $http){

	$scope.greeting = "Word to yo motha"
	$http.get('/countries')
		.then(function(returnData){
			$scope.countries = returnData.data
		}) 
}])
