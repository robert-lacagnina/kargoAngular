'use strict';

angular.module('kargoApp').factory('trackerValidator', function () {
    return function (trackerData) {

        var newDataArr = [];
        var dayInMilliseconds = 86400000;
        var newYearsDay = new Date(2015, 0, 1);

        //sort by date
        function sortByDate(arr) {
            arr.sort(function (a, b) {
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            });
        }

        sortByDate(trackerData);

        var startDate = new Date(trackerData[0].date);
        startDate = new Date(startDate.getTime() + startDate.getTimezoneOffset()*60000);

        var endDate = new Date(trackerData[trackerData.length -1].date);
        endDate = new Date(endDate.getTime() + endDate.getTimezoneOffset()*60000);

        var currentDate = startDate;

        while(currentDate.getTime() !== endDate.getTime()) {
            currentDate.setDate(currentDate.getDate() + 1);

            var exists = trackerData.some(function (item) {
                var date = new Date(item.date);
                date = new Date(date.getTime() + date.getTimezoneOffset()*60000);

                return date.getTime() == currentDate.getTime();

            });

            if(!exists) {
                var newDate = new Date(currentDate.toDateString());

                var newId = ((newDate.getTime() - newYearsDay.getTime()) / dayInMilliseconds) + 1;

                var newData = {
                        id: newId,
                        date: newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate(),
                        hits: 0
                    };

                newDataArr.push(newData);
            }
        }
        var fixedData = trackerData.concat(newDataArr);

        sortByDate(fixedData);

        return fixedData;

    }
});


