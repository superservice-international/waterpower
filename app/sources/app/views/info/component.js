
class infoCmpCtrl {
  /* @ngInject */
  constructor($log, $element) {
    this._log = $log;
    this.$element = $element;
  }

  $onInit(){
    this.flexCmp();
  }

  flexCmp(){
     this.$element.addClass('flex layout-column');
  }
}

let infoCmp = {
  controller: 'infoCmpCtrl',
  template: require('./component.jade')(),
  bindings: {
  },
};

const MODULE_NAME = 'app.views.info.Cmp';

angular.module(MODULE_NAME, [
])
  .component('infoCmp', infoCmp)
  .controller('infoCmpCtrl', infoCmpCtrl);

export default MODULE_NAME;
