import angular from 'angular';


function locationConfig($locationProvider){
  $locationProvider.html5Mode(true);
}

const MODULE_NAME = 'app.config.location';

angular.module(MODULE_NAME, [])
.config(locationConfig)

export default MODULE_NAME;
