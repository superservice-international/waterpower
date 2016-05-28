import angular from 'angular';

import appTheme from './theme';
import appComponent from './component';
import appComponents from './components';


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  appTheme,
  appComponents,
  appComponent
]);

export default MODULE_NAME;
