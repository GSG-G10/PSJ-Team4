const request = require('supertest');

const app = require('../app');

const { session } = process.env;

describe('Unauthorized', () => {
  test('Should return a 401 Unauthorized', (done) => {
    const inputData = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.com',
      status: 'Available',
      location: 'Palestine,Gaza strip, Rafah',
    };
    request(app)
      .put(`/api/v1/employee/${inputData.id}`)
      .send(inputData)
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe('Invalid Email', () => {
  test('Should return a 500 Internal Server Error', (done) => {
    const inputData = {
      id: 111,
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.ps',
      status: 'Available',
      location: 'Palestine,Gaza strip, Rafah',
    };
    request(app)
      .put(`/api/v1/employee/${inputData.id}`)
      .set('cookie', `session=${session}`)
      .expect('Content-Type', /json/)
      .send(inputData)
      .expect(500)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('"email" must be a valid email');
        return done();
      });
  });
});

describe('Success', () => {
  test('Should return a 200', (done) => {
    const inputData = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.com',
      status: 'Available',
      location: 'Palestine,Gaza strip, Rafah',
    };
    request(app)
      .put(`/api/v1/employee/${inputData.id}`)
      .set('cookie', `session=${session}`)
      .send(inputData)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
