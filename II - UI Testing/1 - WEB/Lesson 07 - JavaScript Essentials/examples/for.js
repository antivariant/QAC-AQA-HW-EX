//Вариант 1: с итератором let
for (let i = 0; i < 10; i++) {
    console.log(i);//от 0 до 9
}
console.log(`Конец цикла c let i=${i}`);//i=indefined

//Вариант 2: с итератором var
for (var i = 0; i < 10; i++) {
    console.log(i);//от 0 до 9
}
console.log(`Конец цикла c var i=${i}`);//i=10

//Вариант 3: с произвольным изменением итератора
for (var i = 0; i < 10; i+=2) {
    console.log(i);//0 2 4 6...
}
console.log(`Конец цикла c var i=${i}`);//i=10

//Вариант 4: с итерацией в обратную сторону
for (var i = 10; i > 0; i--) {
    console.log(i);//10-1
}
console.log(`Конец цикла c var i=${i}`);//i=0
