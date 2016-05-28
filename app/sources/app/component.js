import angular from 'angular';
import componentRouter from '@angular/router/angular1/angular_1_router';
import appViews from './views';


class AppCtrl {
  constructor($window, $rootRouter) {
    this.$rootRouter = $rootRouter;
  }
}

let appComponent = {
  controller: 'appComponentCtrl',
  controllerAs: 'app',
  template: require('./component.jade')(),
  $routeConfig: [
    {path: '/', name: 'Memory', component: 'memoryCmp', useAsDefault: true},
    {path: '/info', name: 'Info', component: 'infoCmp'},
  ]
};

const MODULE_NAME = 'app.component';

angular.module(MODULE_NAME, [
  appViews,
  'ngComponentRouter'
])
  .component('appComponent', appComponent)
  .value('$routerRootComponent', 'appComponent')
  .controller('appComponentCtrl', AppCtrl);

export default MODULE_NAME;
