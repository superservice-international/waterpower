import _ from 'lodash';
import simpleLogger from 'angular-simple-logger/dist/angular-simple-logger';

import 'leaflet/dist/leaflet-src.js';
import 'leaflet/dist/leaflet.css';
import uiLeaflet from 'ui-leaflet';

let finiteStateMachine = require('javascript-state-machine');

class memoryCmpCtrl {
  /* @ngInject */
  constructor($log, $element, $timeout, $mdDialog) {
    this._log = $log;
    this.$element = $element;
    this.$timeout = $timeout;
    this.$mdDialog = $mdDialog;
    this.memoryCards = [
      {
        id: 1,
        state: 'covered',
        image: require('./image_01.jpg'),
        info: 'Etiam Lorem Amet Fermentum',
        center: {
          lat: 5.5912087,
          lng: -0.1797294
        }
      },
      {
        id: 1,
        state: 'covered',
        image: require('./image_01.jpg'),
        info: 'Etiam Lorem Amet Fermentum',
        center: {
          lat: 5.5912087,
          lng: -0.1797294
        }
      },
      {
        id: 2,
        state: 'covered',
        image: require('./image_02.jpg'),
        info: 'Etiam Lorem Amet Fermentum',
        center: {
          lat: 5.5912087,
          lng: -0.1797294
        }
      },
      {
        id: 2,
        state: 'covered',
        image: require('./image_02.jpg'),
        info: 'Etiam Lorem Amet Fermentum',
        center: {
          lat: 5.5912087,
          lng: -0.1797294
        }
      },
      {
        id: 3,
        state: 'covered',
        image: require('./image_03.jpg'),
        info: 'Etiam Lorem Amet Fermentum',
        center: {
          lat: 5.5912087,
          lng: -0.1797294
        }
      },
      {
        id: 3,
        state: 'covered',
        image: require('./image_03.jpg'),
        info: 'Etiam Lorem Amet Fermentum',
        center: {
          lat: 5.5912087,
          lng: -0.1797294
        }
      },
      {
        id: 4,
        state: 'covered',
        image: require('./image_04.jpg'),
        info: 'Etiam Lorem Amet Fermentum',
        center: {
          lat: 5.5912087,
          lng: -0.1797294
        }
      },
      {
        id: 4,
        state: 'covered',
        image: require('./image_04.jpg'),
        info: 'Etiam Lorem Amet Fermentum',
        center: {
          lat: 5.5912087,
          lng: -0.1797294
        }
      },
      {
        id: 5,
        state: 'covered',
        image: require('./image_05.jpg'),
        info: 'Etiam Lorem Amet Fermentum',
        center: {
          lat: 5.5912087,
          lng: -0.1797294
        }
      },
      {
        id: 5,
        state: 'covered',
        image: require('./image_05.jpg'),
        info: 'Etiam Lorem Amet Fermentum',
        center: {
          lat: 5.5912087,
          lng: -0.1797294
        }
      },
      {
        id: 6,
        state: 'covered',
        image: require('./image_06.jpg'),
        info: 'Etiam Lorem Amet Fermentum',
        center: {
          lat: 5.5912087,
          lng: -0.1797294
        }
      },
      {
        id: 6,
        state: 'covered',
        image: require('./image_06.jpg'),
        info: 'Etiam Lorem Amet Fermentum',
        center: {
          lat: 5.5912087,
          lng: -0.1797294
        }
      },
      {
        id: 7,
        state: 'covered',
        image: require('./image_07.jpg'),
        info: 'Etiam Lorem Amet Fermentum',
        center: {
          lat: 5.5912087,
          lng: -0.1797294
        }
      },
      {
        id: 7,
        state: 'covered',
        image: require('./image_07.jpg'),
        info: 'Etiam Lorem Amet Fermentum',
        center: {
          lat: 5.5912087,
          lng: -0.1797294
        }
      },
      {
        id: 8,
        state: 'covered',
        image: require('./image_08.jpg'),
        info: 'Etiam Lorem Amet Fermentum',
        center: {
          lat: 5.5912087,
          lng: -0.1797294
        }
      },
      {
        id: 8,
        state: 'covered',
        image: require('./image_08.jpg'),
        info: 'Etiam Lorem Amet Fermentum',
        center: {
          lat: 5.5912087,
          lng: -0.1797294
        }
      },
      {
        id: 9,
        state: 'covered',
        image: require('./image_09.jpg'),
        info: 'Etiam Lorem Amet Fermentum',
        center: {
          lat: 5.5912087,
          lng: -0.1797294
        }
      },
      {
        id: 9,
        state: 'covered',
        image: require('./image_09.jpg'),
        info: 'Etiam Lorem Amet Fermentum',
        center: {
          lat: 5.5912087,
          lng: -0.1797294
        }
      },
    ];
    this.memoryCardsRandom = _.shuffle(this.memoryCards);

    this.firstTurn = undefined;
    this.secondTurn = undefined;

    this.fsm = finiteStateMachine.StateMachine.create({
      initial: 'pristine',
      events: [
        {name: 'firstTurn', from: ['pristine'], to: 'firstTurned'},
        {name: 'secondTurn', from: ['firstTurned'], to: 'secondTurned'},
        {name: 'proceede', from: ['secondTurned'], to: 'pristine'},
        {name: 'win', from: ['pristine'], to: 'win'},
        {name: 'reset', from: ['win'], to: 'pristine'},
      ]
    });

    this._flexComponent();
  }
  
  turnCard(card){
    if (card.state==='covered' && ['pristine', 'firstTurned'].indexOf(this.fsm.current) > -1) {
      switch(this.fsm.current) {
        case 'pristine':
          card.state = 'turned';
          this.firstTurn = card;
          this.fsm.firstTurn();
          break;
        case 'firstTurned':
          card.state = 'turned';
          this.secondTurn = card;
          this.fsm.secondTurn();
          break;
      }
      this.evaluateRound();
    }
    else if (card.state==='matched') {
      this._log.debug('open modal...');

      /* @ngInject */
      let DialogCtrl = ($scope, $mdDialog, card) => {
        $scope.card = card;

        angular.extend($scope, {

          center: {
              lat: card.center.lat,
              lng: card.center.lng,
              zoom: 9
          },
          defaults: {
              scrollWheelZoom: false
          }
        });

        $scope.close = () => {
          $mdDialog.hide();  
        }
      }
      
      this.$mdDialog.show({
        controller: DialogCtrl,
        template: require('./dialog.jade')(),
        parent: angular.element(document.body),
        clickOutsideToClose:true,
        fullscreen: true,
        locals: {
          card: card
        }
      })
    }
  }

  evaluateRound( ){
    this._log.debug('evaluating state...');
    switch(this.fsm.current) {
      case 'secondTurned':
        if(this.firstTurn.id === this.secondTurn.id){
          this._log.debug('a match!');
          this.firstTurn.state = 'matched';
          this.secondTurn.state = 'matched';
          this._clearSelection();
          this.fsm.proceede();
          this.evaluateGame();
        }
        else {
          let callback = () => {
            this.firstTurn.state = 'covered';
            this.secondTurn.state = 'covered';
            this._clearSelection();
            this.fsm.proceede();
          }
          this.$timeout(callback, 1000);
        }
        break;
    }
  }

  evaluateGame() {
    let covered = _.filter(this.memoryCardsRandom, function(o) {
      return o.state === 'covered'; 
    });
    if (!covered.length) {
      this.fsm.win();

      let alert = this.$mdDialog.alert({
        title: 'Congratulations!',
        textContent: 'You won the game.',
        ok: 'Close'
      });

      this.$mdDialog
        .show( alert )
        .finally(function() {
          alert = undefined;
        });
    }
  }


  resetGame() {
    _.forEach(this.memoryCardsRandom, function(value) {
      value.state = 'covered'; 
    });

    this.memoryCardsRandom = _.shuffle(this.memoryCards);
    this.fsm.reset();
  }

  _clearSelection(){
    this.firstTurn = undefined;
    this.secondTurn = undefined;
  }

  _flexComponent(){
     this.$element.addClass('layout-column flex');
  }

}

let memoryCmp = {
  controller: 'memoryCmpCtrl',
  template: require('./component.jade')(),
  bindings: {
  },
};

const MODULE_NAME = 'app.views.memoryCmp.component';

angular.module(MODULE_NAME, [
  'nemLogging',
  'ui-leaflet',
])
  .component('memoryCmp', memoryCmp)
  .controller('memoryCmpCtrl', memoryCmpCtrl);

export default MODULE_NAME;
