//funziona solo nella parziale ..partials/index.htnl
bookApp.controller('indexCrl', function($scope, $routeParams, contatti, author)
{
    $scope.contatti = contatti.get();
    //questo author è un valore scritto dentro services.js ed è un componente value richiamabile ovunque
    $scope.autore = author;    
    
});

//funziona solo nella parziale ..partials/contact.html
bookApp.controller('contactCrl', function($scope, $routeParams, contatti)
{    
    $scope.id = $routeParams.id;
    $scope.contatto = contatti.find($routeParams.id);
});

//funziona nell'intera app perché richiamato nella radice index.html
bookApp.controller('appCtl', function($scope, $location)
{    
    $scope.startSearch = function(){
        $location.path('/');
    };   
    
    $scope.pageClass = function(path){
        return (path == $location.path()) ? 'active' : '';
    }

});


bookApp.controller('addCtr', function($scope, contatti)
{    
    $scope.myTxt = "You have not yet added this contact";
    
    $scope.submit = function(){
        $scope.myTxt = "You added this contact!";
        
        contatti.create($scope.contatto);
        $scope.contatto = null;
        $scope.added = true;
    }
});

