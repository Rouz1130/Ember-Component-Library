import { Factory, faker } from 'ember-cli-mirage';


export default Factory.extend({
    name(i) { return (faker.commerce.productName() + ': ' + (i+1)); },
    price() {return faker.finance.amount();},
    image() {return faker.image.image();},
    // barcode() {return faker.barcode.barcode();},
    barcode() { return faker.random.number();},


  });
