import _ from 'lodash';
let finiteStateMachine = require('javascript-state-machine');

class memoryCmpCtrl {
  /* @ngInject */
  constructor($log, $element) {
    this._log = $log;
    this.$element = $element;
    this.memoryCards = [
      {
        id: 1,
        background: "red",
        state: 'covered'
      },
      {
        id: 1,
        background: "red",
        state: 'covered'
      },
      {
        id: 2,
        background: "yellow",
        state: 'covered'
      },
      {
        id: 2,
        background: "yellow",
        state: 'covered'
      },
      {
        id: 3,
        background: "blue",
        state: 'covered'
      },
      {
        id: 3,
        background: "blue",
        state: 'covered'
      },
      {
        id: 4,
        background: "green",
        state: 'covered'
      },
      {
        id: 4,
        background: "green",
        state: 'covered'
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
        {name: 'win', from: ['secondTurned'], to: 'win'},
      ],
      //callbacks: {
        //onmatch: this._onmatch,
      //}
    });
  }
  
  turnCard(card){
    if (card.state==='covered') {
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
      this.evaluateState();
    }
  }

  //_firstTurn(){
  //}

  evaluateState( ){
    this._log.debug('evaluating state...');
    switch(this.fsm.current) {
      case 'secondTurned':
        if(this.firstTurn.id === this.secondTurn.id){
          this._log.debug('a match!');
          this.firstTurn.state = 'matched';
          this.secondTurn.state = 'matched';
          this._clearSelection();
          this.fsm.proceede();
        }
        else {
          this.firstTurn.state = 'covered';
          this.secondTurn.state = 'covered';
          this._clearSelection();
          this.fsm.proceede();
        }
        break;
    }
  }

  _clearSelection(){
    this.firstTurn = undefined;
    this.secondTurn = undefined;
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
