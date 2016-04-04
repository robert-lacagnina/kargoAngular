'use strict';

angular
  .module('kargoApp', [
    'ngAnimate',
    'ui.router'
  ])
    .config(function($stateProvider, $urlRouterProvider) {


    $stateProvider.state('postList', {
        url: "/",
        template: "<post-table></post-table>"
    });

    $stateProvider.state('postDetail', {
            url: "/post-detail/:postId",
            template: "<span>Hello world!!</span>"
        });
});
