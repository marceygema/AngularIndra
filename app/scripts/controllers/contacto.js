'use strict';

/**
 * @ngdoc function
 * @name ejecticioAngularJsApp.controller:ContactoCtrl
 * @description
 * # ContactoCtrl
 * Controller of the ejecticioAngularJsApp
 */
angular.module('ejecticioAngularJsApp')
      .controller('ContactoCtrl', ['$scope', function($scope) {
        $scope.user = {};
 
        $scope.update = function() {
          console.log($scope.user);
        };
 
        $scope.reset = function(form) {
          $scope.user = {};
          if (form) {
            form.$setPristine();
            form.$setUntouched();
          }
        };
 
        $scope.reset();
      }]);
