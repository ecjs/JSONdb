var chai = require('chai');
var chaihttp = require('chai-http');
var expect = require('chai').expect;
var app = require('../index.js');
var superagent = require('superagent');


chai.use(chaihttp);

describe('Should accept JSON', function() {
  it('Sending JSON should write a file', function() {
    var agent = superagent.agent();
    agent
    .post('http://localhost:3000/api/test')
    .send({message: 'hey test worked!'})
    .set('Accept', 'application/json')
    .end(function(err, res) {
      if (err) console.log('error! : ' + err);
      expect(res).to.be.json;
    });
  });
});

describe('Simple JSON API', function() {
  it('Response should be json', function() {
    var agent = superagent.agent();
    agent
  .get('http://localhost:3000/api/test')
  .end(function(err, res) {
     expect(res).to.have.status(200);
   });
  });
});
