'use strict';

/**
 * @ngdoc overview
 * @name angularPruebasApp
 * @description
 * # angularPruebasApp
 *
 * Main module of the application.
 */
angular
  .module('angularPruebasApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'ContactoCtrl',
        controllerAs: 'contacto'
      })
      .when('/servicios', {
        templateUrl: 'views/servicios.html',
        controller: 'ServiciosCtrl',
        controllerAs: 'servicios'
      })
      .when('/pato', {
        templateUrl: 'views/pato.html',
        controller: 'PatoCtrl',
        controllerAs: 'pato'
      })
      .when('/papa', {
        templateUrl: 'views/papa.html',
        controller: 'PapaCtrl',
        controllerAs: 'papa'
      })
      .when('/mama', {
        templateUrl: 'views/mama.html',
        controller: 'MamaCtrl',
        controllerAs: 'mama'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
