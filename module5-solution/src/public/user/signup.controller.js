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
    console.log("inside submit");
    this.pref.menuItem = MenuService.getMenuItem(this.pref.menunumber);
    console.log(this);

    PrefService.setPref(this.pref);
    reg.completed = true;
  };

}


})();
