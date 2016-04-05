'use strict';

angular.module('kargoApp').component('postDetail', {
    templateUrl: 'views/postDetail.html',
    controller: function ($scope, $http, $stateParams, trackerValidator) {
        
        $http.get("http://jsonplaceholder.typicode.com/posts/" + $stateParams.postId).success(function (data) {
            $scope.post = data;
        });

        $http.get("http://kargotest.herokuapp.com/api/trackers?from=2015-01-01&to=2015-03-01").success(function (data) {

            var validatedTrackerData = trackerValidator(data.data);

            //console.log(validatedTrackerData);
        });
    }
});