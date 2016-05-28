
class __templateCmpCtrl {
  /* @ngInject */
  constructor($log, $element) {
    this._log = $log;
    this.$element = $element;
  }
}

let __templateCmp = {
  controller: '__templateCmpCtrl',
  template: require('./component.jade')(),
  bindings: {},
};

const MODULE_NAME = 'app.components.__template.component';

angular.module(MODULE_NAME, [
])
  .component('__templateCmp', __templateCmp)
  .controller('__templateCmpCtrl', __templateCmpCtrl);

export default MODULE_NAME;
