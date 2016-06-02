import angular from 'angular';
import memoryCmpModule from './memory';

const MODULE_NAME = 'app.views';

angular.module(MODULE_NAME, [
  memoryCmpModule,
])

export default MODULE_NAME;
