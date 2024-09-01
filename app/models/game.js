import Model, { attr } from '@ember-data/model';

export default class GameModel extends Model {
  @attr('String') gameName;
  @attr('Number') numberOfPlayers;
  @attr('Boolean') isOver;
}
