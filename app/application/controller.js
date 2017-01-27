import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    selectSearchResult() {
      this.set('product.image');
      }
    }
  });
