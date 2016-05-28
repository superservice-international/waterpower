import angular from 'angular';

import infoCmpModule from './component';

// CSS IMPORTS
import './component.scss';

const MODULE_NAME = 'app.views.info';

angular.module(MODULE_NAME, [
  infoCmpModule,
]);

export default MODULE_NAME;
