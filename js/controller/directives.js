bookApp.directive('gravatar', function(){
   return{
       restrict: 'AE',
       template: '<img ng-src="{{img}}"  class="{{class}}">',
       //il metodo link viene eseguito dopo che l'applicazione abbia finito di essere compilata. 
       //in genere viene chiamto per direttive wrapper e quando serve che tutto sia caricato prima di 
       //eseguire il contenuto della direttiva. In questo caso non era indispensabile, ma era per vedere
       //le diferenze con il metodo controller esposto nella ddirettiva 'editable'
       link: function(scope, ele, attrs){
           scope.img = "http://placehold.it/50x50";
           //scope.class = "img-circle";
           scope.class = attrs.class;
       }
   } 
});

bookApp.directive('editable', function(){
    return{
        restrict: 'AE',
        templateUrl: '/assets/partials/editable.html',
        scope: {
            // = leghiamo il modello dello scope genitore allo scope della direttiva
            //in questo caso non dobbiamo quinddi utilizzare la sintassi {{}} e possiamo del 
            //binding dei dati bidirezionale
            value: '=editable',
            //se antemponiamo il simbolo @ la direttiva utilizzerà il valore letterale dell'attributo
            field: '@fieldType'
        },
        //questo controller è situato dentro la direttiva, ma fuzione esattamente come un classico controller
        //a differenza ddi link viene eseguito prima che l'applicazione sia completamente compilata
        controller: function($scope){
            
        }
    };
});



