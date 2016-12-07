(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function () {
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    //console.log("getting data");
    return promise;
  };

  service.getItemsForCategory = function(categoryShortName) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      }).then(function(response){
        return response.data.menu_items;
      });
    }

}

})();
