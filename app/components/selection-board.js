import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class SelectionBoardComponent extends Component {
  @tracked game1 = this.args.model[0];
  @tracked game2 = this.args.model[1];
  @tracked game3 = this.args.model[2];
  @tracked game4 = this.args.model[3];
}
