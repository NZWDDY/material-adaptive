import articles from 'articles/Articles';
import { ExternalLogger } from 'utils/LogDecorator';

const URL_ICON_MENU    = 'assets/svg/menu.svg';
const URL_ICON_LIST    = 'assets/svg/list.svg';
const URL_ICON_BACK    = 'assets/svg/back.svg';
const URL_ICON_FORWARD = 'assets/svg/forward.svg';
const URL_ICON_EMAIL    = 'assets/svg/email.svg';
const URL_ICON_MESSAGE = 'assets/svg/message.svg';
const URL_ICON_RIGHT = 'assets/svg/right.svg';
const URL_ICON_GPLUS = 'assets/svg/gplus.svg';
const URL_ICON_HANGOUTS = 'assets/svg/hangouts.svg';


let $log = new ExternalLogger();
    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Configuring 'main' module" );

let moduleName = angular.module('main', [ articles] )
      .config( ($mdIconProvider, $mdThemingProvider) => {
        $log.debug( "Configuring $mdIconProvider" );

        // Register icons

        $mdIconProvider
          .icon('menu' ,URL_ICON_MENU, 24)
          .icon('list' ,URL_ICON_LIST, 24)
          .icon('back' ,URL_ICON_BACK, 24)
          .icon('forward' ,URL_ICON_FORWARD, 24)
          .icon('email' ,URL_ICON_EMAIL, 24)
          .icon('message' ,URL_ICON_MESSAGE, 24)
          .icon('right' ,URL_ICON_RIGHT, 24)
          .icon('gplus' ,URL_ICON_GPLUS, 24)
          .icon('hangouts' ,URL_ICON_HANGOUTS, 24);

        $mdThemingProvider.theme('default')
          .primaryPalette('grey', {
            'default': 'A100', 
            'hue-1': '100',
          })
          .accentPalette('blue-grey')
          .backgroundPalette('grey', {
            'default': '100'
          });
     })
    .name;

$log.debug( "Configured 'main' module"  + moduleName);

export default moduleName;

