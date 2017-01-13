app.controller('AppCtl', function($scope) {
    $scope.clickHandler = function(){
        window.alert("clicked!");
    }
    $scope.hoverHandler = function(){
        window.alert("hover!");
    }
});

