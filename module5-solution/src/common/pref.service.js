(function () {
"use strict";

angular.module('common')
.service('PrefService', PrefService);


PrefService.$inject = [];
function PrefService() {
  var service = this;
  var pref = {};

  service.getPref = function () {
    console.log("came here getPref");
    console.log(this.pref);
    return this.pref;
  };

  service.setPref = function (pref) {
    console.log("came here setPref");
    this.pref = pref;
    console.log(this.pref);
  };
}



})();
