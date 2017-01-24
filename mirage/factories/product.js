import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) { return `Name ${i+1}` },
    price() {
      return (faker.name.firstName() +' ' + faker.name.lastName());
  },
  itemType: "test@test.test",
});
