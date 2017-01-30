import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['product-documentation'],
    click() {
        this.get('click')();
    }
});
