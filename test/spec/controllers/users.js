'use strict';

describe('Controller: UsersCtrl', function () {

  // load the controller's module
  beforeEach(module('adminwebApp'));

  var UsersCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/users')
      .respond(['test@test.com', 'me@example.com']);
    scope = $rootScope.$new();
    UsersCtrl = $controller('UsersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of users to the scope', function () {
    expect(scope.users).toBeUndefined();
    $httpBackend.flush();
    expect(scope.users.length).toBe(2);
  });
});
