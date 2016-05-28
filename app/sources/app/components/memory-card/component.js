let finiteStateMachine = require('javascript-state-machine');

class memoryCardCmpCtrl {
  /* @ngInject */
  constructor($log, $element) {
    this._log = $log;
    this.$element = $element;
    this.fsm = finiteStateMachine.StateMachine.create({
      initial: 'covered',
      events: [
        {name: 'turn', from: ['covered'], to: 'turned'},
        {name: 'match', from: ['turned'], to: 'matched'},
      ],
      //callbacks: {
        //onsubmit: _handleSubmit,
        //onsuccess: _handleSuccess,
      //}
    });
  }
}

let memoryCardCmp = {
  controller: 'memoryCardCmpCtrl',
  template: require('./component.jade')(),
  bindings: {
    cardId: '@',
    background: '@'
  },
};

const MODULE_NAME = 'app.components.memoryCard.component';

angular.module(MODULE_NAME, [
])
  .component('memoryCardCmp', memoryCardCmp)
  .controller('memoryCardCmpCtrl', memoryCardCmpCtrl);

export default MODULE_NAME;
