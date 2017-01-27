import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
    onclick() {
        window.alert('cardWasClicked');
    }}
});
