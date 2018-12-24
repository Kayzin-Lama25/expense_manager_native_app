function getCurrentDate(todayDate) {
    today = new Date(todayDate);
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }
    var todayFormat = mm + '/' + dd + '/' + yyyy;
    return todayFormat;
}

function getCurrentTime(todayDate) {
    var today = new Date(todayDate);
    var hh = today.getHours();
    var mm = today.getMinutes();

    if (hh < 10) {
        hh = '0' + hh;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    var currentTime = hh + ':' + mm;
    return currentTime;
}

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
function getMonth(todayDate) {
    var today = new Date(todayDate);
    var mm = today.getMonth();
    return month[mm];
}

function getLastMonth(todayDate) {
    var today = new Date(todayDate);
    var mm = today.getMonth() - 1;
    if (mm < 0) {
        mm = 12;
    }
    //console.log("Last month .. ", month[mm])
    return month[mm];
}

function convertStringToDate(dateStr) {
    var date = new Date(dateStr);
    var day = date.getDate();
    if (day < 10) {
        day = '0' + day
    }
    return day;
}

function getMonthAndDateFormat(dateStr) {
    var date = new Date(dateStr);
    var month = getMonth(date);
    var year = date.getFullYear();

    return month + " " + year;
}

function getYesterDayDate() {
    var todayTimeStamp = new Date; // Unix timestamp in milliseconds
    var oneDayTimeStamp = 1000 * 60 * 60 * 24; // Milliseconds in a day
    var diff = todayTimeStamp - oneDayTimeStamp;
    var yesterdayDate = new Date(diff);
    //var yesterdayString = yesterdayDate.getFullYear() + '-' + (yesterdayDate.getMonth() + 1) + '-' + yesterdayDate.getDate();
    var yesterdayString = ((yesterdayDate.getMonth() + 1)) + '/' + yesterdayDate.getDate() + '/' + yesterdayDate.getFullYear();
    return yesterdayString;
}

function getLastSevenDate() {
    var todayTimeStamp = new Date; // Unix timestamp in milliseconds
    var oneDayTimeStamp = 1000 * 60 * 60 * 24; // Milliseconds in a day
    var sevenDay = todayTimeStamp - (oneDayTimeStamp * 7);
    var seven = new Date(sevenDay);
    return seven;
}

export { getCurrentDate, getCurrentTime, getMonth, convertStringToDate, getMonthAndDateFormat, getYesterDayDate, getLastSevenDate, getLastMonth };