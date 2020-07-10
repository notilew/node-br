const axios = require('axios');

class Services {

    constructor() {
        this.path = 'https://swapi.dev/api/people';
        this.search = '?search=undefined';
        this.format = '&format=json';
        this.url = '';
        this.next = false;
        this.filter = '';
        this.response = {};
        this.people = [];
    }

    get getURL() {
        return this.url;
    }

    set setURL(url) {
        this.url = (url) ? url : `${this.path}${this.search}${this.format}`;
    }

    get getNext() {
        return this.next
    }

    set setNext(next) {
        this.next = next;
    }

    get getFilter() {
        return this.filter;
    }

    set setFilter(filter) {
        this.filter = filter;
    }

    get getResponse() {
        return this.response;
    }

    set setResponse(response) {
        this.response = response;
    }

    get getPeople() {
        return this.people;
    }

    set setPeople(people) {
        this.people.push(people);
    }

    changeURLFilter(filter) {
        const start = this.url.indexOf('=') + 1;
        const end = this.url.indexOf('&');
        const slice = this.url.slice(start, end);

        this.url = this.url.replace(slice, filter);
    }

    async getSwapiAPI() {
        try {
            if (!this.getFilter) throw new Error('é necessário informar um valor para a busca!');

            this.changeURLFilter(this.getFilter);

            do {
                const promise = await Promise.all([axios.get(this.url)]);

                this.setResponse = promise[0];
                this.setPeople = this.getResponse.data.results.map(person => person.name);

                if (this.getResponse.data.next) this.setURL = this.getResponse.data.next
            } while (this.getResponse.data.next);
        } catch (error) {
            throw new Error(error.message);
        }
    }

};

module.exports = Services;