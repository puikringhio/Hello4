var tat = angular.module('tat', []);
tat.controller('bap_controller3', function($scope, $http) {
  $http.get("http://www.gazzetta.it/").then(function (response) {
      $scope.myWelcome = response.data;
  });
});	