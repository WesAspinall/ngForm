let config = function($stateProvider, $urlRouterProvider) {

  // A redirect, basically
  $urlRouterProvider.otherwise('/');

  // Since this is a simple app,
  // We are omitting the template file for our root
  $stateProvider
    .state('root', {
      abstract: true,
      template: '<div class="container" ui-view></div>'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/home.tpl.html'
    });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;