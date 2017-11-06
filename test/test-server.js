'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

const {app} = require('../app');

const should = chai.should();
chai.use(chaiHttp);

describe('API', function() {

  it('should 200 on GET requests', function() {
    return chai.request(app)
      .get('/api/randomText')
      .then(function(res) {
        res.should.have.status(200);
        res.should.be.json;
      });
  });
});