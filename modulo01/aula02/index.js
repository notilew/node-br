/**
 * Ciclo de Vida de Funções Javascript - Com Promise
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

const promise = obterUsuario();

promise
    .then((usuario) => {
        return obterTelefone(usuario.id)
            .then((telefone) => {
                return {
                    usuario: {
                        id: usuario.id,
                        nome: usuario.nome,
                        nascimento: usuario.nascimento
                    },
                    telefone: {
                        fixo: telefone.fixo,
                        movel: telefone.movel
                    }
                };
            });
    })
    .then((resultado) => {
        return obterEndereco(resultado.usuario.id)
            .then((endereco) => {
                return {
                    usuario: resultado.usuario,
                    telefone: resultado.telefone,
                    endereco: endereco
                }
            });
    })
    .then((objeto) => {
        console.log(`
            Id: ${objeto.usuario.id}
            Nome: ${objeto.usuario.nome}
            Nascimento: ${objeto.usuario.nascimento}

            Fixo: ${objeto.telefone.fixo}
            Móvel: ${objeto.telefone.movel}

            Rua: ${objeto.endereco.rua}
            Número: ${objeto.endereco.numero}
            Bairro: ${objeto.endereco.bairro}
        `);
    })
    .catch((erro) => {
        console.error('erro', erro);
    });