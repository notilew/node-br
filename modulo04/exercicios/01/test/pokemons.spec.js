const assert = require('assert');
const Pokemon = require('../src/core/models/pokemon.class');

const pokemon = new Pokemon();

describe('Suíte de testes do arquivo JSON de Pokemons', () => {
    it('Criando arquivo', async () => {
        const expected = true;
        const actual = await pokemon.createFile();

        assert.ok(actual, expected);
    });
});

describe('Suíte de testes do CRUD de Pokemons', () => {
    const model = {
        id: 7,
        name: 'squirtle',
        type: 'water'
    };

    it('Criando um Pokémon', async () => {
        const expected = model;
        const actual = await pokemon.createPokemon(model);

        assert.deepEqual(actual, expected);
    });

    /* it('Lendo um ou todos os Pokemons', () => {});

    it('Atualizando um Pokémon', () => {});

    it('Deletando um Pokémon', () => {}); */
});