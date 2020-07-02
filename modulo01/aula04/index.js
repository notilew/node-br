/**
 * Ciclo de Vida de Funções Javascript - Com Promise e Async / Await
 */

const obterUsuario = () => {
    const promise = new Promise((resolver, rejeitar) => {
        setTimeout(() => {
            return resolver({ id: 1, nome: 'wellington', nascimento: new Date('1989-06-16T07:45:00') });
        }, 1000);
    });

    return promise;
};

const obterTelefone = (id) => {
    const promise = new Promise((resolver, rejeitar) => {
        setTimeout(() => {
            return resolver({ fixo: '31 3322-8563', movel: '31 9 8685-7816' });
        }, 2000);
    });

    return promise;
};

const obterEndereco = (id) => {
    const promise = new Promise((resolver, rejeitar) => {
        setTimeout(() => {
            return resolver({ rua: 'ibirapuera', numero: 480, bairro: 'itaipu' });
        }, 2000);
    });

    return promise;
};

const main = async () => {
    try {
        const usuario = await obterUsuario();
        const promise = await Promise.all([
            obterTelefone(usuario.id),
            obterEndereco(usuario.id)
        ]);
        const telefone = promise[0];
        const endereco = promise[1];

        console.log(`
            Id: ${usuario.id}
            Nome: ${usuario.nome}
            Nascimento: ${usuario.nascimento}

            Fixo: ${telefone.fixo}
            Móvel: ${telefone.movel}

            Rua: ${endereco.rua}
            Número: ${endereco.numero}
            Bairro: ${endereco.bairro}
        `);
    } catch (e) {
        console.error(e.message);
    }
};

main();