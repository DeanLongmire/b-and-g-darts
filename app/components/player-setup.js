import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PlayerSetupComponent extends Component {
  @tracked playerModalOpen = false;

  @action openPlayerModal() {
    this.playerModalOpen = true;
  }
}
