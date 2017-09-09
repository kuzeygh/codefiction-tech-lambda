const chai = require('chai'),
    sinon = require('sinon'),
    request = require('supertest'),
    sinonChai = require('sinon-chai');

chai.should();
chai.use(sinonChai);

describe('Main Application', () => {
    describe('Router', () => {
        let server;

        beforeEach(() => {
            server = require('../src/app.js');
        });

        afterEach(() => {});

        it('should register /podcasts', (done) => {
            request(server)
                .get('/podcasts')
                .expect(200, done);
        });

        it('should register /podcasts/search', (done) => {
            request(server)
                .get('/podcasts/search')
                .expect(200, done);
        });
    });
});