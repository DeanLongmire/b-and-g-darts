import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class GameCardComponent extends Component {
  @service router;

  @tracked game = this.args.game;

  @action
  openGame() {
    const gameName = this.game.name.toLowerCase();

    this.router.transitionTo(`${gameName}-setup`);
  }
}
