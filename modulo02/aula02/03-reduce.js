const { obterPersonagens } = require('./servicos');

/**
 * Criando um método reduce no protótipo do objeto Array
 */
Array.prototype.meuReduce = function(callback, valor) {
    let acumulado = (typeof valor !== undefined) ? valor : this[0];

    for (const peso of this) {
        acumulado = callback(acumulado, peso);
    }

    return acumulado;
};

async function main(nome) {
    try {
        const { results } = await obterPersonagens(nome);
        const pesos = results.map(personagem => Number.parseFloat(personagem.height));
        const pesoTotal = pesos.meuReduce((acumulado, peso) => {
            return acumulado + peso;
        }, 0);
        console.log(pesoTotal);
    } catch (error) {
        console.error(error);
    }
}

main('a')