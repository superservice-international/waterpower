
class memoryCmpCtrl {
  /* @ngInject */
  constructor($log, $element) {
    this._log = $log;
    this.$element = $element;
  }

  flex(){
     this.$element.addClass('flex layout-column');
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
