var q = 'tasks';

var open = require('amqplib').connect('amqp://admin:admin@localhost');

// Publisher
open.then(function(conn) {
  return conn.createChannel();
}).then(function(ch) {
  return ch.assertQueue(q).then(function(ok) {
    return ch.sendToQueue(q, Buffer.from('somethingasd to do'));
  });
}).catch(console.warn);

