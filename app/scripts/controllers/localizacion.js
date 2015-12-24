'use strict';

/**
 * @ngdoc function
 * @name ejecticioAngularJsApp.controller:LocalizacionCtrl
 * @description
 * # LocalizacionCtrl
 * Controller of the ejecticioAngularJsApp
 */
angular.module('ejecticioAngularJsApp')
  .controller('LocalizacionCtrl', function($http) {
    var vm = this;
  
  var URL = 'http://api.openweathermap.org/data/2.5/forecast/weather';
  //http://api.openweathermap.org/data/2.5/weather?zip=37001,es&appid=2de143494c0b295cca9337e1e96b00e0
  
  var request = {
    method: 'GET',
    url: URL,
    params: {
      q: 'Salamanca',
      mode: 'json',
      units: 'metric',
      cnt: '1',
      appid: '2de143494c0b295cca9337e1e96b00e0'
    }
  };
  
  $http(request)
    .then(function(response) {
      vm.data = response.data;
    }).
    catch(function(response) {
      vm.data = response.data;
    });






  });

