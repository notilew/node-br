const fs = require('fs');

const obterUsuario = (email, senha, callback) => {
    fs.readFile('./usuarios.json', 'utf-8', (erro, dados) => {
        if (erro) throw new Error(`código: ${erro.code} mensagem: ${erro.message}`);

        const usuarios = JSON.parse(dados);
        const usuario = usuarios.filter(usuario => usuario.email === email && usuario.senha === senha);

        callback((usuario.length === 0) ? 'usuário não cadastrado!' : '', usuario);
    });
};

obterUsuario('wellington-bhmg@hotmail.com', '123', (erro, usuario) => {
    if (erro) throw new Error(erro);

    usuario.forEach(usuario => console.log(`
        Id: ${usuario.id}
        Nome: ${usuario.nome}
        Usuário: ${usuario.usuario}
        Senha: ${usuario.senha}
        E-mail: ${usuario.email}
    `));
});