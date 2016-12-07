(function () {
"use strict";

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/templates/categories.template.html',
  controller: 'CategoriesController as categoriesCtrl',
  bindings: {
    items: '<'
  }
});


})();
