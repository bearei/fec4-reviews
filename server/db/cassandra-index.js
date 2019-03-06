const cassandra = require('cassandra-driver');

module.exports = new cassandra.Client({ 
  contactPoints: ['127.0.0.1:9042'],
  localDataCenter: 'datacenter1'
});

