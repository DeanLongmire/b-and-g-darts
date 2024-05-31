import EmberRouter from '@ember/routing/router';
import config from 'b-and-g-darts/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home');
  this.route('game-selection');
});
