const request = require('supertest');

const app = require('../app');
const { buildDatabase } = require('../db/build');

const connection = require('../db/config/connection');

beforeEach(() => buildDatabase());

afterAll(() => connection.end());

describe('GET company review route', () => {
  describe('', () => {
    test('', (done) => {
      const company = {
        id: 4,
      };
      request(app)
        .get(`/api/v1/review/${company.id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });
    });
  });

  describe('Should return Invalid company', () => {
    test('Wrong Id', (done) => {
      const company = {
        id: 6841313,
      };
      request(app)
        .get(`/api/v1/review/${company.id}`)
        .expect(400)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body.message).toBe('Invalid company');
          return done();
        });
    });
  });
  describe('Should return Invalid company', () => {
    test('Id less than 1', (done) => {
      const company = {
        id: 0,
      };
      request(app)
        .get(`/api/v1/review/${company.id}`)
        .expect(400)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body.message).toBe('Invalid company');
          return done();
        });
    });
  });
});
