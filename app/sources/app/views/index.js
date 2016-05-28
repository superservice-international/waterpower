import angular from 'angular';
import infoCmpModule from './info';
import memoryCmpModule from './memory';

const MODULE_NAME = 'app.views';

angular.module(MODULE_NAME, [
  infoCmpModule,
  memoryCmpModule,
])

export default MODULE_NAME;
