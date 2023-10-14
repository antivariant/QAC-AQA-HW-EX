let date = new Date("2022-01-01T00:00Z");
console.log("date=", date);

//string Sat Jan 01 2022 02:00:00 GMT+0200 (Eastern European Standard Time)
const toString = date.toString();
console.log("toString()", typeof (toString), toString);

//string Sat, 01 Jan 2022 00:00:00 GMT
const toUTCString = date.toUTCString();
console.log("toUTCString()", typeof (toUTCString), toUTCString);

//string 2022-01-01T00:00:00.000Z
const toISOString = date.toISOString();
console.log("toISOString()", typeof (toISOString), toISOString);

//string Sat Jan 01 2022
const toDateString = date.toDateString();
console.log("toDateString()", typeof (toDateString), toDateString);

//string 01.01.2022
const toLocaleDateString = date.toLocaleDateString("ru-RU");
console.log("toLocaleDateString()",
    typeof (toLocaleDateString),
    toLocaleDateString
);

//string суббота, 1 января 2022 г.
const options = {
    weekday: 'long',//word
    year: 'numeric',//numeric
    month: 'long',//word
    day: 'numeric'//numeric
};
const toLocaleDateWithOptions = date.toLocaleDateString("ru-RU", options);
console.log("toLocaleDateString(locale, options)",
    typeof (toLocaleDateWithOptions),
    toLocaleDateWithOptions
);

//string 1 января 2022 г.
const optionsNoWeekday = {
    //weekday: 'long',//no weekend
    year: 'numeric',//numeric
    month: 'long',//word
    day: 'numeric'//numeric
};
const toLocaleDateNoWeekday = date.toLocaleDateString("ru-RU", optionsNoWeekday);
console.log("toLocaleDateString(locale, optionsWithoutWeekday)",
    typeof (toLocaleDateNoWeekday),
    toLocaleDateNoWeekday
);

//string 01.01.2022, 02:00:00
const toLocaleString = date.toLocaleString("ru-RU");
console.log("toLocaleString(locale)",
    typeof (toLocaleString),
    toLocaleString
);

//string Saturday, January 1, 2022 at 2:00:00 at night
const optionsLocale = {
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric',
    dayPeriod:'long',//only for en-US or similar (at night, in the afternoon...)
    hour:'numeric',
    minute:'numeric',
    second:'numeric'
}
//date = new Date("2022-01-01T14:30Z");//in the afternoon
const toLocaleStringWithOptions = date.toLocaleString("en-US", optionsLocale);
console.log("toLocaleString(locale, options)",
    typeof (toLocaleStringWithOptions),
    toLocaleStringWithOptions
);

//string 02:00:00 GMT+0200 (Eastern European Standard Time)
const toTimeString = date.toTimeString();
console.log("toTimeString()", typeof(toTimeString), toTimeString);

//string 02:00:00
const toLocaleTimeString = date.toLocaleTimeString("ru-RU");
console.log("toLocaleTimeString(locale)",
    typeof (toLocaleTimeString),
    toLocaleTimeString
);

//string 02:00
const localTimeOptions = {
    dayPeriod:'long',//only for en-US or similar (at night, in the afternoon...)
    hour:'numeric',
    minute:'numeric',
    //second:'numeric'  //no seconds     
}
const toLocaleTimeWithOptions = date.toLocaleTimeString("ru-RU",
    localTimeOptions);
console.log("toLocaleTimeString(locale, options)",
    typeof (toLocaleTimeWithOptions),
    toLocaleTimeWithOptions
);

//string 2:00 at night
const toLocaleTimeWithOptionsEN = date.toLocaleTimeString("en-US",
    localTimeOptions);
console.log("toLocaleTimeString(locale, options)",
    typeof (toLocaleTimeWithOptionsEN),
    toLocaleTimeWithOptionsEN
);

//string 2022-01-01T00:00:00.000Z
const JSONDate = date.toJSON();
console.log("toJSON", typeof (JSONDate), JSONDate);

//number -120 (minutes)
const timeZone = date.getTimezoneOffset();
console.log("getTimezoneOffset", typeof(timeZone), timeZone);

