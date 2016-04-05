'use strict';

angular
  .module('kargoApp', [
    'ngAnimate',
    'ui.router'
  ])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        //$urlRouterProvider.when('', "/");
        //$urlRouterProvider.when('/post-detail', '/post-detail');

        $stateProvider.state('postList', {
            url: "/",
            template: "<post-table></post-table>"
        });

        $stateProvider.state('postDetail', {
                url: "/post-detail/{postId}",
                template: "<mytag></mytag>"
        });

        $locationProvider.html5Mode({
            enabled :true,
            requireBase: false
        });
});
