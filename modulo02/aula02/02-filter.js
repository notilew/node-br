const { obterPersonagens } = require('./servicos');

/**
 * Criando um método filter no protótipo do objeto Array
 */
Array.prototype.meuFilter = function(callback) {
    const filtrados = [];

    for (let i = 0; i < this.length; i++) {
        const resultado = callback(this[i], i);

        if (!resultado) continue;

        filtrados.push(this[i]);
    }

    return filtrados;
};

async function main(nome) {
    try {
        const { results } = await obterPersonagens(nome);
        const familiaLars = results.meuFilter(personagem => personagem.name.toLowerCase().indexOf('lars') !== -1);
        const personagens = familiaLars.map(personagem => personagem.name);

        console.log(personagens);
    } catch (error) {
        console.error(error);
    }
}

main('a')