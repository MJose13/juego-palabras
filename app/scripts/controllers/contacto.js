'use strict';

/**
 * @ngdoc function
 * @name angularPruebasApp.controller:ContactoCtrl
 * @description
 * # ContactoCtrl
 * Controller of the angularPruebasApp
 */
angular.module('angularPruebasApp')
  .controller('ContactoCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.prueba1="Hola que ase";
  });
