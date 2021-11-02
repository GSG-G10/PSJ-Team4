const request = require('supertest');

const app = require('../app');
const { emailSchema } = require('../utils');

describe('given employee does not exist', () => {
  test('should return a 404 Not Found', (done) => {
    request(app)
      .put('/api/v1/employee/1623285')
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
describe('', () => {
  test('Should return a 422 Unprocessable Entity', async (done) => {
    const userId = await 1;
    const inputData = await {
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.ps',
      status: 'Available',
      location: 'Palestine,Gaza strip, Rafah',
    };
    request(app)
      .put(`/api/v1/employee/${userId}`)
      .send(inputData)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
describe('', () => {
  test('Should return a 200', async (done) => {
    const userId = await 1;
    const inputData = await {
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@example.com',
      status: 'Available',
      location: 'Palestine,Gaza strip, Rafah',
    };
    request(app)
      .put(`/api/v1/employee/${userId}`)
      .send(inputData)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
