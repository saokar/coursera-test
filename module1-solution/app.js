(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.items = "";
  $scope.checkItems = function () {
    //var arr = $scope.items.trim().split(",");
    var arr = $scope.items.split (',').filter(function(el) {return el.length != 0});
    if($scope.items.length == 0 ) {
       $scope.message = "Please enter data first";
    }
    else if ( arr.length <= 3) {
      $scope.message = "Enjoy!";
    }
    else {
      $scope.message = "Too much!" ;
    }

  };
});

})();
