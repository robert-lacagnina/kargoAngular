'use strict';

angular.module('kargoApp').factory('trackerValidator', function (){
    return function (json) {
        json.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);
        });
    }
});


