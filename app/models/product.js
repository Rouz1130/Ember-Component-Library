
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  barcode: DS.attr(),
  price: DS.attr(),
  image: DS.attr(),
});
