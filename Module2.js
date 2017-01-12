var bap = angular.module('bap', []);

bap.controller('bap_controller', function($scope){
	$scope.n = "prova2!";
    });
	
	
bap.controller('bap_controller2', function($scope){
	$scope.n = "prova3!";
    });
	
	
	
	
	
	
var tat = angular.module('tat', []);
tat.controller('bap_controller3', function($scope, $http) {
  $http.get("http://www.gazzetta.it/").then(function (response) {
      $scope.myWelcome = response.data;
  });
});	