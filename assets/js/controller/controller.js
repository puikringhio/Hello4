app.controller('AppCtl', function($scope) {
    
    $scope.errorBox = true;
    $scope.centerBox = false;
    
    $scope.Unnome = "John";
    
    
    $scope.clickHandler = function(){
        window.alert("clicked!");
    }
       
    
    $scope.hoverHandler = function(){
        //window.alert("hover!");
        $scope.isHidden = !$scope.isHidden
    }
    
    
    $scope.contacts = [
        {
            name: 'jon',
            phone: '1111111',
            email: 'asd@asdasd.it'
        },
        {
            name: 'jssaon',
            phone: '222222',
            email: 'ewq@ewq.it'
        },
        {
            name: 'asd',
            phone: '44444444',
            email: 'uio@ewq.it'
        },
        {
            name: 'qwe',
            phone: '5555555',
            email: 'uyt@ewq.it'
        },
        {
            name: 'jdfg',
            phone: '66666666',
            email: 'hg@asdasd.it'
        }
    ];
    
    $scope.styleDemo = function(){
        if(!$scope.styler){
            return;
        }
        
        return{
            background: 'red',
            fontWeight: 'bold'
        }
    }
    
});

