var bookApp = angular.module('bookWebApp', ['ngRoute'])
        
        .config(function($routeProvider, $locationProvider){

            $routeProvider
            .when('/', {
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
            .otherwise({
                redirectTo: '/'
            });  
            
            //locationProvider.html5Mode(true);
            
            
        });
        

        
        

