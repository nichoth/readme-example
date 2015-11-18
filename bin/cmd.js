#!/usr/bin/env node

var readmeTmpl = require('../');
var concat = require('concat-stream');
var fs = require('fs');

var template = fs.readFileSync( process.argv.slice(2)[0] );

process.stdin.pipe(concat(function(data) {
  process.stdout.write( readmeTmpl(template, data) );
}));
