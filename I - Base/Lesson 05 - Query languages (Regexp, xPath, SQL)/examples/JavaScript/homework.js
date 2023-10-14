const reg =/input RegExp here/;

const str = "Jack Michael Lee, Jack David Wilson, Joe Andrew Lee"
const res = str.match(reg);
console.log(res.groups.name2);
