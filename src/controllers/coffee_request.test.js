const request = require('supertest');
const app = require('../app');

describe('Test coffee API endpoint request', () =>{
    test('GET should return correct message', async () => {
        const res = await request(app).get('/coffeelover');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('I like coffee!');
    });

    test('GET /coffee should return correct object', async () => {
        const res = await request(app)
        .get('/coffee')
        .query({coffeName: 'Latte'});

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Coffee',
            name: 'Latte',
        });
    });
});

