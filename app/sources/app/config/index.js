import routerConfig from './router'
import locationConfig from './location'


const MODULE_NAME = 'app.config';

angular.module(MODULE_NAME, [
  routerConfig,
  locationConfig
])

export default MODULE_NAME;
