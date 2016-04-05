'use strict';

angular.module('kargoApp').component('mytag', {
    templateUrl: 'views/postDetail.html',
    controller: function ($scope, $http, $stateParams) {
        console.log($stateParams.postId);

        $http.get("http://jsonplaceholder.typicode.com/posts/" + $stateParams.postId).success(function (data) {
            //console.log(data);

            $scope.post = data;
        });
    }
});