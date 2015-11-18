var tmpl = require('lodash.template');

module.exports = function(template, data) {
  return tmpl(template)({ example: data });
};
