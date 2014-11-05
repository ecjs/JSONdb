var chai = require('chai');
var chaihttp = require('chai-http');
var expect = require('chai').expect;
var app = require('../index.js');

chai.use(chaihttp);

describe('Simple JSON API', function() {
  it('should send the local time', function() {
    chai.request('http://localhost:3000')
  .get('/api')
  .end(function(err, res) {
     expect(res).to.be.json;
   });
  });
});
