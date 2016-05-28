import angular from 'angular';

import __templateCmpModule from './component';

// CSS IMPORTS
import './component.scss';

const MODULE_NAME = 'app.components.__template';

angular.module(MODULE_NAME, [
  __templateCmpModule,
]);

export default MODULE_NAME;
