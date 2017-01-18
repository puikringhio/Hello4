bookApp.controller('indexCrl', function($scope, $routeParams, contatti, author)
{
    $scope.contatti = contatti.get();
    $scope.autore = author;
});
        
bookApp.controller('contactCrl', function($scope, $routeParams, contatti)
{    
    $scope.id = $routeParams.id;
    $scope.contatto = contatti.find($routeParams.id);
});

