'use strict';

angular.module('kargoApp').component({
    templateUrl: 'postDetail.html',
    controller: function ($scope, $http, $stateParams) {
        //console.log($stateParams);

        http.get("http://jsonplaceholder.typicode.com/posts/" + $stateParams.postId).success(function (data) {
            //console.log(data);

            $scope.post = data;
        });
    }
});