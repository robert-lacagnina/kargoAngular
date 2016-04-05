'use strict';

angular.module('kargoApp').factory('trackerValidator', function () {
    return function (trackerData) {

        var startDate = new Date(trackerData[0]);
        var newData = [];
        var dayInMilliseconds = 86400000;

        //sort by date
        function sortByDate() {
            trackerData.sort(function (a, b) {
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            });
        }

        sortByDate();

        //check if the next date is one day difference, if not, insert new record
        for(var i = 0; i < trackerData.length; i++) {

            if(i < trackerData.length - 1) {
                var currentDate = new Date(trackerData[i].date);
                var nextDate = new Date(trackerData[i + 1].date);

                if(nextDate - currentDate != dayInMilliseconds) {
                    newData.push({
                        id: (currentDate + 1) - startDate,
                        date: currentDate + 1,
                        hits: 0
                    });
                }
            }
        }

        trackerData.concat(newData);
        sortByDate();

        return trackerData;
    }
});


