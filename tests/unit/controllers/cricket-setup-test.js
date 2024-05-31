import { module, test } from 'qunit';
import { setupTest } from 'b-and-g-darts/tests/helpers';

module('Unit | Controller | cricket-setup', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:cricket-setup');
    assert.ok(controller);
  });
});
