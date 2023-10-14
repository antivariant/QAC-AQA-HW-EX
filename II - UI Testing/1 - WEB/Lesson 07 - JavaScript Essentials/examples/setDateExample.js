console.log("\n\nsetFullYear=======================================");
let date = new Date("2022-03-01T00:00Z");
console.log("setFullYear. Initial date=", date);

date.setFullYear(2025);//2025-03-01T00:00:00.000Z
console.log("setFullYear(2025)=", date);
date.setUTCFullYear(2025);//2025-03-01T00:00:00.000Z
console.log("setUTCFullYear(2025)=", date);

date.setFullYear(2026, 1);//2026-02-01T00:00:00.000Z
console.log("setFullYear(2026, 1)=", date);
date.setUTCFullYear(2026, 1);//2026-02-01T00:00:00.000Z
console.log("setUTCFullYear(2026, 1)=", date);

date.setFullYear(2030, 2, 2);//2030-03-02T00:00
console.log("setFullYear(2030, 2, 2)", date);
date.setUTCFullYear(2030, 2, 2);//2030-03-02T00:00
console.log("setFullYear(2030, 2, 2)", date);

console.log("\n\nSetMonth=======================================");
date = new Date("2022-03-01T00:00Z");
console.log("SetMonth. Initial date=", date);

date.setMonth(1);//2022-02-01T00
console.log("setMonth(1)", date);
date.setUTCMonth(2);//2022-03-01T00
console.log("setUTCMonth(2)", date);

date.setMonth(0, 2);//2022-01-02T00
console.log("setMonth(0, 2)", date);
date.setUTCMonth(1, 3);//2022-02-03T00
console.log("setMonth(0, 2)", date);

//important!
date.setMonth(14);//more then 12 month (2022+1)-(14-12+1)-03T00
console.log("setMonth(14)", date);


console.log("\n\nSetDate=======================================");
date = new Date("2022-03-01T00:00Z");
console.log("Initial date=", date);

date.setDate(1);
console.log("setDate(1)", date);

console.log("\n\nSetHour=======================================");
date = new Date("2022-01-01T00:00Z");
console.log("Initial date=", date);

date.setHours(4);//Local time (GMT+2)
console.log("setHours(4)", date);//2022-01-01T02:00:00.000Z

//!Important UTC
date.setUTCHours(4);//UTC time!
console.log("setHours(4)", date);//2022-01-01T04:00:00.000Z

date.setHours(4,5);//Local time (GMT+2)
console.log("setHours(4,5)", date);//2022-01-01T02:05:00.000Z

date.setUTCHours(4,5);//UTC time!
console.log("setHours(4,5)", date);//2022-01-01T04:05:00.000Z

date.setHours(3,2,3);//Local time (GMT+2)
console.log("setHours(3,2,3)", date);//2022-01-01T01:02:03.000Z

date.setUTCHours(1,2,3);//UTC time!
console.log("setHours(1,2,3)", date);//2022-01-01T01:02:03.000Z

date.setHours(3,2,3,4);//Local time (GMT+2)
console.log("setHours(1,2,3,4)", date);//2022-01-01T01:02:03.004Z

date.setUTCHours(1,2,3,4);//UTC time!
console.log("setHours(1,2,3,4)", date);//2022-01-01T01:02:03.004Z

//!Important more then 60min, sec
date.setUTCHours(1, 65, 65);
//2022-01-01T02:06:05.004Z
console.log("setUTCHours(1, 65, 65)", date);

console.log("\n\nSetMinutes==========================================");
date = new Date("2022-01-01T00:00Z");
console.log("Initial date=", date);

date.setMinutes(10);
console.log("setMinutes(10)", date);//2022-01-01T00:10:00.000Z

date.setUTCMinutes(10);
console.log("setMinutes(10)", date);//2022-01-01T00:10:00.000Z

date.setMinutes(10, 10);
console.log("setMinutes(10,10)", date);//2022-01-01T00:10:10.000Z

date.setMinutes(10,10,10);
console.log("setMinutes(10,10,10)", date);//2022-01-01T00:10:10.010Z

date.setUTCMinutes(70);
console.log("setMinutes(70)", date);//2022-01-01T01:10:10.010Z


console.log("\n\nSetSeconds==========================================");
date = new Date("2022-01-01T00:00Z");
console.log("Initial date=", date);

date.setSeconds(10);
console.log("setSeconds(10)", date);//2022-01-01T00:00:10.000Z

date.setUTCSeconds(10);
console.log("setUTCSeconds(10)", date);//2022-01-01T00:00:10.000Z

date.setSeconds(10, 10);
console.log("setSeconds(10,10)", date);//2022-01-01T00:00:10.010Z

console.log("\n\nsetMilliseconds==========================================");
date = new Date("2022-01-01T00:00Z");
console.log("Initial date=", date);

date.setMilliseconds(10);
console.log("setMilliseconds(10)", date);//2022-01-01T00:00:00.010Z

date.setUTCMilliseconds(10);
console.log("setUTCMilliseconds(10)", date);//2022-01-01T00:00:00.010Z
