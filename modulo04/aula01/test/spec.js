/**
 * Os 3 passos para uma suíte de testes é criar o valor esperado, receber o valor atual e validar
 */

const assert = require('assert');
const Connection = require('../database/connection');

const connection = new Connection();

describe('Suíte de CRUD de heróis', () => {
    const model01 = {
        id: 1,
        name: 'flash',
        power: 'speed'
    };

    before(async () => {
        if (!connection.fileExists()) await connection.createFile();
    });

    it('Cadastro de Herói Utilizando Arquivo', async () => {
        const expected = model01;
        const actual = await connection.createHero({ name: 'thor', power: 'lightning' });

        assert.ok(actual, expected);
    });

    it('Lendo um héroi através de id no arquivo JSON', async () => {
        const expected = model01;
        const actual = await connection.readHero(model01.id);

        assert.deepEqual(actual, expected);
    });
});