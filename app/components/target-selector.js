import Component from '@glimmer/component';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TargetSelectorComponent extends Component {
  @tracked targets = A([20, 19, 18, 17, 16, 15, 25]);
  @tracked modalIsOpen = false;

  @action
  openModal() {
    this.modalIsOpen = true;
  }

  @action 
  closeModal() {
    this.modalIsOpen = false;
  }
}
