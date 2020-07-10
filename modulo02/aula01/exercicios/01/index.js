const Services = require('./services');

const main = async () => {
    try {
        const services = new Services();

        services.setURL = '';
        services.setFilter = 'a';

        await Promise.all([services.getSwapiAPI()]);

        const people = services.getPeople;

        people.forEach(person => console.log(person));
    } catch (error) {
        throw new Error(error.message);
    }
};

main();