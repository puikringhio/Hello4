app.controller('AppCtlFilter', function($scope, $filter) {

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
    
    
    console.log($filter('json')($scope.contacts));
    $scope.myJsonFiltered = $filter('json')($scope.contacts);
    
});

