const supertest = require('supertest');
const app = require('../app');
const dbBuild = require('../db/build');
const connection = require('../db/config/connection');

beforeEach(() => dbBuild());
afterAll(() => connection.end());

describe('reviews', () => {
  test('post review 200', async () => {
    const res = await supertest(app)
      .post('/api/v1/review/2')
      .expect(200)
      .send({
        reviewContent: 'great',
        rate: 0,
        isAnonymous: 'true',
      });
    return expect(res.body).toEqual({ message: 'Review Added Successfully' });
  });
});
