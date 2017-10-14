'use strict';

/**
 * @ngdoc function
 * @name angularPruebasApp.controller:ServiciosCtrl
 * @description
 * # ServiciosCtrl
 * Controller of the angularPruebasApp
 */
angular.module('angularPruebasApp')
  .controller('ServiciosCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.numero1= '';
    $scope.numero2= '';
    $scope.suma= '';
  });
