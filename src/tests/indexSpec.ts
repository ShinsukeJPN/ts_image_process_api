// import myFunc from '../index';
import supertest from 'supertest';
import func from '../index';
import {promises as fsPromises} from 'fs';
const sizeOf = require('buffer-image-size');
// Endpoint testing
const request = supertest(func.app);

describe('Test endpoint responses', () => {
  it('gets the api endpoint', async (done) => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
    done();
  });
});

describe('Image processing test', () => {
  it('expects processed image size is 200 * 200', async () => {
    const myFile = await fsPromises.readFile(`assets/full/fjord.jpg`);
    const result = await func.resizeImage(myFile, 'fjord.jpg', 200, 200);
    const image = await fsPromises.readFile(`assets/thumb/fjord.jpg`);
    const dimensions = sizeOf(image)
    expect(dimensions.width).toBe(200);
    expect(dimensions.height).toBe(200);
  });
});
