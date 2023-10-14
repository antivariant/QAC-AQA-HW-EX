let map = new Map();
map.set(1, 'Igor');
map.set(2, 'Dima');
map.set(1, 'Vova');
console.log(map);//Map(2) { 1 => 'Vova', 2 => 'Dima' }

let map2 = new Map([['Igor', '38-099-98-76-78'], ['Dima', '38-099-44-55']]);
console.log("map2=", map2);

console.log(map2.get('Igor'));//38-099-98-76-78
map2.delete('Igor');
console.log("delete('Igor')", map2);

map2.clear();
console.log("clear()", map2);

console.log("map has 'Vova'", map.has('Vova'));//false (looking for key)
console.log("map has 'Vova'", map.has(1));//true

//============= forEach===============
map2 = new Map([['Igor', '38-099-98-76'], ['Dima', '38-099-44-55']]);
map2.forEach((value, key, map) => {
   console.log(`${key} has phone ${value}`); 
});

for (element of map2) {
    console.log(`${element[1]} has key ${element[0]}`);
}

//======================
console.log(map2.keys());//[Map Iterator] { 'Igor', 'Dima' }
console.log(map2.values());//[Map Iterator] { '38-099-98-76', '38-099-44-55' }

console.log("size=", map2.size);