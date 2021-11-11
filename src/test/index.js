const mocha = require('mocha'),
    chai = require('chai'),
    chai_http = require('chai-http'),
    server = require('../../app');

chai.should();
chai.use(chai_http);

describe('Comments endpoint /api/v1/users', () => {
    it('GET should return array of comment model with 200 status code', (done) => {
        chai.request(server)
        .get('/api/v1/comments')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');

        })
        done();
    });
});

describe('Users add /api/v1/users', () => {
    it('POST should  add return user model 200 status code', (done) => {
        chai.request(server)
        .post('/api/v1/users')
        .send({
            name: 'Don Corleone',
            status: 'Online',
        })
        .end((err, res) => {
            console.log(res);
            res.should.have.status(200);

            done();
        })

    });
});
