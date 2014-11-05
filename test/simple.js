var chai = require('chai');
var chaihttp = require('chai-http');
var expect = require('chai').expect;

chai.use(chaihttp);

describe('Simple JSON API', function() {
  it('should send the local time', function() {
    chai.request('http://localhost:3000')
  .get('/api/mark')
  .end(function(err, res) {
     expect(err).to.be.null;
     expect(res).to.have.status(200);
     expect(res).to.be.json;
   });
  });

  // it('should greet someone', function() {
  //   chai.request('http://localhost:3000')
  //   .get('/api/mark')
  //   .end(function(err, res) {
  //     console.log(res);
  //     if (err) console.log(err);
  //     expect(res).to.be.html();
  //   });
  // });
});
