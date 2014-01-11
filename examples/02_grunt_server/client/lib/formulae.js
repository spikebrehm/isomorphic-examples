var _ = require('underscore');

exports.makeBig = function(base, repeat) {
  var num = 0;
  _.times(repeat, function() {
    num += base;
  });
  return num;
};
