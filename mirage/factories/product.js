import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Name ${i+1}`;
  },
  contact: "test name",
  email: "test@test.test"
});
