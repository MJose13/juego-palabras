'use strict';

/**
 * @ngdoc function
 * @name angularPruebasApp.controller:MamaCtrl
 * @description
 * # MamaCtrl
 * Controller of the angularPruebasApp
 */
angular.module('angularPruebasApp')
  .controller('MamaCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.acierto = 'images/happy.png';
    $scope.error = 'images/sad.png';
    $scope.flechaD = 'images/flecha_delante.png';
    $scope.flechaA = 'images/flecha_atras.png';
    $scope.verFlecha = 'ocultar';
    $scope.verSmile = 'ocultar';

    $scope.mostrarResultado = function(result, vis, visSmile){
      $scope.resultado = result;
      $scope.verFlecha = vis;
      $scope.verSmile = visSmile;
    };


  });
