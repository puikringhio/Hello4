bookApp.directive('gravatar', function(){
   return{
       restrict: 'AE',
       template: '<img ng-src="{{img}}"  class="{{class}}">',
       link: function(scope, ele, attrs){
           scope.img = "http://placehold.it/50x50";
           //scope.class = "img-circle";
           scope.class = attrs.class;
       }
   } 
});


