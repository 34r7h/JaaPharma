(function () {
  'use strict';

  /* @ngdoc object
   * @name jaapharma
   * @requires $urlRouterProvider
   *
   * @description
   *
   */
  angular
    .module('jaapharma', [
      'ui.router',
      'mm.foundation',
      'home'
    ]);

  angular
    .module('jaapharma')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }

})();
