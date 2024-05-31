import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RouteButtonComponent extends Component {
  @service router;

  @action
  routeTo(route) {
    this.router.transitionTo(route);
  }
}
