const path = require('path');
const util = require('util');
const fs = require('fs');

class Pokemon {

    constructor() {
        this.pokemon = {};
        this.pokemons = [];
        this.file = path.resolve(__dirname, '..', 'database', 'json', 'pokemons.json');

        this.writeFileAsync = util.promisify(fs.writeFile);
        this.readFileAsync = util.promisify(fs.readFile);
    }

    fileExists() {
        return fs.existsSync(this.file);
    }

    async createFile() {
        try {
            if (!this.fileExists())
                await this.writeFileAsync(this.file, JSON.stringify([]), 'utf8');

            return true;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async writeFile(data) {
        try {
            this.writeFileAsync(this.file, JSON.stringify(data), 'utf8');

            return true;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async readFile() {
        try {
            const data = await this.readFileAsync(this.file, 'utf8');

            return JSON.parse(data);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async createPokemon(pokemon) {
        try {
            this.pokemon = pokemon;
            this.pokemons = await this.readFile();
            this.pokemons.push(this.pokemon);

            if (this.writeFile(this.pokemons))
                return this.pokemon;
        } catch (error) {
            throw new Error(error.message);
        }
    }

}

/* const pokemon = new Pokemon();

async function main() {
    try {
        await pokemon.createPokemon({ id: 1, name: 'bulbasaur', type: 'poison/grass'});
    } catch (error) {
        throw new Error(error);
    }
}

main(); */

module.exports = Pokemon;