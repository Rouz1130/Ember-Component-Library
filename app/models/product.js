import DS from 'ember-data';

export default DS.Model.extend({
  barcode: DS.attr('number'),
  detailsImage: DS.attr('string'),
  detailsImageId: DS.attr(),
  itemType: DS.attr(),
  name: DS.attr('string'),
  price: DS.attr('number'),
  productImage: DS.attr('string'),
  productImageId: DS.attr(),
});
