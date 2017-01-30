import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    // return Ember.RSVP.hash({
    //   products: Ember.$.getJSON('/api/products')
    // });

     return {
         "name": "some-product",
         "price": "12.00",
         "barcode": "0075678164125",
         "image": "http://www.mobilevillage.com/wp-content/uploads/2013/03/Android-evil-small.jpg"
       };
     }
});
