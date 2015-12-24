'use strict';
/**
 * @ngdoc function
 * @name ejecticioAngularJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ejecticioAngularJsApp
 */
angular.module('ejecticioAngularJsApp')
  .controller('ServiciosCtrl', function ($scope,$http) {
    $http.get('http://localhost:9000/tarifas.json').success(function(data){
    $scope.tarifas =data;
});
    $scope.gridOptions = { 
    data: 'tarifas',
    showGroupPanel: true,
    enableCellSelection: true,
    enableRowSelection: false,
    enableCellEdit: true,
    columnDefs: [
        {field:'tipo', displayName:'Tipo de Servicio'}, 
        {field:'nombre', displayName:'Nombre Del Servicio'},
        {field:'precio', displayName:'Precio'}]
};
  });