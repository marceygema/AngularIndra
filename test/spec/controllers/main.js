/*describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ejecticioAngularJsApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });
});*/



describe('Controller: ServiciosCtrl', function () {
  'use strict';

  // load the controller's module
  beforeEach(module('simpleHttpBackendApp'));

  var $http,
    $httpBackend,
    MainCtrl,
    scope;

  beforeEach(inject(function (_$http_, _$httpBackend_) {
    $http = _$http_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('ServiciosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('Debe obtener todos los servicios del  json', function () {

    var response = [{'tipo':'Depilacion', 'nombre':'Piernas enteras', 'precio':'12,50'},{'tipo':'Depilacion', 'nombre':'Medias piernas', 'precio':'6,50'},{'tipo':'Depilacion', 'nombre':'Espalda/pecho', 'precio':'12,50'},{ 'tipo':'Depilacion', 'nombre':'Ingles/axilas', 'precio':'3,50'},{ 'tipo':'Depilacion', 'nombre':'Cejas', 'precio':'3,50'},{ 'tipo':'Tratamiento', 'nombre':'Anticeluliticos', 'precio':'60'},{ 'tipo':'Tratamiento', 'nombre':'Reafirmantes', 'precio':'30'},{ 'tipo':'Tratamiento', 'nombre':'Antiedad', 'precio':'40'},{ 'tipo':'Tratamiento', 'nombre':'Despigmentante', 'precio':'30'},{ 'tipo':'Masaje', 'nombre':'15 minutos', 'precio':'10'},{ 'tipo':'Masaje', 'nombre':'30 minutos', 'precio':'15'},{ 'tipo':'Masaje', 'nombre':'1 hora', 'precio':'24,50'}];

    $httpBackend.whenGET(scope.url).respond(response);

    scope.getJson(); // metodo para probar el controlador

    $httpBackend.flush(); // emulamos la respuesta del servidor

    expect(scope.values[0]).toEqual('Depilacion Piernas enteras 12,50');
    expect(scope.values[1]).toEqual('Depilacion Medias piernas 6,50');
    expect(scope.values[2]).toEqual('Depilacion Espalda/pecho 12,50');
  });

});
