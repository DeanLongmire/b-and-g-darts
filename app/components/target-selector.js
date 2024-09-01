import Component from '@glimmer/component';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { task, timeout } from 'ember-concurrency';

export default class TargetSelectorComponent extends Component {
  @tracked targets = A([20, 19, 18, 17, 16, 15, 25]);
  @tracked randomTargets = A();
  @tracked modalIsOpen = false;
  @tracked isRandom = false;

  get availableValues() {
    return Array.from({ length: 20 }, (_, i) => i + 1);
  }

  get game() {
    return this.args.game;
  }

  shuffleArray(array) {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  update(i, value) {
    let targets = this.game.targets.slice();

    if (value === 'B' || value === 'b') {
      value = 25;
    }

    for (let j = 0; j < targets.length; j++) {
      if (targets[j] == parseInt(value)) {
        console.log('Target already exists');
        return;
      }
    }

    targets[i] = parseInt(value);
    this.game.targets = A(targets);
  }

  @task(function* () {
    while (true) {
      const shuffledValues = this.shuffleArray(this.availableValues.concat(25));
      this.randomTargets = A(this.targets);

      this.randomTargets.forEach((_, index) => {
        this.randomTargets[index] =
          shuffledValues[index % shuffledValues.length];
      });

      yield timeout(10);
    }
  })
  continuousTask;

  @action
  randomizeTargets() {
    const shuffledValues = this.shuffleArray(this.availableValues.concat(25));
    let targets = this.game.targets.slice();

    targets.forEach((_, index) => {
      targets[index] = shuffledValues[index % shuffledValues.length];
    });

    targets.sort((a, b) => a - b);

    this.game.targets = A(targets);
  }

  @action
  openModal(isRandom) {
    this.isRandom = isRandom;

    if (this.isRandom) {
      this.continuousTask.perform();
    }

    this.modalIsOpen = true;
    this.runNumbers = true;
  }

  @action
  closeModal() {
    this.modalIsOpen = false;
  }
}
