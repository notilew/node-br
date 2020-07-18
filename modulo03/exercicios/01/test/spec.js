const assert = require('assert');
const nock = require('nock');
const axios = require('axios');

describe('Recuperando endereço através da API da ViaCEP', () => {
    beforeEach(() => {
        const cep = {
            cep: '30692-080',
            logradouro: 'Rua Ibirapuera',
            complemento: '',
            bairro: 'Itaipu (Barreiro)',
            uf: 'MG',
            unidade: '',
            ibge: '3106200',
            gia: ''
        };

        nock('https://viacep.com.br').get('/ws/30692080/json/').reply(200, JSON.stringify(cep));
    });

    it('Mocando retorno da API', async () => {
        const response = await axios.get('https://viacep.com.br/ws/30692080/json/');

        console.log('response', response);
    });

    /* describe('Validando CEP', () => {
        const cep = 30692080;
        
    }); */
});