const obterUsuario = (callback) => {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'wellington',
            nascimento: new Date()
        });
    }, 1000);
};

const obterTelefone = (id, callback) => {
    setTimeout(() => {
        return callback(null, {
            fixo: '31 3322-8563',
            movel: '31 9 8685-7816'
        });
    }, 2000);
};

const obterEndereco = (id, callback) => {
    setTimeout(() => {
        return callback(null, {
            rua: 'ibirapuera',
            numero: 480,
            bairro: 'itaipu'
        });
    }, 2000);
};

obterUsuario((erro, usuario) => {
    if (erro) throw new Error(erro);

    obterTelefone(usuario.id, (erro, telefone) => {
        if (erro) throw new Error(erro);

        obterEndereco(usuario.id, (erro, endereco) => {
            if (erro) throw new Error(erro);

            console.log('usuário: ', endereco);
            console.log('telefone: ', endereco);
            console.log('endereço: ', endereco);
        });
    });
});