'use strict';

angular.module('kargoApp').component('postDetail', {
    templateUrl: 'views/postDetail.html',
    controller: function ($scope, $http, $stateParams, trackerValidator) {
        console.log($stateParams.postId);

        var x = trackerValidator("stuff");
        console.log(x);
        
        $http.get("http://jsonplaceholder.typicode.com/posts/" + $stateParams.postId).success(function (data) {
            $scope.post = data;
        });

        $http.get("http://kargotest.herokuapp.com/api/trackers?from=2015-01-01&to=2015-03-01").success(function (data) {


            var sortedData = trackerValidator(data);

            console.log(sortedData);
        });
    }
});