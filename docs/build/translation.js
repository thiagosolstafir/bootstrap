#!/usr/bin/env node
var hogan = require('hogan.js')
var fs    = require('fs')
var cjson = require('cjson') , prod  = process.argv[2] == 'production', title = 'Twitter Bootstrap'
var langchoose = process.argv[3]

red   = '\033[31m';
blue  = '\033[34m';
reset = '\033[0m';

var language = cjson.load(__dirname + '/languages/'+langchoose+'.json');

var template = fs.readFileSync(__dirname + '/../templates/layout.mustache', 'utf-8'),

context = {
     name: "layout",
     title: title,
     _i: function (k) { 
       if (language[context.name][k]) {
        return language[context.name][k]  
       } else {
         console.log(blue + 'Missing translation to: ' + red + k + reset);
         return k
       } 
     }  
  }
var output = hogan.compile(template,{ sectionTags: [{o: '_i', c: 'i'}]}).render(context)

console.log(output)
