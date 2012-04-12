#!/usr/bin/env node
var hogan = require('hogan.js')
var fs    = require('fs')
var cjson = require('cjson');

var language = cjson.load(__dirname + '/languages/pt-br.json');

var template = "bla {{_i}}back{{/i}} bla bla bla", 
context = {
     name: 'layout',
     _i: function (k) { return language[context.name][k] }
  }
var output = hogan.compile(template,{ sectionTags: [{o: '_i', c: 'i'}]}).render(context)

console.log(output)
