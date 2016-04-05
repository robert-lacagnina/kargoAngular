'use strict';

angular.module('kargoApp').factory('trackerValidator', function () {
    return function (trackerData) {

        //sort by date
        function sortByDate() {
            trackerData.sort(function (a, b) {
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            });
        }

        sortByDate();

        console.log(trackerData);
        var startDate = new Date(trackerData[0].date);
        startDate = new Date(startDate.getTime() + startDate.getTimezoneOffset()*60000);

        var newYearsDay = new Date(2015, 0, 1);

        //var endDateStr = new Date(trackerData[trackerData.length]);
        //console.log('start date: ' + startDate);

        var endDate = new Date(trackerData[trackerData.length -1].date);
        // endDate = new Date(endDate.getTime() + endDate.getTimezoneOffset()*60000);

        endDate.setDate(endDate.getDate() + 2);


        //var dayInMilliseconds = 86400000;

        var currentDate = startDate;
        //console.log(startDate);
        console.log(endDate);

        while(currentDate.getTime() != endDate.getTime()) {
            console.log(currentDate);
            currentDate.setDate(currentDate.getDate() + 1);

            break;
        }

        //check if the next date is one day difference, if not, insert new record
        //for(var i = 0; i < trackerData.length; i++) {
        //var i = 0;
        //var len = trackerData.length;
        //while(i < len && trackerData[i].date != endDateStr) {
        //
        //    if(i < trackerData.length - 1) {
        //        var currentDate = new Date(trackerData[i].date);
        //        var nextDate = new Date(trackerData[i + 1].date);
        //
        //        currentDate = new Date(currentDate.getTime() + currentDate.getTimezoneOffset()*60000);
        //        nextDate = new Date(nextDate.getTime() + nextDate.getTimezoneOffset()*60000);
        //
        //        //console.log(currentDate);
        //
        //        if(nextDate - currentDate != dayInMilliseconds) {
        //
        //            var newDate = new Date(currentDate.toDateString());
        //            newDate.setDate(newDate.getDate() + 1);
        //            //console.log(newDate);
        //
        //            var newId = ((newDate.getTime() - newYearsDay.getTime()) / dayInMilliseconds) + 1;
        //
        //            var newData = {
        //                    id: newId,
        //                    date: newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate(),
        //                    hits: 0
        //                };
        //
        //            console.log(newData);
        //
        //            trackerData.push(newData);
        //            //sortByDate();
        //        }
        //    }
        //
        //    i++;
        //}

        //console.log(newData);

        //trackerData.concat(newData);
        //sortByDate();
        //
        //return trackerData;
    }
});


