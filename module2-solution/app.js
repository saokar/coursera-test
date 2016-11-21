(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getBuyItems();

  list.itemName = "";
  list.itemQuantity = "";

  list.addtoBoughtList = function (itemIndex) {
    ShoppingListCheckOffService.addtoBoughtList(itemIndex);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getBoughtItems();

  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {
    ShoppingListCheckOffService.addBoughtItem(list.itemName, list.itemQuantity);
  };
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of buy items
  var buyItems = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Chips",
      quantity: "10"
    }
  ];


  service.addBuyItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    buyItems.push(item);
  };

  service.removeBuyItem = function (itemIdex) {
    buyItems.splice(itemIdex, 1);
  };

  service.getBuyItems = function () {
    return buyItems;
  };

  // List of bought items
  var boughtItems = [];

  service.addtoBoughtList = function (itemIndex) {
    var itemName = buyItems[itemIndex].name;
    var quantity = buyItems[itemIndex].quantity;
    var item = {
      name: itemName,
      quantity: quantity
    };
    boughtItems.push(item);
    service.removeBuyItem(itemIndex);
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

}


})();
