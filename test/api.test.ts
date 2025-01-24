import request from 'supertest';

import app from '../src/app';

describe('POST /yellowPage/find', () => {
  it('responds with a json message', (done) => {
    request(app)
      .post('/yellowPage/find')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: '',
      }, done);
  });
});


