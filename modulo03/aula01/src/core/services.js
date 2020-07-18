const { get } = require('axios');

const services = {
    async getPeople(nome) {
        const promise = await Promise.all([get(`https://swapi.dev/api/people/?search=${nome}&format=json`)]);
        const response = promise[0];
        const result = response.data.results.map(people => {
            return { name: people.name, height: people.height };
        });
        
        return result;
    }
};

module.exports = services;