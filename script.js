// // угадывание сгенерированного числа
// let number = Math.round(Math.random() * 10);
// let quess = 0;
// let cont = true;
// do{
//     quess = parseInt(prompt("Угадайте число"))
//     console.log(number, quess)
//     if(quess !== number){
//         cont = confirm("Вы не угадали число. Продолжить?")
//     }else if (quess == number){
//         alert("Число угадано!")
//     }
//     if (cont == false){
//         alert("Game over")
//         break;
//     }
// }while(quess !== number)

// // Запросить у пользователя значение, кратное которому будут выводиться числа - вывести их в консоль.

// let n = parseInt(prompt("Укажите число"))

// for(let i = 0; i<= 100; i++){
//     if(i % n == 0){
//         console.log(i)        
//     }
// }

// (Усложняем) Кроме кратного запросить количество чисел, которые следует вывести

let a = parseInt(prompt("Укажите число"));
let b = parseInt(prompt("Укажите количество чисел, которые нужно вывести"));
let count = 0;

for(let j = 0; j<= 100; j++){
    do{
        if(j % a == 0){
            console.log(j);           
        }
        count++;
    }while(count <= b);
}
