angular.module('bookWebApp', ['ngRoute'])
        .config(function($routeProvider){
            $routeProvider.when('/', {
                controller: 'indexCrl',
                templateUrl: 'partials/index.html'
            })
                    .when('/add-contact',{
                        controller: 'addCtr',
                        templateUrl: 'partials/add.html'
            })
                    .when('/contact/:id',{
                        controller: 'contactCrl',
                        templateUrl: 'partials/contact.html'
            })
            ;  
        })
        
        .controller('indexCrl', function($scope)
        {
            
        })
        
        .controller('addCtr', function($scope)
        {
            
        })
        
        .controller('contactCrl', function($scope, $routeParams)
        {
            console.log($routeParams);
            $scope.this_id = $routeParams.id;
        })
        ;
        
        

