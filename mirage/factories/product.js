import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Product ${i+1}`;
  },
  name: "test name",
  email: "test@test.test"
});
