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
        image: require('./keep_off.jpg'),
        title: 'Keep off!',
        info: 'Pressure for land for housing triggers disputes over land acquisition. In order to maintain their access to land urban and peri-urban dwellers build small structures or walls on their land and set up signs indicating the land has been already acquired.',
        center: {
          lat: 5.579660,
          lng: -0.177372
        }
      },
      {
        id: 1,
        state: 'covered',
        image: require('./keep_off.jpg'),
        title: 'Keep off!',
        info: 'Pressure for land for housing triggers disputes over land acquisition. In order to maintain their access to land urban and peri-urban dwellers build small structures or walls on their land and set up signs indicating the land has been already acquired.',
        center: {
          lat: 5.579660,
          lng: -0.177372
        }
      },
      {
        id: 2,
        state: 'covered',
        image: require('./urban_ag.jpg'),
        title: 'Urban Agriculture.',
        info: 'Urban Agriculture accounts for 90% of the vegetables produced and consumed in Accra. Yet, many of the farmers face land insecurity and challenges in accessing safe water for irrigation.',
        center: {
          lat: 5.610521,
          lng: -0.202300
        }
      },
      {
        id: 2,
        state: 'covered',
        image: require('./urban_ag.jpg'),
        title: 'Urban Agriculture.',
        info: 'Urban Agriculture accounts for 90% of the vegetables produced and consumed in Accra. Yet, many of the farmers face land insecurity and challenges in accessing safe water for irrigation.',
        center: {
          lat: 5.610521,
          lng: -0.202300
        }
      },
      {
        id: 3,
        state: 'covered',
        image: require('./luxury_housing.jpg'),
        title: 'Luxury housing in the wetland, Densu Delta',
        info: 'Sakumo Lagoon, Korle Lagoon and the delta of the Densu river located in Accra experience heavy encroachment due the rapid and uneven urbanization dynamics. Yet, not only poor urban dwellers encroach into wetlands but also luxury houses are built within the wetlands.',
        center: {
          lat: 5.556054,
          lng: -0.278178
        }
      },
      {
        id: 3,
        state: 'covered',
        image: require('./luxury_housing.jpg'),
        title: 'Luxury housing in the wetland, Densu Delta',
        info: 'Sakumo Lagoon, Korle Lagoon and the delta of the Densu river located in Accra experience heavy encroachment due the rapid and uneven urbanization dynamics. Yet, not only poor urban dwellers encroach into wetlands but also luxury houses are built within the wetlands.',
        center: {
          lat: 5.556054,
          lng: -0.278178
        }
      },
      {
        id: 4,
        state: 'covered',
        image: require('./water_sachet.jpg'),
        title: 'Clean water!',
        info: 'Sachet water, consist of 500ml plastic bags of water heat-sealed. Popularly referred as Pure Water, its presence everywhere, low price together with the general perception of higher quality than tap water made it one of the main drinking water source for people living and working in Accra. But it is also convenient for cleaning hands.',
        center: {
          lat: 5.549885,
          lng: -0.207756
        }
      },
      {
        id: 4,
        state: 'covered',
        image: require('./water_sachet.jpg'),
        title: 'Clean water!',
        info: 'Sachet water, consist of 500ml plastic bags of water heat-sealed. Popularly referred as Pure Water, its presence everywhere, low price together with the general perception of higher quality than tap water made it one of the main drinking water source for people living and working in Accra. But it is also convenient for cleaning hands.',
        center: {
          lat: 5.549885,
          lng: -0.207756
        }
      },
      {
        id: 5,
        state: 'covered',
        image: require('./water_buckets.jpg'),
        title: 'Buckets queuing at the standpipe.',
        info: 'Community standpipes are present in areas where residents cannot afford a household connection. Yet, the water is not flowing 24/7. Thus in the early morning and evening hours people and buckets form long queues waiting for water.',
        center: {
          lat: 5.705077,
          lng: -0.214591
        }
      },
      {
        id: 5,
        state: 'covered',
        image: require('./water_buckets.jpg'),
        title: 'Buckets queuing at the standpipe.',
        info: 'Community standpipes are present in areas where residents cannot afford a household connection. Yet, the water is not flowing 24/7. Thus in the early morning and evening hours people and buckets form long queues waiting for water.',
        center: {
          lat: 5.705077,
          lng: -0.214591
        }
      },
      {
        id: 6,
        state: 'covered',
        image: require('./kufuor_gallon.jpg'),
        title: 'Kufuor Gallons',
        info: 'Yellow jerrycans, popularly known as Kufuor Gallons, are a common object in Accra´s households. The jerrycan start its life as a container for cooking oil. With the water crisis that hit the country during the presidency of John Kufuor (2001-2009) the gallon has become omnipresent as water storing facility in the city.',
        center: {
          lat: 5.695068,
          lng: -0.034073
        }
      },
      {
        id: 6,
        state: 'covered',
        image: require('./kufuor_gallon.jpg'),
        title: 'Kufuor Gallons',
        info: 'Yellow jerrycans, popularly known as Kufuor Gallons, are a common object in Accra´s households. The jerrycan start its life as a container for cooking oil. With the water crisis that hit the country during the presidency of John Kufuor (2001-2009) the gallon has become omnipresent as water storing facility in the city.',
        center: {
          lat: 5.695068,
          lng: -0.034073
        }
      },
      {
        id: 7,
        state: 'covered',
        image: require('./water_pipeline.jpg'),
        title: 'Fragmented water supply.',
        info: 'The Greater Accra Metropolitan Area has two sources of freshwater: Weija lake and Volta river. These sources provide enough raw water to serve the needs of the population. Yet, only about half of the population living in the Metropolitan area has direct access to piped water. In particular poor urban neighborhoods are not covered by piped water infrastructure.',
        center: {
          lat: 6.165763,
          lng: 0.070056
        }
      },
      {
        id: 7,
        state: 'covered',
        image: require('./water_pipeline.jpg'),
        title: 'Fragmented water supply.',
        info: 'The Greater Accra Metropolitan Area has two sources of freshwater: Weija lake and Volta river. These sources provide enough raw water to serve the needs of the population. Yet, only about half of the population living in the Metropolitan area has direct access to piped water. In particular poor urban neighborhoods are not covered by piped water infrastructure.',
        center: {
          lat: 6.165763,
          lng: 0.070056
        }
      },
      {
        id: 8,
        state: 'covered',
        image: require('./water_blessing.jpg'),
        title: 'Water blessing.',
        info: 'Started as an emergency and filling-the-gap measure to deal with the limited availability of piped water supply in Accra, mobile water tankers are nowadays a common way to access water. Mobile water vendors operate 24/7 delivering water to households, institutions, construction and beverage companies.',
        center: {
          lat: 5.695183,
          lng: -0.288596
        }
      },
      {
        id: 8,
        state: 'covered',
        image: require('./water_blessing.jpg'),
        title: 'Water blessing.',
        info: 'Started as an emergency and filling-the-gap measure to deal with the limited availability of piped water supply in Accra, mobile water tankers are nowadays a common way to access water. Mobile water vendors operate 24/7 delivering water to households, institutions, construction and beverage companies.',
        center: {
          lat: 5.695183,
          lng: -0.288596
        }
      },
      {
        id: 9,
        state: 'covered',
        image: require('./privatization.jpg'),
        title: 'Water privatization?',
        info: 'Many households set up small water retailing businesses selling water to their neighbors. The black container is a Polytank a common water storing facilities which is also used by residents as a tool to deal with drinking water rationing.',
        center: {
          lat: 5.695183,
          lng: -0.288596
        }
      },
      {
        id: 9,
        state: 'covered',
        image: require('./privatization.jpg'),
        title: 'Water privatization?',
        info: 'Many households set up small water retailing businesses selling water to their neighbors. The black container is a Polytank a common water storing facilities which is also used by residents as a tool to deal with drinking water rationing.',
        center: {
          lat: 5.695183,
          lng: -0.288596
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
    this._showStartDialog();
  }

  _showStartDialog() {
      /* @ngInject */
      var StartDialogCtrl = ($scope, $mdDialog) => {
        $scope.close = () => {
          $mdDialog.hide();  
        }
      }

      this.$mdDialog.show({
        controller: StartDialogCtrl,
        template: require('./start-dialog.jade')(),
        parent: angular.element(document.body),
        clickOutsideToClose: true,
      })
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
              zoom: 12
          },
          defaults: {
              scrollWheelZoom: false,
              touchZoom: false
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
