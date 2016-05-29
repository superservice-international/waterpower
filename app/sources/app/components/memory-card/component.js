let finiteStateMachine = require('javascript-state-machine');

class memoryCardCmpCtrl {
  /* @ngInject */
  constructor($log, $element) {
    this._log = $log;
    this.$element = $element;
  }

  turnCard(){
    this._log.debug('turn card');
  }
}

let memoryCardCmp = {
  controller: 'memoryCardCmpCtrl',
  template: require('./component.jade')(),
  bindings: {
    cardId: '@',
    state: '@',
    image: '@'
  },
};

const MODULE_NAME = 'app.components.memoryCard.component';

angular.module(MODULE_NAME, [
])
  .component('memoryCardCmp', memoryCardCmp)
  .controller('memoryCardCmpCtrl', memoryCardCmpCtrl);

export default MODULE_NAME;
