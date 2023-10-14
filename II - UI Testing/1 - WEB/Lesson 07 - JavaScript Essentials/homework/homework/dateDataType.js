//Show date in format of 01.12.2023
function getTodayInLocalDate() {
    var today = new Date();
    //implement your code here

    today = today.toLocaleDateString('ukr-UA');

    return today;//in format of 01.12.2023
}

//Number of days between two dates (days in Date format)
function getDaysBetweenTwoDates(dateBegin, dateEnd) {
    var days = undefined;
    //implement your code here

    days = (dateEnd - dateBegin) / (1000 * 60 * 60 * 24);

    return days;//number of days
}

//Compare two dates, given in ISO string format
//for example: 
//date1 = "2013-01-01T10:00:00.000Z"
//date2 = "2013-01-01T10:00:00.000+02:00"
function compareISOStringDates(date1, date2) {
    var result = undefined;
    //implement your code here
    var date1Date = new Date(date1);
    var date2Date = new Date(date2);
    var dateDiff = date2Date - date1Date;
    
    result = Math.sign(dateDiff);

    return result;//0 = equals, 1 = date2>date1, -1 = date1>date2
}

//Return local time from ISO string with GMT+0 Time Zone
//For example 2023-01-01T00:00:00.000Z returns 02:00 for GMT+2
function getUkrTimeStringFromISODateString(dateString) {
    var date = new Date(dateString);
    var localeTime = date.toLocaleTimeString("ukr-UA");
    return localeTime;//02:00
}



module.exports = {
    getTodayInLocalDate,
    getDaysBetweenTwoDates,
    compareISOStringDates,
    getUkrTimeStringFromISODateString
}
