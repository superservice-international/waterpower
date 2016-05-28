import angular from 'angular';

import appTheme from './theme';
import appComponent from './component';


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  appTheme,
  appComponent
]);

export default MODULE_NAME;
