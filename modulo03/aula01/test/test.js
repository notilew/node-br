const assert = require('assert');
const services = require('../src/core/services');

describe('Testes Star Wars', () => {
    it('Buscando R2-D2 com o formato correto', async () => {
        const expected = [{ name: "R2-D2", height: "96" }];
        const actual = await services.getPeople('r2-d2');

        console.log('retorno', actual);
        
        assert.deepEqual(actual, expected);
    });
});