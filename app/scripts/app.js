'use strict';

/**
 * @ngdoc overview
 * @name ejecticioAngularJsApp
 * @description
 * # ejecticioAngularJsApp
 *
 * Main module of the application.
 */
angular
  .module('ejecticioAngularJsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngGrid'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/empresa', {
        templateUrl: 'views/empresa.html',
        controller: 'EmpresaCtrl',
        controllerAs: 'empresa'
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
      .when('/localizacion', {
        templateUrl: 'views/localizacion.html',
        controller: 'LocalizacionCtrl',
        controllerAs: 'localizacion'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
