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

  shuffleArray(array) {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  update(i, value) {
    let targets = this.targets.slice();

    targets[i] = parseInt(value);
    this.targets = A(targets);
  }

  @task(function* () {
        while(true) {
            const shuffledValues = this.shuffleArray(this.availableValues.concat(25));
            let targets = A(this.targets);
        
            targets.forEach((_, index) => {
              this.targets[index] = shuffledValues[index % shuffledValues.length];
            });
        
            this.randomTargets = A(targets);
            yield timeout(10);
        }
    }) continuousTask;

  @action
  randomizeTargets() {
    const shuffledValues = this.shuffleArray(this.availableValues.concat(25));
    let targets = A(this.targets);

    targets.forEach((_, index) => {
      this.targets[index] = shuffledValues[index % shuffledValues.length];
    });

    targets.sort((a, b) => a - b);

    this.targets = A(targets);
  }

  @action
  openModal(isRandom) {
    this.isRandom = isRandom;

    if(this.isRandom) {
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
