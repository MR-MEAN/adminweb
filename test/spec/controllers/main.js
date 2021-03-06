'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('adminwebApp'));

  var MainCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/tools')
      .respond(['Finance', 'Escrow']);
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of tools to the scope', function () {
    expect(scope.tools).toBeUndefined();
    $httpBackend.flush();
    expect(scope.tools.length).toBe(2);
  });
});
