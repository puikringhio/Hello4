bookApp.controller('indexCrl', function($scope)
{

});
        
bookApp.controller('addCtr', function($scope)
{

});
        
bookApp.controller('contactCrl', function($scope, $routeParams)
{
    console.log($routeParams);
    $scope.this_id = $routeParams.id;
});



