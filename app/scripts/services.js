'use strict';
//script para insertar los servicios
angular.module('ejecticioAngularJsApp.services', []).
  value('version', '0.1')
   .factory('rtmFactory', ['$http',function($http) {
    return {
        getTarifas:function(){
            return $http.get('tarifas.json');
        }
    };
}]);




