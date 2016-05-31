import materialDesign from 'angular-material';


/* @ngInject */
let themeConfig = ($mdThemingProvider) => {
  $mdThemingProvider
    .theme('default')
    //.primaryPalette('white')
    .accentPalette('blue');

  $mdThemingProvider.definePalette('customPrimaryPalette', {
    '50': 'ffffff',
    '100': 'ffffff',
    '200': 'ffffff',
    '300': 'ffffff',
    '400': 'ffffff',
    '500': 'ffffff',
    '600': 'ffffff',
    '700': 'ffffff',
    '800': 'ffffff',
    '900': 'ffffff',
    'A100': 'ffffff',
    'A200': 'ffffff',
    'A400': 'ffffff',
    'A700': 'ffffff',
    'contrastDefaultColor': 'dark',
    'contrastLightColors': [],
  });

  $mdThemingProvider
    .theme('default')
    .primaryPalette('customPrimaryPalette', {
      'default': '500',
      'hue-1': '50',
      'hue-2': '300',
      'hue-3': '700',
    });

  //$mdThemingProvider.definePalette('customAccentPalette', {
    //'50': 'ffffff',
    //'100': '93E2FC',
    //'200': '7ADDF8',
    //'300': '60D8F5',
    //'400': '47D3F1',
    //'500': '2ECEEE',
    //'600': '2CB5D1',
    //'700': '299CB4',
    //'800': '278396',
    //'900': '246A79',
    //'A100': '93E2FC',
    //'A200': '7ADDF8',
    //'A400': '47D3F1',
    //'A700': '299CB4',
    //'contrastDefaultColor': 'dark',
    //'contrastLightColors': ['500', '600', '700', '800', '900', 'A400', 'A700'],
  //});

  //$mdThemingProvider.definePalette('customWarnPalette', {
    //'50': 'FFEBEE',
    //'100': 'F2D0D4',
    //'200': 'E4B6B9',
    //'300': 'D79B9F',
    //'400': 'C98085',
    //'500': 'BC666A',
    //'600': 'AE4B50',
    //'700': 'A13E42',
    //'800': '943033',
    //'900': '872325',
    //'A100': 'F2D0D4',
    //'A200': 'E4B6B9',
    //'A400': 'C98085',
    //'A700': 'A13E42',
    //'contrastDefaultColor': 'dark',
    //'contrastLightColors': ['500', '600', '700', '800', '900', 'A400', 'A700'],
  //});

  //$mdThemingProvider.definePalette('customBackgroundPalette', {
    //'50': 'FDFDFD',
    //'100': 'F7F7F7',
    //'200': 'EFEFEF',
    //'300': 'E8E8E8',
    //'400': 'E0E0E0',
    //'500': 'D8D8D8',
    //'600': 'CACACC',
    //'700': 'C4C4C6',
    //'800': 'B0B2B4',
    //'900': 'A7A9AA',
    //'A100': 'F7F7F7',
    //'A200': 'EFEFEF',
    //'A400': 'E0E0E0',
    //'A700': 'C4C4C6',
    //'contrastDefaultColor': 'dark',
    //'contrastLightColors': [],
  //});

    //.accentPalette('red', {
      //'default': '500',
      //'hue-1': '50',
      //'hue-2': '700',
      //'hue-3': '900',
    //});
    //.warnPalette('customWarnPalette', {
      //'default': '500',
      //'hue-1': '100',
      //'hue-2': '400',
      //'hue-3': '900',
    //})
    //.backgroundPalette('customBackgroundPalette', {
      //'default': '50',
      //'hue-1': '100',
      //'hue-2': '400',
      //'hue-3': '900',
    //});
};

const MODULE_NAME = 'app.theme.config';

angular.module(MODULE_NAME, [
  materialDesign
])
  .config(themeConfig);

export default MODULE_NAME;
