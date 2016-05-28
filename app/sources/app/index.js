import angular from 'angular';

import appConfig from './config';
import appTheme from './theme';
import appComponent from './component';


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  appConfig,
  appTheme,
  appComponent
]);

export default MODULE_NAME;
