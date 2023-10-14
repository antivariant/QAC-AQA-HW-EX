const { getTodayInLocalDate,
    getDaysBetweenTwoDates,
    compareISOStringDates,
    getUkrTimeStringFromISODateString
} = require('../homework/dateDataType');

describe("Date type tests", () => {
    test('Show today in format 12.01.2023', () => {
        expect(getTodayInLocalDate()).
            toBe((new Date()).toLocaleDateString('ukr-UA'));
    });

    test('Days between 2013-01-01T00:00:00.000Z and 2013-01-02T00:00:00.000Z = 1', () => {
        const dateBegin = new Date('2013-01-01T00:00:00.000Z');
        const dateEnd = new Date('2013-01-02T00:00:00.000Z');
        expect(getDaysBetweenTwoDates(dateBegin, dateEnd)).toBe(1);
    });

    test('Compare ISO string dates. Equals.', () => {
        const date1 = "2013-01-01T10:00:00.000+02:00";
        const date2 = "2013-01-01T08:00:00.000Z";
        expect(compareISOStringDates(date1, date2)).toBe(0);
    });

    test('Compare ISO string dates. date2>date1.', () => {
        const date1 = "2013-01-01T10:00:00.000+02:00";
        const date2 = "2013-01-01T10:00:00.000Z";
        expect(compareISOStringDates(date1, date2)).toBe(1);
    });

    test('Compare ISO string dates. date1>date2.', () => {
        const date1 = "2013-01-01T10:00:00.000Z";
        const date2 = "2013-01-01T10:00:00.000+02:00";
        expect(compareISOStringDates(date1, date2)).toBe(-1);
    });

    test('Local Ukr (UTC+2) time of 2013-01-01T23:00:00.000Z \
should be 01:00:00', () => {
        expect(getUkrTimeStringFromISODateString("2013-01-01T23:00:00.000Z"))
            .toBe("01:00:00");
    });


});
