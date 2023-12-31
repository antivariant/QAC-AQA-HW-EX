//Вариант 1: два итератора ИЛИ, вместо запятой можно использовать ||
for (var i = 0, j = 0; i < 10, j < 30; i++, j += 2) {
    console.log(i, j);//i=0 j=0, i=1 j=2, i=2 j=4...
//цикл продолжается пока любое условие выполянется
//10 циклов i, 15 циклов j, поэтому 15 циклов всего 
}
console.log(`Конец цикла c var i=${i} j=${j}`);//i=15 j=30

//Вариант 2: два итератора И
for (var i = 0, j = 0; i < 10 && j < 30; i++, j += 2) {
    console.log(i, j);//i=0 j=0, i=1 j=2, i=2 j=4...
//цикл повторяется пока все условия выполняются
//10 циклов i, 15 циклов j, поэтому 10 циклов всего 
}
console.log(`Конец цикла c var i=${i} j=${j}`);//i=10 j=20


