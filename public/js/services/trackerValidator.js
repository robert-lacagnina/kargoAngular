'use strict';

angular.module('kargoApp').factory('trackerValidator', function (){
    return function (trackerData) {

        for(var i = 0; i < trackerData.length; i++) {
            if(i <= trackerData.length)
            {
                var currentDate = new Date(trackerData[i].date);
                var nextDate = new Date(trackerData[i + 1].date);

                if(math.abs(nextDate - currentDate) != 86400000)
                {
                    trackerData.splice(i, 0, {
                        id: i + 1,
                        date: currentDate.getDate() + 1,
                        hits: 0
                    })
                }
            }

        }
    }
});


