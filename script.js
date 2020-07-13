let number = Math.round(Math.random() * 10);
let quess = 0;
let cont = true;
do{
    quess = parseInt(prompt("Угадайте число"))
    console.log(number, quess)
    if(quess !== number){
        cont = confirm("Вы не угадали число. Продолжить?")
    }else if (quess == number){
        alert("Число угадано")
    }
    if (cont == false){
        alert("Game over")
        break;
    }
}while(quess !== number)


