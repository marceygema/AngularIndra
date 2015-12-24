'use strict';

/**
 * @ngdoc function
 * @name ejecticioAngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ejecticioAngularJsApp
 */

angular.module('ejecticioAngularJsApp')
  .controller('MainCtrl', function ($scope) {
    var baseURL='/images/';
    $scope.setInterval=5000;

    $scope.slides = [
    {
    	title:'Hall Gema Stetic',
    	image:baseURL+'slider1.jpg',
    	text: 'Centro de Estetica y Masajes Gema Stetic'
    },
    {
    	title:'Cabina 1 Gema Stetic',
    	image:baseURL+'slider2.jpg',
    	text: 'Centro de Estetica y Masajes Gema Stetic'
    },
    {
    	title:'Cabina 2 Gema Stetic',
    	image:baseURL+'slider3.jpg',
    	text: 'Centro de Estetica y Masajes Gema Stetic'
    },
    {
    	title:'Sala de Espera Gema Stetic',
    	image:baseURL+'slider4.jpg',
    	text: 'Centro de Estetica y Masajes Gema Stetic'
    },
    {
        title:'Cabina 3 Gema Stetic',
        image:baseURL+'slider5.jpg',
        text: 'Centro de Estetica y Masajes Gema Stetic'
    }

    ];

  });
