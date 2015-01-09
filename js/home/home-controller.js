(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($firebase, Firebase, $scope) {
    var vm = this,
      dataURL = 'http://tezt.firebaseio.com/jaapharma',
      database  = new Firebase(dataURL);
    vm.data = $firebase(database);
    vm.sync = vm.data.$asObject();
    setTimeout(function () {
      //vm.projectRequirements = vm.sync.requirements;
      //console.log(vm.projectRequirements);
      vm.sync.$bindTo($scope, 'reqs');
    }, 0);
    console.log('vm.sync', vm.sync);
    vm.ctrlName = 'HomeCtrl';

  }

})();
