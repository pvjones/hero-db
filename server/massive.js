// Connect Massive
var massive = require('massive');
var connectionString = 'postgres://postgres:postgres@localhost/hero';
var massiveInstance = massive.connectSync({connectionString : connectionString});
// Make DB available to export
module.exports = massiveInstance;