var key = 100;
//Полная конструкция
switch (key) {
    case 50:
        console.log("key=50");
        break;
    case 100:
        console.log("key=100");
    default:
        console.log("key!=50 && key!=100")
        break;
}

//Конструкция без дефолтного значения
switch (key) {
    case 50:
        console.log("key=50");
        break;
    case 100:
        console.log("key=100");
}
