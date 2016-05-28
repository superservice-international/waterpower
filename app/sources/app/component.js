import angular from 'angular';
import appViews from './views';


class AppCtrl {
  constructor($window, $state) {

    let hideSplashScreen = new Event('hideSplashScreen');
    $window.dispatchEvent(hideSplashScreen);

    this._state = $state;
    this.url = 'https://git.byteyard.de/plitzenberger/generator-byteyard-angular1-project';
    this.views = [
      'jobs'
    ];
  }

  goToView(view){
    this._state.go(view);
  }
}

let appComponent = () => {
  return {
    controller: 'appComponentCtrl',
    controllerAs: 'app',
    template: require('./component.jade')
  };
};

const MODULE_NAME = 'app.component';

angular.module(MODULE_NAME, [
  appViews
])
  .directive('appComponent', appComponent)
  .controller('appComponentCtrl', AppCtrl);

export default MODULE_NAME;
