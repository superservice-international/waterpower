
class memoryCardCmpCtrl {
  /* @ngInject */
  constructor($log, $element) {
    this._log = $log;
    this.$element = $element;
  }
}

let memoryCardCmp = {
  controller: 'memoryCardCmpCtrl',
  template: require('./component.jade')(),
  bindings: {},
};

const MODULE_NAME = 'app.components.memoryCard.component';

angular.module(MODULE_NAME, [
])
  .component('memoryCardCmp', memoryCardCmp)
  .controller('memoryCardCmpCtrl', memoryCardCmpCtrl);

export default MODULE_NAME;
