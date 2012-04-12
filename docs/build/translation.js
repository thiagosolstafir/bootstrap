#!/usr/bin/env node
var hogan = require('hogan.js')
var languages = require('pt-br.json')

var template = "bla {{_i}}back{{/i}} bla bla bla", 
context = {
     name: 'layout',
     _i: function (k) { return languages[context.name][k] }
  }
var output = hogan.compile(template,{ sectionTags: [{o: '_i', c: 'i'}]}).render(context)

console.log(output)
