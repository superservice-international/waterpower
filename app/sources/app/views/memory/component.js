import _ from 'lodash';
let finiteStateMachine = require('javascript-state-machine');

class memoryCmpCtrl {
  /* @ngInject */
  constructor($log, $element, $timeout) {
    this._log = $log;
    this.$element = $element;
    this.$timeout = $timeout;
    this.memoryCards = [
      {
        id: 1,
        background: "red",
        state: 'covered',
        image: require('./truck_1.jpg')
      },
      {
        id: 1,
        background: "red",
        state: 'covered',
        image: require('./truck_1.jpg')
      },
      {
        id: 2,
        background: "yellow",
        state: 'covered',
        image: require('./truck_2.jpg')
      },
      {
        id: 2,
        background: "yellow",
        state: 'covered',
        image: require('./truck_2.jpg')
      },
      {
        id: 3,
        background: "blue",
        state: 'covered',
        image: require('./truck_3.jpg')
      },
      {
        id: 3,
        background: "blue",
        state: 'covered',
        image: require('./truck_3.jpg')
      },
      {
        id: 4,
        background: "green",
        state: 'covered',
        image: require('./truck_4.jpg')
      },
      {
        id: 4,
        background: "green",
        state: 'covered',
        image: require('./truck_4.jpg')
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
      this._log.debug('we have a winner...');
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
])
  .component('memoryCmp', memoryCmp)
  .controller('memoryCmpCtrl', memoryCmpCtrl);

export default MODULE_NAME;
