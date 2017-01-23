import Ember from 'ember';

const { RSVP, $ } = Ember;

export default Ember.Route.extend({
  model() {
    return RSVP.hash ({
      product: $.getJSON('/api/products'),
      product2: $.getJSON('/api/products/2'),
    });
  }
});
