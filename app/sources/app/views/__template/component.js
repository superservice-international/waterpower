
class __templateCmpCtrl {
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

let __templateCmp = {
  controller: '__templateCmpCtrl',
  template: require('./Cmp.jade')(),
  bindings: {
    $router: '<'
  },
  $routeConfig: [
  ]
};

const MODULE_NAME = 'app.views.__template.Cmp';

angular.module(MODULE_NAME, [
])
  .Cmp('__templateCmp', __templateCmp)
  .controller('__templateCmpCtrl', __templateCmpCtrl);

export default MODULE_NAME;
