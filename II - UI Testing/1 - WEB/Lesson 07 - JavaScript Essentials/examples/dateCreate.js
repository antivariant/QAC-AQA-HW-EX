let datestr = Date();
console.log("Date()=", datestr);
let date = new Date(1976, 01, 12);
console.log("new Date(year, month, day)=", date);
let date1 = new Date("1976-01-12T12:00:00.00");
console.log("new Date(ISO)=", date1);
let dateSec = new Date(Date.now());
console.log("Date(Date.now())=", dateSec);
let dateSec1 = Date.parse("1976-01-12T12:00:00.00");
console.log("Date.parse(ISO)=", dateSec1);
console.log(typeof(dateSec1));

