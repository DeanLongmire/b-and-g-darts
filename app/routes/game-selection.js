import Route from '@ember/routing/route';

export default class GameSelectionRoute extends Route {
  async model() {
    const response = await fetch(`/games.json`);
    return response.json();
  }
}
