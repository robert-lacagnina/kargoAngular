'use strict';

angular
  .module('kargoApp', [
    'ngAnimate',
    'ui.router'
  ])
    .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('postList', {
        url: "/",
        template: "<post-table></post-table>"
    });
});
