import { module, test } from 'qunit';

import { setupTest } from 'b-and-g-darts/tests/helpers';

module('Unit | Model | cricket', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('cricket', {});
    assert.ok(model);
  });
});
