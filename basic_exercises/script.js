// EXERCISE 1: function what return the bigger number.

function returnBig(n1, n2){
    if (n1 >= n2){
        return window.console.log(n1);
    }else{
        return window.console.log(n2);
    }
}

// Insert the numbers in the function bellow.
//returnBig(40,153);

// *********************************************************************************************
// EXERCISE 2: function what receive a array with 3 numbers and print then in order.

function order(n1, n2, n3){
    numbers = [n1, n2, n3];
    for (number in numbers){
        window.console.log(numbers[number]);
    }
}

// Insert your numbers bellow.
// order(2, 56, 77);

// *********************************************************************************************
// EXERCISE 3: Write the function what receive a function ant return the bigger then.

function bigger5(n1, n2, n3, n4, n5){
    numbers = [n1, n2, n3, n4, n5];
    for (number in numbers){
        if (numbers[number] >= n1 & numbers[number] >= n2 & 
            numbers[number] >= n3 & numbers[number] >= n4 &
             numbers[number] >= n5){
                 return window.console.log(numbers[number])
             }
    }
}

// Insert your numbers bellow.
// bigger5(90, 2, 45, 102, 5);

// *********************************************************************************************
// EXERCISE 4: Write the function what receive 5 numbers and return their average.

function average5(n1, n2, n3, n4, n5){
    average = (n1 + n2 + n3 + n4 + n5) / 5;
    window.console.log(average);
}

// Insert your numbers bellow.
//average5(10, 10, 10, 10, 10);

// *********************************************************************************************
// EXERCISE 5: Write the function what receive a number and print if it is odd or even.

function oddEven(number){
    if (number % 2 === 0){
        window.console.log('Odd');
    }else{
        window.console.log('Even');
    }
}

// Insert a number in function bellow.
// oddEven(11);

// *********************************************************************************************
/* EXERCISE 6: Escreva um programa que vá de 0 a 100 e imprima o número na tela caso não seja 
múltiplo de 4. Para cada número que seja múltiplo de 4 imprima "pi" no lugar */

function mult4(){
    for (let i = 1; i <= 100; i++){
        if (i % 4 === 0){
            window.console.log(3.14);
        }else{
            window.console.log(i);
        }
    }
}


// mult4();

// *********************************************************************************************
// EXERCISE 7: Write the function what receive a object and print your properties. 

function printProp(object){
    for (item in object){
        window.console.log(item, object[item]);
    }
}

// Insert any datas in this object.
id = {
    name : 'Jonas',
    age : 20,
    house : 'Toronto'
}

// Print properties with function bellow.
//printProp(id);

// *********************************************************************************************
/* EXERCISE 8: Escreva uma função que receba uma data e retorne um objeto com as propriedades 
dia, mês e ano Referentes a essa data. */

function propDate(date){
    date_2 = {
        day : date.getDate(),
        month : date.getMonth(),
        year : date.getFullYear()
    }
    console.log(date_2);
}

today = new Date();
// console.log(today)

// propDate(today);

// *********************************************************************************************
/* EXERCISE 9: Escreva um programa que receba um array de objetos com as propriedades altura e 
idade e imprima: A maior e menor altura e a média da idade */


let peoples = [];
let average_age = 0;
let bigger_h = 0;
let smaller_h = 0; 

function createPeople(name, height, age){
    let people = {
        nome : name,
        altura : height,
        idade : age
    }
    peoples.push(people);
}

function compareDatas(){
    for (let i = 0; i < peoples.length; i++){
        if (peoples[i].altura > bigger_h){
            bigger_h = peoples[i].altura;
        }
        smaller_h = peoples[i].altura;
        if (peoples[i].altura < smaller_h){
            smaller_h = peoples[i].altura;
        }
        average_age += peoples[i].idade / peoples.length;


        }console.log(`Bigger height: ${bigger_h}, Smaller height: ${smaller_h},
Average of ages: ${average_age}`);
        
    }  


createPeople('João', 1.90, 34);
createPeople('Marta', 1.70, 27);
createPeople('Flávio', 1.84, 48);
createPeople('Laura', 1.66, 22);
// console.log(peoples);

compareDatas();
