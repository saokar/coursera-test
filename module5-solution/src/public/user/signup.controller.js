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
    if(this.pref.menuItem.$$state.value.headers.status == "500") {
      console.log("short name null");
    }
    else {
       console.log("short name value");
    }
    console.log("outside submit");

    PrefService.setPref(this.pref);
    reg.completed = true;
  };

}


})();
