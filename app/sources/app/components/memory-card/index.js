import angular from 'angular';

import memoryCardCmpModule from './component';

// CSS IMPORTS
import './component.scss';

const MODULE_NAME = 'app.components.memoryCard';

angular.module(MODULE_NAME, [
  memoryCardCmpModule,
]);

export default MODULE_NAME;
