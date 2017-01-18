bookApp.controller('indexCrl', function($scope, contatti, author)
{
    $scope.contatti = contatti.get();
    $scope.autore = author;
});

bookApp.value('author','andrea');
        
bookApp.controller('contactCrl', function($scope, $routeParams, contatti)
{    
    $scope.id = $routeParams.id;
    $scope.contatto = contatti.find($routeParams.id);
});

bookApp.factory('contatti',function(){
   
    var contatti = [
        {
            name: 'qwe',
            phone: '1111111',
            email: 'asd@asdasd.it'
        },
        {
            name: 'rty',
            phone: '222222',
            email: 'ewq@ewq.it'
        },
        {
            name: 'asdasd',
            phone: '44444444',
            email: 'uio@ewq.it'
        },
        {
            name: 'fghfgh',
            phone: '5555555',
            email: 'uyt@ewq.it'
        },
        {
            name: 'zxczxc',
            phone: '66666666',
            email: 'hg@asdasd.it'
        }
    ];
    
    return {
        get: function(){
            return contatti;
        },
        find: function(index){
            return contatti[index];
        }
    }
    
});




