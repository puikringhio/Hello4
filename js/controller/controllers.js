//funziona solo nella parziale ..partials/index.htnl
bookApp.controller('indexCrl', function($scope, $routeParams, contact_service, author)
{
    $scope.index_contacts = contact_service.get();
    //questo author è un valore scritto dentro services.js ed è un componente value richiamabile ovunque
    $scope.autore = author;    
    
});

//funziona solo nella parziale ..partials/contact.html
bookApp.controller('contactCrl', function($scope, $routeParams, contact_service)
{    
    $scope.id = $routeParams.id;
    $scope.contact = contact_service.find($routeParams.id);
    
    $scope.editor = {
      showing: false,
      value: $scope.contact.name
    };
    
    $scope.toggleEditor = function(){
        $scope.editor.showing = !$scope.editor.showing;
        $scope.field = ($scope.field) ? $scope.field : 'text';
    };
    
    $scope.save = function(){
        $scope.contact.name = $scope.editor.value;
        $scope.toggleEditor();
    };
    
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


bookApp.controller('addCtr', function($scope, contact_service)
{    
    $scope.myTxt = "You have not yet added this contact";
    
    $scope.submit = function(){
        $scope.myTxt = "You added this contact!";
        
        contact_service.create($scope.add_comntact);
        $scope.add_comntact = null;
        $scope.added = true;
    }
});

