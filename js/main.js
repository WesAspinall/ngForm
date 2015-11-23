import angular from 'angular';
import 'angular-ui-router';

import config from './config';


import HomeController from './controllers/home.controller';

import HomeService from './services/home.service';

angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id':'sflCiC2xgPmNK1K1bjsC6admwP6YZYoYTOdflHPo',
        'X-Parse-REST-API-Key':'bZKebj6uJsNHc4aIZPeQsooMbN4s9yOwvIx0Gote'
      }
    }
  })
  .config(config)
  .controller('HomeController', HomeController)
  .service('HomeService', HomeService)
  ;