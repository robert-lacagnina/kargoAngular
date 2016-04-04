'use strict';

/**
 * @ngdoc overview
 * @name angularAppApp
 * @description
 * # angularAppApp
 *
 * Main module of the application.
 */
angular
  .module('kargoApp', [
    'ngAnimate',
    'ui.router'
  ]);

kargoApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('postList', {
        url: "/",
        templateUrl: "<post-list></post-list>"
    });
});
