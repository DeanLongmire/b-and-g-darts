import { attr } from '@ember-data/model';
import GameModel from './game';

export default class CricketModel extends GameModel {
  @attr() players;
  @attr() targets;
}
