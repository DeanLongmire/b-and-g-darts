import { module, test } from 'qunit';
import { setupTest } from 'b-and-g-darts/tests/helpers';

module('Unit | Route | cricket-setup', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:cricket-setup');
    assert.ok(route);
  });
});
