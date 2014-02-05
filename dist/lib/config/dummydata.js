'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  // Thing = mongoose.model('Thing'),
  Tool = mongoose.model('Tool');

/**
 * Populate database with sample application data
 */

// Clear old tools, then add in the new ones
Tool.find({}).remove(function(){
  Tool.create({
    name: 'Admin Users',
    info: 'Manage administrative users',
    route: '/adminusers'
  }, {
    name: 'Escrow',
    info: 'View and approve escrows',
    route: '/escrow'
  }, function() {
      console.log('finished populating tools');
    }
  );
});

// //Clear old things, then add things in
// Thing.find({}).remove(function() {
//   Thing.create({
//     name : 'HTML5 Boilerplate',
//     info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
//     awesomeness: 10
//   }, {
//     name : 'AngularJS',
//     info : 'AngularJS is a toolset for building the framework most suited to your application development.',
//     awesomeness: 10
//   }, {
//     name : 'Karma',
//     info : 'Spectacular Test Runner for JavaScript.',
//     awesomeness: 10
//   }, {
//     name : 'Express',
//     info : 'Flexible and minimalist web application framework for node.js.',
//     awesomeness: 10
//   }, {
//     name : 'MongoDB + Mongoose',
//     info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
//     awesomeness: 10
//   }, function() {
//       console.log('finished populating things');
//     }
//   );
// });

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test',
    roles: ['Admin', 'SuperUser']
  }, function() {
      console.log('finished populating users');
    }
  );
});
