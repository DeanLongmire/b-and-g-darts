import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import { A } from '@ember/array';

export default class GameSelectionCricketSetupRoute extends Route {
    @service store;

    async model() {
        let game = this.store.peekAll('game');

        if(game.length == 0) {
            game = this.store.createRecord('cricket', {
                id: 1,
                gameName: 'Cricket',
                isOver: false,
                targets: A([20, 19, 18, 17, 16, 15, 25]),
            });
        }

        return hash({
            game: game,
        });
    }
}
