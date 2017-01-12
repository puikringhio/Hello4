var app = angular.module('myApp', []);

app.controller('myApp', function($scope, hexafy) {
  $scope.hex = hexafy.myFunc(255555);
});
app.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});
