import angular from 'angular';

import memoryCardCmpModule from './memory-card';

const MODULE_NAME = 'app.components';

angular.module(MODULE_NAME, [
  memoryCardCmpModule
])

export default MODULE_NAME;
