import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('product-documentation', 'Integration | Component | product documentation', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{product-documentation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#product-documentation}}
      template block text
    {{/product-documentation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
