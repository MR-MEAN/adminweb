'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Tool Schema
 */
var ToolSchema = new Schema({
	name: String,
	info: String,
	route: String
});

mongoose.model('Tool', ToolSchema);