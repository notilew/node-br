const fs = require('fs');

const obterUsuario = (email, senha) => {
    return new Promise((resolver, rejeitar) => {
        fs.readFile('./usuarios.json', 'utf-8', (erro, dados) => {
            if (erro) throw new Error(erro.message);

            const usuarios = JSON.parse(dados);
            const usuario = usuarios.filter(usuario => usuario.email === email && usuario.senha === senha);

            if (usuario.length === 0) return rejeitar({ message: 'usuário inexistente!' });

            return resolver(usuario[0]);
        });
    });
};

const promise = obterUsuario('wellington-bhmg@hotmail.com', '324');

promise
    .then(usuario => {
        console.log(`
            Id: ${usuario.id}
            Nome: ${usuario.nome}
            Usuário: ${usuario.usuario}
            Senha: ${usuario.senha}
            E-mail: ${usuario.email}
        `);
    })
    .catch(erro => {
        console.log(`Erro: ${erro.message}`);
    });