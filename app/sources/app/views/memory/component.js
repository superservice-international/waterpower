import _ from 'lodash';

class memoryCmpCtrl {
  /* @ngInject */
  constructor($log, $element) {
    this._log = $log;
    this.$element = $element;
    this.memoryCards = [
      {
        id: 1,
        background: "red"
      },
      {
        id: 1,
        background: "red"
      },
      {
        id: 2,
        background: "yellow"
      },
      {
        id: 2,
        background: "yellow"
      },
    ];
    this.memoryCardsRandom = _.shuffle(this.memoryCards);
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
