angular.element(document).ready(function() 
{
  var myDiv1 = document.getElementById("myDiv1");
  angular.bootstrap(myDiv1, ["myApp"]);

  var myDiv2 = document.getElementById("myDiv2");
  angular.bootstrap(myDiv2, ["bap"]);
  
  var myDiv3 = document.getElementById("myDiv3");
  angular.bootstrap(myDiv3, ["tat"]);
});