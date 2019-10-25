const app = require('./index');
const request = require('supertest');

describe('API', () => {
  it('should be ready', async () => {
    const res = await request(app).get('/readiness');
    expect(res.statusCode).toEqual(200);
  });

  it('should return test cases', async () => {
    const res = await request(app)
      .post('/generate_cases')
      .send({
        factors: 'Type: Single, Span, Stripe, Mirror, RAID-5',
      });
    expect(res.statusCode).toEqual(200);
  });
});
