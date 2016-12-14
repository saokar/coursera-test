(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['PrefService','MenuService','ApiPath'];
function SignupController(PrefService,MenuService) {
  var reg = this;
  reg.completed = false;
  reg.basePath = 'https://infinite-savannah-29846.herokuapp.com';

  reg.submit = function () {
    this.pref.menuItem = MenuService.getMenuItem(this.pref.menunumber);
    PrefService.setPref(this.pref);
    reg.completed = true;
  };

}


})();
