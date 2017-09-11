const chai = require('chai'),
    sinon = require('sinon'),
    request = require('supertest'),
    proxyquire = require('proxyquire'),
    sinonChai = require('sinon-chai');

chai.should();
chai.use(sinonChai);

describe('Main Application', () => {
    describe('Router', () => {
        let server;

        beforeEach(() => {
            proxyquire.noCallThru();
            const rssParserMock = proxyquire('../src/app.js', {
                'rss-parser': {
                    parseURL: sinon.stub()
                }
            });
            server = require('../src/app.js');
        });

        afterEach(() => {});

        it('should register /podcasts', (done) => {
            request(server)
                .get('/podcasts')
                .expect(200, done);
            done();
        });

        it('should register /podcasts/search', (done) => {
            request(server)
                .get('/podcasts/search')
                .expect(200, done);
        });

        it('should add CORS headers', (done) => {
            request(server)
                .get('/podcasts')
                .expect('Access-Control-Allow-Origin', '*')
                .expect('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
                .expect(200, done);
        });

    });
});