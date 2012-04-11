#!/usr/bin/env node
var hogan = require('hogan.js')

var data = {
  'back' : 'voltar'
}


//var template = hogan.compile("bla {{_i}}back{{/i}} bla bla bla", { sectionTags: [{o: '_i', c: 'i'}]})
var template = "bla {{_i}}back{{/i}} bla bla bla {{name}}", 
context = {
       name: 'jose',
       _i: function (k) { return data[k] }
    }
var output = hogan.compile(template,{ sectionTags: [{o: '_i', c: 'i'}]}).render(context)

console.log(output)
