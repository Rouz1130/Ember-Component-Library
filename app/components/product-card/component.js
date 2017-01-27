import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['product-card'],
    click() {
        this.get('click')();
    }
});
