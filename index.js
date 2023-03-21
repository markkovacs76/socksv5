var fs = require('fs'),
    path = require('path');

['server', 'client', 'Agents'].forEach(function(f) {
  var exp = require(__dirname + '/lib/' + f),
      keys = Object.keys(exp);
  for (var i = 0, len = keys.length; i < len; ++i)
    exports[keys[i]] = exp[keys[i]];
});

/* using static requires instead of fs.readdirSync,
 * because webpack throws error by using dynamic imports 
 */

exports.auth = {
  None: require(__dirname + '/lib/auth/None'),
  UserPassword: require(__dirname + '/lib/auth/UserPassword')
};
