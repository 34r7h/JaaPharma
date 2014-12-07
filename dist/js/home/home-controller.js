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

  function HomeCtrl() {
    var vm = this;
    vm.ctrlName = 'HomeCtrl';
    vm.projectRequirements = [
      {name: 'app logo', type: 'image', data:{url: 'string', alt: 'string'}},
      {name: 'lab code', type: 'string'},
      {name: 'rep code', type: 'string'},
      {name: 'zone, region, province', type: 'string'},
      {name: 'lab logo', type: 'image', data:{url: 'string', alt: 'string'}},
      {name: 'city list', type: 'array', data:{name: 'string'}},
      {name: 'municipality list', type: 'array', data:{name: 'string'}},
      {name: 'doctor list', type: 'array', data:{
        name: 'string',
        address:'string',
        phone:'string',
        public:'boolean',
        specialty:'string'}
      },
      {name: 'map tracking with date and time', type: 'function', methods: [
        {name: 'mapTrack', args:['location', 'user'], actions:['gather location data', 'push to server']}]
      },
      {name: 'products name list', type: 'array', data:{name: 'string'}},
      {name: 'products name and form list', type: 'array', data:{name: 'string'}},
      {name: 'comments and request notes', type: 'array', data:{name: 'string'}},
      {name: 'number of samples given', type: 'array', data:{name: 'string'}},
      {name: 'save report and email', type: 'function', methods: [
        {name: 'sendReport', args:['report', 'email'], actions:['gather report data', 'push to server']}]
      },
      {name: 'statistical analytics', type: 'function', methods: [
        {name: 'sendAnalytics', args:['userActions', 'email'], actions:['gather user actions', 'push to server']}]}
    ];
  }

})();
