const servicos = require('./servicos');

const main = async (nome) => {
    try {
        const personagens = [];
        const promise = await Promise.all([servicos.obterPersonagens(nome)]);
        const response = promise[0];

        console.time('for');

        for (let i = 0; i < response.results.length; i++) {
            const personagem = response.results[i].name;

            personagens.push(personagem);
        }

        console.timeEnd('for');

        console.time('forIn');

        for (const i in response.results) {
            const personagem = response.results[i];
            personagens.push(personagem.name);
        }

        console.timeEnd('forIn');

        console.time('forOf');

        for (const personagem of response.results) {
            personagens.push(personagem.name);
        }

        console.timeEnd('forOf');

        console.time('forEach');

        response.results.forEach(personagem => personagens.push(personagem.name));

        console.timeEnd('forEach');

        console.time('map');

        const lista = response.results.map(personagem => personagem.name);

        console.timeEnd('map');
    } catch (e) {
        console.error(e.message);
    }
};

main('a');