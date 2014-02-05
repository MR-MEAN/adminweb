'use strict';

angular.module('adminwebApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/tools').success(function(tools) {
      $scope.tools = tools;
    });
  });
