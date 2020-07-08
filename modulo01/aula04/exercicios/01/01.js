const fs = require('fs');

const lerArquivo = () => {
    const promise = new Promise((resolver, rejeitar) => {
        fs.readFile('../usuarios.json', 'utf-8', (erro, dados) => {
            if (erro) return rejeitar(erro.message);

            return resolver(JSON.parse(dados));
        });
    });

    return promise;
};

const obterUsuario = async (email, senha) => {
    try {
        const promise = new Promise((resolver, rejeitar) => {
            const usuario = usuarios.filter(usuario => usuario.email === email && usuario.senha === senha);

            if (usuario.length === 0) return rejeitar({ message: 'usuário inexistente!' });

            return resolver(usuario[0]);
        });

        return promise;
    } catch (e) {
        console.log(e.message);
    }
};

const main = async (email, senha) => {
    try {
        const usuario = await obterUsuario(email, senha);

        console.log(usuario);
    } catch (e) {
        console.log(e.message);
    }
};

main('wellington-bhmg@hotmail.com', '123');