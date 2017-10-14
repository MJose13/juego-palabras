'use strict';

/**
 * @ngdoc function
 * @name angularPruebasApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularPruebasApp
 */
angular.module('angularPruebasApp')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.prueba1= "hola como estás";
  });
