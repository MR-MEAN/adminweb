'use strict';

angular.module('adminwebApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
