const servicos = require('./servicos');

/**
 * Criando um método map no protótipo do objeto Array
 */
Array.prototype.meuMap = function (callback) {
    const personagens = [];

    for (let i = 0; i < this.length; i++) {
        const personagem = callback(this[i], i);

        personagens.push(personagem);
    }

    return personagens;
};

const main = async (nome) => {
    try {
        const response = await servicos.obterPersonagens(nome);
        const personagens = response.results.meuMap((personagem, indice) => `${indice} - ${personagem.name}`);

        console.log(personagens);
    } catch (error) {
        console.error(error);
    }
};

main('a');