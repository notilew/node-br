const fs = require('fs');

class Pessoa {

    constructor() {
        this.id = 0;
        this.nome = '';
        this.usuario = '';
        this.senha = '';
        this.email = '';
    }

    consultarPessoas() {
        return new Promise((resolver, rejeitar) => {
            fs.readFile('../usuarios.json', 'utf-8', (erro, dados) => {
                if (erro) return rejeitar(erro.message);

                return resolver(JSON.parse(dados));
            });
        });
    }

    async logar() {
        try {
            if (!this.email || !this.senha)
                throw new Error('é necessário informar e-mail e senha!');

            const promise = await Promise.all([this.consultarPessoas()]);
            const pessoas = promise[0];
            const pessoa = pessoas.filter(pessoa =>
                pessoa.email === this.email && pessoa.senha === this.senha);

            if (pessoa.length === 0)
                throw new Error('usuário inexistente ou dados incorretos!');

            console.log({
                id: pessoa[0].id,
                nome: pessoa[0].nome,
                usuario: pessoa[0].usuario,
                email: pessoa[0].email
            });
        } catch (e) {
            throw new Error(e.message);
        }
    }

    obterEmail() {
        return this.email;
    }

    definirEmail(email) {
        this.email = email;
    }

    obterSenha() {
        return this.senha;
    }

    definirSenha(senha) {
        this.senha = senha;
    }

}

module.exports = Pessoa;