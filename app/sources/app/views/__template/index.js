import angular from 'angular';

import __templateCmpModule from './Cmp';

// CSS IMPORTS
import './Cmp.scss';

const MODULE_NAME = 'app.views.__template';

angular.module(MODULE_NAME, [
  __templateCmpModule,
]);

export default MODULE_NAME;
