app.controller('AppCtl', function($scope) {
    
    $scope.errorBox = true;
    $scope.centerBox = false;
    
    $scope.nome = "John";
    
    
    $scope.clickHandler = function(){
        window.alert("clicked!");
    }
    
    
    
    
    $scope.hoverHandler = function(){
        //window.alert("hover!");
        $scope.isHidden = !$scope.isHidden
    }
    
    
    $scope.contacts = [
        {
            name: 'jon doe',
            phone: '131312123',
            email: 'asd@asdasd.it'
        },
        {
            name: 'jssaon desdds',
            phone: '12121221',
            email: 'ewq@ewq.it'
        }
    ];
    
    $scope.background = "red";
    
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

