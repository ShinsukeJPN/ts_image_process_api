import myFunc from '../index';
import supertest from 'supertest';
import app from '../index';

// Endpoint testing
const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async (done) => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
        done();
    }
)});

// Business logic testing
it('expect myFunc(5) to equal 25', () => {
  expect(myFunc(5)).toEqual(25);
});

it('expects async() result to equal value',
  async () => {
  const result = await async();
  expect(result).toEqual(value);
});

it('expects asyncFunc result to equal value', ()
=> {
  return asyncFunc().then( result => {
    expect(result).toEqual(value);
  });
});

it('expects asyncFun to resolve', async function() {
  await asyncFun().toBeResolved();
});

it('expects asyncFun to rejected with error',
async function() {
  await asyncFun().toBeRejectedWith(
    new Error('Input file is missing');
  );
});