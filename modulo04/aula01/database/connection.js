const fs = require('fs');
const path = require('path');
const util = require('util');

class Connection {

    constructor() {
        this.hero = { id: null, name: '', power: '' };
        this.heroes = [];
        this.path = path.resolve(__dirname, 'json', 'heroes.json');

        this.readFileAsync = util.promisify(fs.readFile);
        this.writeFileAsync = util.promisify(fs.writeFile);
    }

    fileExists() {
        return fs.existsSync(this.path);
    }

    async createFile() {
        if (!this.fileExists()) await this.writeFile([]);
    }

    async writeFile(data) {
        try {
            await this.writeFileAsync(this.path, JSON.stringify(data), 'utf8');

            return true;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async readFile() {
        try {
            const file = await this.readFileAsync(this.path, 'utf8');

            return JSON.parse(file.toString());
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async createHero(hero) {
        try {
            this.heroes = await this.readFile();

            this.hero.id = this.heroes.length;
            this.hero.name = hero.name.toLowerCase();
            this.hero.power = hero.power.toLowerCase();

            this.heroes.push(this.hero);

            return await this.writeFile(this.heroes);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async readHero(id) {
        try {
            this.heroes = await this.readFile();
            this.hero = this.heroes.filter(hero => hero.id === id);

            return this.hero[0];
        } catch (error) {
            throw new Error(error);
        }
    }

}

const connection = new Connection();

async function main() {
    try {
        const hero = await connection.createHero({ name: 'thor', power: 'lightning' });
    } catch (error) {
        throw new Error(error.message);
    }
}

main();

module.exports = Connection;