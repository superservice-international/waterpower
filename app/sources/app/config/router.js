import angular from 'angular';
import uiRouter from 'angular-ui-router';


function routerConfig($urlRouterProvider){
  $urlRouterProvider.otherwise('/')
}

const MODULE_NAME = 'app.config.router';

angular.module(MODULE_NAME, [uiRouter])
.config(routerConfig)

export default MODULE_NAME;
