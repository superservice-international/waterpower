import angular from 'angular';

import memoryCmpModule from './component';

// CSS IMPORTS
import './component.scss';

const MODULE_NAME = 'app.views.memoryCmp';

angular.module(MODULE_NAME, [
  memoryCmpModule,
]);

export default MODULE_NAME;
