import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';
import { task, timeout } from 'ember-concurrency';

export default class TargetSelectorTsModalComponent extends Component {
  @tracked runNumbers = this.args.isRandom;
  @tracked didRandomize = false;
  @tracked randomTargets = A();

  get game() {
    return this.args.game;
  }

  get availableValues() {
    return Array.from({ length: 20 }, (_, i) => i + 1);
  }

  get targetsAsText() {
    let targets = this.game.targets.slice();

    targets.forEach((_, index) => {
      if (targets[index] == 25 || targets[index] == '25') {
        targets[index] = 'B';
      }
    });

    return targets;
  }

  @action
  closeModal() {
    this.didRandomize = false;
    this.args.tmp.cancelAll();
    this.args.closeModal();
  }

  @action
  randomize() {
    this.didRandomize = true;
    this.args.tmp.cancelAll();
    this.args.randomizeTargets();
  }

  @action
  update(i, event) {
    let value = event.target.value;
    console.log('Trying to update the ' + i + 'th target to ' + value);
    this.args.update(i, value);
  }
}
