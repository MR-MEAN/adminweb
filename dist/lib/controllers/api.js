'use strict';

var mongoose = require('mongoose'),
    // Thing = mongoose.model('Thing'),
    Tool = mongoose.model('Tool');

/**
 * Get list of tools
 */
exports.tools = function(req, res) {
  return Tool.find(function (err, tools) {
    if (!err) {
      console.log(' returning tools!');
      return res.json(tools);
    } else {
      return res.send(err);
    }
  });
};

// /**
//  * Get awesome things
//  */
// exports.awesomeThings = function(req, res) {
//   return Thing.find(function (err, things) {
//     if (!err) {
//       return res.json(things);
//     } else {
//       return res.send(err);
//     }
//   });
// };