bookApp.controller('indexCrl', function($scope)
{
    $scope.contacts = [
        {
            name: 'xxxxxxxxxxxxxxxxxxxxxxx',
            phone: '1111111',
            email: 'asd@asdasd.it'
        },
        {
            name: 'ssssssssssssssssssssssssssssssssss',
            phone: '222222',
            email: 'ewq@ewq.it'
        },
        {
            name: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            phone: '44444444',
            email: 'uio@ewq.it'
        },
        {
            name: 'rrrrrrrrrrrrrrrrrrrrrrrrr',
            phone: '5555555',
            email: 'uyt@ewq.it'
        },
        {
            name: 'ttttttttttttttttttttttttttttttttttttt',
            phone: '66666666',
            email: 'hg@asdasd.it'
        }
    ];
});
        
bookApp.controller('addCtr', function($scope)
{

});
        
bookApp.controller('contactCrl', function($scope, $routeParams)
{
    console.log($routeParams);
    $scope.name = $routeParams.name;
    $scope.phone = $routeParams.phone;
    $scope.email = $routeParams.email;
});



