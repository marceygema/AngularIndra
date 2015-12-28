'use strict';

/**
 * @ngdoc overview
 * @name ejecticioAngularJsApp
 * @description
 * # ejecticioAngularJsApp
 *
 * Main module of the application.
 */


// app.js
var routerApp = angular.module('ejecticioAngularJsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngGrid',
    'ui.router'
  ]);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        
        .state('empresa', {
            url: '/empresa',
            templateUrl: 'views/empresa.html',
            controller: 'EmpresaCtrl',
            controllerAs: 'empresa'       
        })

         .state('contacto', {
            url: '/contacto',
            templateUrl: 'views/contacto.html',
            controller: 'ContactoCtrl',
            controllerAs: 'contacto'       
        })

          .state('servicios', {
            url: '/servicios',
            templateUrl: 'views/servicios.html',
            controller: 'ServiciosCtrl',
            controllerAs: 'servicios'       
        })

         .state('localizacion', {
            url: '/localizacion',
            templateUrl: 'views/localizacion.html',
            controller: 'LocalizacionCtrl',
            controllerAs: 'localizacion'       
        });
        
});


