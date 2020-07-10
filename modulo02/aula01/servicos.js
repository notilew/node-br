const axios = require('axios');

const servicos = {
    async obterPersonagens(nome) {
        const url = `https://swapi.dev/api/people/?search=${nome}&format=json`;
        const response = await axios.get(url);
        
        return response.data;
    }
};

module.exports = servicos;