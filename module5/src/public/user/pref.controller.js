(function () {
"use strict";

angular.module('public')
.controller('PrefController', PrefController);

// PrefController.$inject = ['pref'];
// function PrefController(pref) {
//   var $ctrl = this;
//   $ctrl.pref = pref;
//   console.log(this.pref);
//
// }

PrefController.$inject = ['PrefService','MenuService'];
function PrefController(PrefService,MenuService) {
  console.log("in prefcontroller");
  var $ctrl = this;
  $ctrl.pref = PrefService.getPref();
  //$ctrl.menuItem = MenuService.getMenuItem($ctrl.pref.menunumber);
  console.log($ctrl.pref);
  console.log("out prefcontroller");
}

})();
