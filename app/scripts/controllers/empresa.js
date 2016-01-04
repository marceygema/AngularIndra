'use strict';

/**
 * @ngdoc function
 * @name ejecticioAngularJsApp.controller:EmpresaCtrl
 * @description
 * # EmpresaCtrl
 * Controller of the ejecticioAngularJsApp
 */
angular.module('ejecticioAngularJsApp')
  .controller('EmpresaCtrl', function () {
    
  })
  .directive('acTitulo',[function() {
  	var directiveDefinitionObject ={
    restrict:'E',
    replace : true,
    template:'<p>{{texto}}</p>',
    scope:{
      texto:'@'
    },
    controller: function($scope){
      $scope.texto = 'En Gema Stetic puedes encontrar todo lo necesario para cuidarte:';
    },
    link:function(scope, iElement, iAttrs) {
        var htmlColor;
        switch (iAttrs.color) {
            case 'rojo':
                htmlColor='#d50357';
                break;
            case 'verde':
                htmlColor='#00FF00';
                break;
            case 'azul':
                htmlColor='#0000FF';
                break;
            default:
                htmlColor='#000000';
                break;
        }
        iElement.css('color',htmlColor);   
    }
  };
  return directiveDefinitionObject;
}]);

