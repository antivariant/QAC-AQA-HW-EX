//Вариант 1
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        //0 0, 0 1, 0 2..., 1 0, 1 1, 1 2.. 9 0, 9 1...9 9
        console.log(i, j); 
    }
}

//Вариант 2: итераций вложенного цикла меньше
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 2; j++) {
        //0 0, 0 1, 1 0, 1 1, 2 0, 2 1...
        console.log(i, j); 
    }
    //тут переменная j больше не существует (let)
}