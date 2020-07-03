/**
 * Event Emitter
 */

// exemplo 01
const { EventEmitter } = require('events');

class Manipulador extends EventEmitter { }

const manipulador = new Manipulador();
const evento = 'usuario:click';

manipulador.on(evento, (click) => {
    console.log(`Um Usuário clicou, ${click}`);
});

manipulador.emit(evento, 'no botão');
manipulador.emit(evento, 'na barra de rolagem');

// exemplo 02
const stdin = process.openStdin();

stdin.addListener('data', (data) => {
    console.log(`Você digitou: ${data.toString().trim()}`);
});
