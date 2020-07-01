/**
 * Ciclo de Vida de Funções Javascript - Com Promise e o módulo util
 */

const util = require('util');

const obterUsuario = (callback) => {
    setTimeout(() => {
        return callback(null, { id: 1, nome: 'wellington', nascimento: new Date('1989-06-16T07:45:00') });
    }, 1000);
};

const obterUsuarioAssincrono = util.promisify(obterUsuario);

const obterTelefone = (id, callback) => {
    setTimeout(() => {
        return callback(null, { fixo: '31 3322-8563', movel: '31 9 8685-7816' });
    }, 2000);
};

const obterTelefoneAssincrono = util.promisify(obterTelefone);

const obterEndereco = (id, callback) => {
    setTimeout(() => {
        return callback(null, { rua: 'ibirapuera', numero: 480, bairro: 'itaipu' });
    }, 2000);
};

const obterEnderecoAssincrono = util.promisify(obterEndereco);

const promise = obterUsuarioAssincrono();

promise
    .then((usuario) => {
        return obterTelefoneAssincrono(usuario.id)
            .then((telefone) => {
                return {
                    usuario: usuario,
                    telefone: telefone
                };
            });
    })
    .then((objeto) => {
        return obterEnderecoAssincrono(objeto.usuario.id)
            .then((endereco) => {
                return {
                    usuario: objeto.usuario,
                    telefone: objeto.telefone,
                    endereco: endereco
                };
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
        console.error(erro);
    });