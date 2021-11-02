const supertest = require('supertest');
const app = require('../app');
const dbBuild = require('../db/build/build');
const connection = require('../db/config/connection');

beforeEach(() => dbBuild());
afterAll(() => connection.end());

describe('Employee', () => {
  test('edit employee information', async () => {
    const res = await supertest(app)
      .put('/api/v1/employee')
      .expect(204)
      .send({
        firstName: 'test',
        lastName: 'test123456',
        email: 'test@gmail.com',
        contact: '1234567891',
        address: 'gaza',
        birthDate: 30,
        status: 'available',
        profileImage: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
        coverImage: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
      });
    console.log(res);
    return expect(res.body).toBe({ message: 'Your Information updated Successfully' });
  });
});
