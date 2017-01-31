import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['component-documentation'],
    click() {
        this.get('click')();
    }
});
