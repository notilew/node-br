const Pessoa = require('./usuario.class');

const pessoa = new Pessoa();

pessoa.definirEmail('wellington-bhmg@hotmail.com');
pessoa.definirSenha('123');
pessoa.logar();