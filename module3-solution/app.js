(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      badRemove: '=',
      onRemove: '&'
    }
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

  var menu = this;
  menu.searchItem = "";
  menu.found = [];

  menu.getMatchedMenuItems = function () {
      var promise = MenuSearchService.getMatchedMenuItems(menu.searchItem);

      promise.then(function (response) {
        menu.found = response;
        //console.log(menu.found);
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });
  };

  menu.remove = function(index){
      menu.found.splice(index, 1);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchItem) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {

      var foundItems = [];
      // process result and only keep items that match
      angular.forEach(result.data.menu_items, function(item){

          if (item.description.toLowerCase().indexOf(searchItem) >= 0) {
                  foundItems.push(item);
                  //console.log(item.description);
          }
      });

      // return processed items
      return foundItems;
    });
  };

}


})();
