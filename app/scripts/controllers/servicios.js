'use strict';
/**
 * @ngdoc function
 * @name ejecticioAngularJsApp.controller:ServiciosCtrl
 * @description
 * # ServiciosCtrl
 * Controller of the ejecticioAngularJsApp
 */
angular.module('ejecticioAngularJsApp')
  .controller('ServiciosCtrl', ['$scope', 'rtmFactory',function($scope, rtmFactory) {

    //llamada al servicio que nos devuelve las tarifas
    rtmFactory.getTarifas().success(function(data){
            $scope.tarifas =data;
        }
    );
    //inicializamos la informacion de los servicios minimos
    $scope.desde = 3.50;

    $scope.gridOptions = { 
    data: 'tarifas',
    showGroupPanel: true,
    enableCellSelection: true,
    enableRowSelection: false,
    enableCellEdit: true,
    columnDefs: [
        {field:'tipo' , displayName:'Tipo de Servicio'}, 
        {field:'nombre', displayName:'Nombre Del Servicio'},
        {field:'precio', displayName:'Precio'}]
  };
  }]).filter('formatoMoneda', function(){
  return function(input, symbol, place){
    if(isNaN(input)){
      return input;
    } else {
       symbol = symbol || '€';
       place = place === undefined ? true : place;
      if(place === true){
        return symbol + input;
      } else{
        return input + symbol;
      }
    }
  };
});