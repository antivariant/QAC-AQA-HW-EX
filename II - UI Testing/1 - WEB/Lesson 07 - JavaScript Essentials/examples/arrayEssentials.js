var days = ['Mondey', 2, true];
console.log(days[0]);//Mondey

days[10] = 10;
console.log(days);//[ 'Mondey', 2, true, <7 empty items>, 10 ]

console.log(typeof(days[3]));//undefined