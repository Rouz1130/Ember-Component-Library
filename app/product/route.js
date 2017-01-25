import Ember from 'ember';

const { RSVP, $ } = Ember;


export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      products: $.getJSON('/api/products')
    });
  },

  actions: {
    destroyProduct(product) {
      product.destroyRecord();
      this.transitionTo('index');
    }
  }
});



// 
// import Ember from 'ember';
//
// export default Ember.Component.extend({
//     classNames: ['product-card'],
//     click() {
//         this.get('click')();
//     }
// });
