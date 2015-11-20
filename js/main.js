import angular from 'angular';
import 'angular-ui-router';

import config from './config';


import HomeController from './controllers/home.controller';

import HomeService from './services/home.service';

angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('HomeController', HomeController)
  .service('HomeService', HomeService)
  ;