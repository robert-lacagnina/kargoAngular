'use strict';

angular.module('kargoApp').component('postDetail', {
    templateUrl: 'views/postDetail.html',
    controller: function ($scope, $http, $stateParams) {
        console.log($stateParams.postId);

        $http.get("http://jsonplaceholder.typicode.com/posts/" + $stateParams.postId).success(function (data) {
            $scope.post = data;
        });
    }
});